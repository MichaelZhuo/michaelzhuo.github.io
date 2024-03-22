// 定义缓存名称
const CACHE_NAME = 'offline-page-cache';

// 定义要缓存的静态资源
const urlsToCache = [
    '/',
    '/index.html'
    '/rn.html'
    'manifest.json'
    'man.json'
    'mz.png'
    'mzhuo.png'
    // 在这里添加要缓存的其他静态资源，如样式表、脚本、图像等
];

// 安装 Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// 拦截网络请求并从缓存中返回响应
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // 检查缓存中是否有匹配的资源
                if (response) {
                    return response; // 如果有，直接返回缓存的资源
                }
                // 如果缓存中没有匹配的资源，则使用网络请求
                return fetch(event.request);
            })
    );
});

// 清理过期缓存
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName !== CACHE_NAME;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
