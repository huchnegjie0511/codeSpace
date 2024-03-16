function Parent() {
    this.name = 'Parent';
}

Parent.prototype.sayHello = function() {
    console.log('Hello from ' + this.name);
};

function Child() {
    Parent.call(this);
    this.type = 'Child';
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child = new Child();
child.sayHello(); // 输出 "Hello from Child"
