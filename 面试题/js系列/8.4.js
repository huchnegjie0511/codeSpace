function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var parent = {
    name: 'Parent',
    sayHello: function() {
        console.log('Hello from ' + this.name);
    }
};

var child = object(parent);
child.name = 'Child';
child.sayHello(); // 输出 "Hello from Child"
