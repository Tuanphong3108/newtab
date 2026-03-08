const CACHE_NAME = "minecraft-clock-v2";
const urlsToCache = [
  "/",                // root
  "/index.html",
  "/manifest.json",
  // "/icon.png", // nếu có icon
  "/music.mp3",       // <-- add file nhạc ở đây để cache offline
  'search.html',
  'manifest.json',
  'https://tuanphong3108.github.io/md3-loading/Loading_Indicator.gif'
];


// Cài đặt SW + cache file
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Dùng cache khi offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
