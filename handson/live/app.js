const {fork} = require('child_process');
const fib = fork('fibonacci.js');


console.log('hello world');

// function fibonacci(num) {
//     if (num <= 1) return 1;
//     return fibonacci(num-1)+fibonacci(num-2);
// }

fib.send(44);

// console.log(fibonacci(44));

fib.on('message', (fibonacciValue) => console.log(fibonacciValue));

console.log('program ended')