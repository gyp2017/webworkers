// File fib-worker.js
function fib(n) {
  // return n < 2 ? n : fib(n-1) + fib(n-2);

  let finArray = [];

  function inner(idx) {
    return idx < 2 ? idx : finArray[idx-1] + finArray[idx-2];
  }

  for (var idx = 0; idx < n; idx++) {
    finArray[idx] = inner(idx);
  }
  return inner(n);

}

for (var i = 0; i < 100; ++i) {
  postMessage({
    index: i,
    value: fib(i)
  });
}

/*
f(0) -> 0
f(1) -> 1
f(2) -> 1

f(3) -> f(2) + f(1) -> 1 + 1 -> 2
f(4) -> f(3) + f(2) -> 2 + 1 -> 3
f(5) -> f(4) + f(3) -> 3 + 2 -> 5
f(6) -> f(5) + f(4) -> 5 + 3 -> 8
f(7) -> f(6) + f(5) -> 8 + 5 -> 13
*/
