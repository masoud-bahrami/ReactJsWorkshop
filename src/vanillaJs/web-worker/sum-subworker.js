function sum(x, y) {
  let result = 0;
  while (x <= y) {
    result += x;
    x++;
  }
  return result;
}

addEventListener("message", message => {
  let data = message.data;
  var result = sum(data.x, data.y);
  postMessage(result);
});
