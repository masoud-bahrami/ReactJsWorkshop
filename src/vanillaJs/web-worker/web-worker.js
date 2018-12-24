self.addEventListener("message", function(event) {
  var message = event.data;

  self.postMessage(message.message + " processed!");
});

//Terminating this worker
self.close();
