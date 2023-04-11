console.log('hello world');

function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num-1)+fibonacci(num-2);
}

console.log(fibonacci(44));

console.log('program ended')