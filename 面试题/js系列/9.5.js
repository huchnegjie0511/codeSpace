// function Person(name) {
//     this.name = name;
// }
// const alice = new Person('Alice');
// console.log(alice.name); // 输出 "Alice"


function Car(name){
    this.name=name;
}

function myNew(...args){
    let obj={};
    obj.__proto__=args[0].prototype;
    Car.call(obj,...args.slice(1));
    return res instanceof Object?res:obj;
}

let car=myNew(Car,'Benz',1,2)
console.log(car.name) //Benz


// 构造函数的return是引用类型会影响new的执行结果  如果是基本类型则不会影响