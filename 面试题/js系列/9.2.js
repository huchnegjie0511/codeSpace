const obj = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
obj.greet(); // 输出 "Hello, Alice"
