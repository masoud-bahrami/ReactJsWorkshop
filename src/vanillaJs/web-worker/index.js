const $sumBtn = document.getElementById("sumBtn");
const $sumBtnWebWorker = document.getElementById("sumBtnWebWorker");

const $sum = document.getElementById("sum");
const $result = document.getElementById("result");

//Create a Dedicated WebWorker to calculate result
const dedicatedWebWorker = new Worker("sum.js");

//Listen to messages from Dedcated WebWorker
dedicatedWebWorker.addEventListener("message", message => {
  $result.value = message.data;
});

function sum(num) {
  let i = 0;
  let result = 0;
  while (i <= num) {
    result += i;
    i++;
  }
  return result;
}

//Listen to addBtn click Event
$sumBtn.addEventListener("click", e => {
  let value = $sum.value;
  let result = sum(value);
  $result.value = result;
});

//Listen to addBtnWebWorker click Event
$sumBtnWebWorker.addEventListener("click", e => {
  let value = $sum.value;
  //Send message to Worker to start calculation in Parallel using wenworker
  dedicatedWebWorker.postMessage(value);
});

const $input = document.getElementById("input");
const $input1 = document.getElementById("input1");

const $preview = document.getElementById("preview");
const previewCtx = $preview.getContext("2d");

let worker = new Worker("worker.js");

worker.addEventListener("message", message => {
  const imageData = message.data;
  previewCtx.putImageData(imageData, 0, 0);
});

$input.addEventListener("change", e => {
  const files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    createImageBitmap(files[i]).then(bitmap => {
      var canv = document.createElement("canvas");
      canv.id = "canv" + i;

      canv.width = bitmap.width;
      canv.height = bitmap.height;

      const previewC = canv.getContext("2d");

      previewC.drawImage(bitmap, 0, 0);
      // adds the canvas to the body element
      document.body.appendChild(canv);

      const imageData = previewC.getImageData(0, 0, canv.width, canv.height);

      for (let x = 0; x < imageData.width; x++) {
        for (let y = 0; y < imageData.height; y++) {
          const index = (x + y * imageData.width) * 4;
          imageData[index + 3] = 127;
          imageData[index] = imageData[index] * 1.2;
        }
      }
      previewC.putImageData(imageData, 0, 0);
      // adds the canvas to #someBox
      document.getElementById("gallery").appendChild(canv);
    });
  }
});

$input1.addEventListener("change", e => {
  const files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    createImageBitmap(files[i]).then(bitmap => {
      var canv = document.createElement("canvas");
      canv.id = "canv" + i;

      canv.width = bitmap.width;
      canv.height = bitmap.height;

      const previewC = canv.getContext("2d");

      previewC.drawImage(bitmap, 0, 0);

      let worker = new Worker("worker.js");

      worker.addEventListener("message", message => {
        const imageData = message.data;
        previewC.putImageData(imageData, 0, 0);
        // adds the canvas to the body element
        document.body.appendChild(canv);

        // adds the canvas to #someBox
        document.getElementById("gallery").appendChild(canv);
      });

      const imageData = previewC.getImageData(0, 0, canv.width, canv.height);
      worker.postMessage(imageData, imageData.data.buffer);
    });
  }
});
