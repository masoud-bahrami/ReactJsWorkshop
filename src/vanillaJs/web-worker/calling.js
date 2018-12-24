var worker = new Worker("web-worker/web-worker.js");

//send message to worker
worker.postMessage({ message: "Hello worker!!" });

//Listen to worker post messages
worker.addEventListener("message", function(event) {
  var message = event.data;
  alert(message);
});

//Termnating worker
worker.terminate();
