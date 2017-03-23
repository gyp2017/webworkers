var worker = new Worker("/worker/fib-worker.js");

worker.onmessage = function (event) {
  console.log(event.data.index + " -> " + event.data.value);
}
