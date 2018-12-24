if ("service-worker" in navigator) {
  console.log("Service worker is supported!");

  window.addEventListener(
    "load",
    () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then(function(registeration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        });
    },
    err => {
      // registration failed :(
      console.log("Service Worker registeration faield!", err);
    }
  );
} else {
  console.log("Service worker is not supported!");
}
