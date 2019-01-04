if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js", {
      scope: "./"
    })
    .then(registeration => {
      console.log("successful!!", registeration);
    })
    .catch(err => {
      console.log("error ", err);
    });
}


