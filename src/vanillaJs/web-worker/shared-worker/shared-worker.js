let ports = [];
let i = 0;
onconnect = function(e) {
  var port = e.ports[0];

  //push port to ports
  ports.push(port);
  port.addEventListener("message", function(message) {
    i++;
    for (let index = 0; index < ports.length; index++) {
      const response =
        i + "-" + message.data.page + ">> " + message.data.message;

      let portt = ports[index];
      portt.postMessage(response);
    }
  });

  //open the port
  port.start();
};
