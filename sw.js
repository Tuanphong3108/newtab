const CACHE_NAME = "minecraft-clock-v1";
const urlsToCache = [
  "/",                // root
  "/index.html",      // file chính
  "/manifest.json",   // manifest
  "/icon.png"         // icon
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
