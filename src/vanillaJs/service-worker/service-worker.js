//var cacheName = "v1";
var cacheName = "v2";
var cacheFiles = ["./", "./index.js"];

self.addEventListener("install", e => {
  console.log("[ServiceWorker] installed");

  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("activate", e => {
  console.log("[ServiceWorker] activated");

  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
          if (thisCacheName != cacheName) {
            console.log("[SericeWorker] removing cache files from Caches");

            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", e => {
  console.log("fetching ", e.request.url);

  e.respondWidth(
    caches.match(e.request).then(response => {
      if (response) {
        console.log("[ServiceWorker] Found in cache", e.request.url);
        return response;
      } else {
        var requetsClone = e.request.clone();

        fetch(requetsClone).then(response => {
          if (!response) {
            console.log("[ServiceWorker] No response from fetch ");
            return response;
          } else {
            var responseClone = response.clone();
            caches
              .open(cacheName)
              .then(function(cache) {
                cache.put(e.request, responseClone);
                return response;
              })
              .catch(err => {
                console.log("[ServiceWorker] Error fetching ", err);
              });
          }
        });
      }
    })
  );
});
