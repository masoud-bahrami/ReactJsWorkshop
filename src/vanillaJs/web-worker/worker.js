addEventListener("message", message => {
  const imageData = message.data;
  const w = imageData.width;
  const h = imageData.height;
  const data = imageData.data;

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const index = (x + y * w) * 4;
      data[index + 3] = 127;
      data[index] = data[index] * 1.2;
    }
  }
  postMessage(imageData, [imageData.data.buffer]);
  console.log(message);
});
