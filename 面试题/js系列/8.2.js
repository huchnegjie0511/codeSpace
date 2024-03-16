function Parent() {
    this.name = 'Parent';
}

function Child() {
    Parent.call(this);
    this.type = 'Child';
}

var child = new Child();
console.log(child.name); // 输出 "Parent"
