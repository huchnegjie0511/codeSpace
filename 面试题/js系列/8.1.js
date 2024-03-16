function Parent() {
    this.name = 'Parent';
}

Parent.prototype.sayHello = function() {
    console.log('Hello from ' + this.name);
};

function Child() {
    this.type = 'Child';
}

Child.prototype = new Parent();

var child = new Child();
child.sayHello(); // 输出 "Hello from Child"


// 原型必须展开才能看见
// 原型上原有的类型无法改动
