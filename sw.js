const CACHE_NAME = 'michaels-copilot-cache-v2';
const urlsToCache = [
  '/',
  '/rn.html', // 将您的点名页面添加到缓存列表中
  '/styles.css',
  '/mz.png', // 根据实际情况调整文件路径
  // 添加其他需要缓存的资源路径
];

self.addEventListener('install', function(event) {
  // 在安装 Service Worker 时缓存所有指定的资源
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // 当页面发起网络请求时，尝试从缓存中返回资源，如果资源不在缓存中，则从网络获取
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // 如果在缓存中找到匹配的资源，则直接返回缓存的版本
        if (response) {
          return response;
        }
        // 如果缓存中没有资源，则通过网络获取资源
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', function(event) {
  // 清理旧版本的缓存，确保只保留当前版本的缓存
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
