# michaelzhuo.github.io
port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
proxies:
    - { name: 套餐到期：2023-07-21, type: vmess, server: cn-guangzhou.applebench.tech, port: 53002, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: 'Miku 香港多协议智能边界连接 1000Mbps TCP', type: vmess, server: cn-guangzhou.applebench.tech, port: 53002, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: 'AWS香港 5000Mbps TCP', type: vmess, server: cn-guangzhou.applebench.tech, port: 41502, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: 'BuyVM 卢森堡 1000Mbps TCP', type: vmess, server: cn-telecom.applebench.tech, port: 18353, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: '台湾 Hinet 1000Mbps TCP', type: vmess, server: cn-guangzhou.applebench.tech, port: 56268, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: 'TWN 01', type: vmess, server: hinettw1.applebench.tech, port: 65531, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: 'RU 01', type: ss, server: cn-guangzhou.applebench.tech, port: 23135, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'TR 01', type: ss, server: cn-guangzhou.applebench.tech, port: 23134, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'KR 01', type: vmess, server: kr1.gfwvip.me, port: 65514, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true, network: ws, ws-opts: { path: /, headers: { Host: QWQ } }, ws-path: /, ws-headers: { Host: QWQ } }
    - { name: 'KR 02', type: trojan, server: kr2.gfwvip.me, port: 55563, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true, sni: kr2.gfwvip.me, skip-cert-verify: true }
    - { name: 'SGP 01', type: ss, server: sg1.gfwvip.me, port: 41839, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'SGP 02', type: trojan, server: sg2.gfwvip.me, port: 12897, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true, sni: sg2.gfwvip.me, skip-cert-verify: true }
    - { name: 'SGP 03', type: ss, server: sg3.gfwvip.me, port: 47124, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'SGP 04', type: trojan, server: sg4.gfwvip.me, port: 17878, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true, sni: sg4.gfwvip.me, skip-cert-verify: true }
    - { name: 'SGP 05', type: vmess, server: sg5.gfwvip.me, port: 44457, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: 'SGP 06', type: trojan, server: sg6.gfwvip.me, port: 55893, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true, sni: sg6.gfwvip.me, skip-cert-verify: true }
    - { name: 'HKG 01', type: vmess, server: hk1.gfwvip.me, port: 23129, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: 'HKG 02', type: trojan, server: hk2.gfwvip.me, port: 46932, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true, sni: hk2.gfwvip.me, skip-cert-verify: true }
    - { name: 'USA 05', type: ss, server: us5.gfwvip.me, port: 56298, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'USA 06', type: ss, server: us6.gfwvip.me, port: 47893, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'USA 07', type: ss, server: us7.gfwvip.me, port: 65531, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'JPN 01', type: ss, server: jp1.gfwvip.me, port: 42384, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'JPN 02', type: trojan, server: jp2.gfwvip.me, port: 41293, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true, sni: jp2.gfwvip.me, skip-cert-verify: true }
    - { name: 'JPN 03', type: ss, server: jp3.gfwvip.me, port: 12956, cipher: chacha20-ietf-poly1305, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true }
    - { name: 'JPN 04', type: trojan, server: jp4.gfwvip.me, port: 41298, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true, sni: jp4.gfwvip.me, skip-cert-verify: true }
    - { name: 'JPN 05', type: vmess, server: jp5.gfwvip.me, port: 65396, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
    - { name: 'JPN 06', type: trojan, server: jp6.gfwvip.me, port: 41578, password: 4cafa443-752e-4f99-b0fb-ea69a026db36, udp: true, sni: jp6.gfwvip.me, skip-cert-verify: true }
    - { name: 'JPN 07', type: vmess, server: jp7.gfwvip.me, port: 15639, uuid: 4cafa443-752e-4f99-b0fb-ea69a026db36, alterId: 0, cipher: auto, udp: true }
proxy-groups:
    - { name: Proxy, type: select, proxies: [自动选择, 故障转移, 'Miku 香港多协议智能边界连接 1000Mbps TCP', 'AWS香港 5000Mbps TCP', 'BuyVM 卢森堡 1000Mbps TCP', '台湾 Hinet 1000Mbps TCP', 'TWN 01', 'RU 01', 'TR 01', 'KR 01', 'KR 02', 'SGP 01', 'SGP 02', 'SGP 03', 'SGP 04', 'SGP 05', 'SGP 06', 'HKG 01', 'HKG 02', 'USA 05', 'USA 06', 'USA 07', 'JPN 01', 'JPN 02', 'JPN 03', 'JPN 04', 'JPN 05', 'JPN 06', 'JPN 07'] }
    - { name: 自动选择, type: url-test, proxies: ['Miku 香港多协议智能边界连接 1000Mbps TCP', 'AWS香港 5000Mbps TCP', 'BuyVM 卢森堡 1000Mbps TCP', '台湾 Hinet 1000Mbps TCP', 'TWN 01', 'RU 01', 'TR 01', 'KR 01', 'KR 02', 'SGP 01', 'SGP 02', 'SGP 03', 'SGP 04', 'SGP 05', 'SGP 06', 'HKG 01', 'HKG 02', 'USA 05', 'USA 06', 'USA 07', 'JPN 01', 'JPN 02', 'JPN 03', 'JPN 04', 'JPN 05', 'JPN 06', 'JPN 07'], url: 'http://www.gstatic.com/generate_204', interval: 86400 }
    - { name: 故障转移, type: fallback, proxies: ['Miku 香港多协议智能边界连接 1000Mbps TCP', 'AWS香港 5000Mbps TCP', 'BuyVM 卢森堡 1000Mbps TCP', '台湾 Hinet 1000Mbps TCP', 'TWN 01', 'RU 01', 'TR 01', 'KR 01', 'KR 02', 'SGP 01', 'SGP 02', 'SGP 03', 'SGP 04', 'SGP 05', 'SGP 06', 'HKG 01', 'HKG 02', 'USA 05', 'USA 06', 'USA 07', 'JPN 01', 'JPN 02', 'JPN 03', 'JPN 04', 'JPN 05', 'JPN 06', 'JPN 07'], url: 'http://www.gstatic.com/generate_204', interval: 7200 }

rules:
  - DOMAIN-SUFFIX,google.com,DIRECT
  - DOMAIN-KEYWORD,google,DIRECT
  - DOMAIN,google.com,DIRECT
  - DOMAIN-SUFFIX,ad.com,REJECT
  - GEOIP,CN,DIRECT
  - MATCH,DIRECT
