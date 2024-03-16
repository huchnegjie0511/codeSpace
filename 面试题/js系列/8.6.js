class Parent{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

class Child extends Parent{
    constructor(name, type){
        super(name);
        this.type = type;
    }
    getType(){
        return this.type;
    }
}

const c= new Child('Parent', 'Child');
console.log(c.getName()); // 输出 "Parent"

// es6的继承是使用寄生组合继承进行继承的