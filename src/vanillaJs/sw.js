const CACHE_NAME = "my_site_cache_v1";
let urlsToCache = ["/", "/styles/main.js", "/scrip/main.js"];

self.addEventListener("install", function(event) {
  //Perform install steps

  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        //IMPORTANT: clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function(response) {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          var responseToCache = response.clone();

          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
        });
      })
      .catch(function() {
        //go to the network and return response
        return event.default();
      })
      .catch(function() {
        return caches.match("/fallback.html");
      })
  );
});
