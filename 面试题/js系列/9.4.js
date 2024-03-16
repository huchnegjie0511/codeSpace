function greet() {
    console.log('Hello, ' + this.name);
}
const obj = { name: 'Bob' };
greet.call(obj); // 输出 "Hello, Bob"
// 强制把 greet 函数的 this 绑定到 obj 对象上，输出 "Hello, Bob"。
great.apply(obj); // 输出 "Hello, Bob"