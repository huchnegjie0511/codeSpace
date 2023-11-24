const memoized = require('./memo.js')
var count = 0;
var fibonacci =function(n){
    count++;
    return n<2?n:fibonacci(n-1)+fibonacci(n-2);
}
const memoizedFibonacci = memoized(fibonacci);


console.time("fibonacci");
memoizedFibonacci(30);
console.log(count);
console.timeEnd("fibonacci");//备忘录函数的使用的地方