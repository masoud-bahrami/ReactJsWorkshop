function sum(num) {
  let i = 0;
  let result = 0;
  while (i <= num) {
    result += i;
    i++;
  }
  return result;
}

addEventListener("message", message => {
  let data = message.data;
  var result = sum(data);
  postMessage(result);
});

//in any worker type(dedicated or shared), we can use sub-workers
//to achive more paralel benefits in JS.
//In this case for very big number, we can create multiple sub-worker
//to compute a portion of specified number
//and then sum all results.

// addEventListener("message", message => {
//   let data = message.data;
//   const threshold = 100000000;
//   if (data <= threshold) {
//     var worker = new Worker("sum-subworker.js");
//     worker.addEventListener("message", message => {
//       worker.terminate();
//       postMessage(message.data);
//     });
//     worker.postMessage({ x: 0, y: data });
//   } else {
//     let workers = [];

//     let x = 0;
//     while (data > x) {
//       let worker = new Worker("add-subworker.js");
//       let y = x + threshold < data ? x + threshold : data;
//       workers.push({
//         worker: worker,
//         data: { x: x, y: y }
//       });
//       x += threshold + 1;
//     }
//     let xx = 0;
//     let results = [];
//     workers.forEach(worker => {
//       worker.worker.addEventListener("message", message => {
//         results.push(message.data);
//         worker.worker.terminate();
//         xx++;
//         if (xx == workers.length) {
//           postMessage(results.reduce((a, b) => a + b, 0));
//         }
//       });
//       worker.worker.postMessage(worker.data);
//     });
//   }
// });
