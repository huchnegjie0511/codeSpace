let obj ={name:'德玛西亚'};

let ws=new WeakSet();
ws.add(obj);//只要引用了obj对象，不管之后是否引用该对象都会被销毁

obj=null;//null代表obj变为可以被回收的对象 由于在此处使用了null，垃圾回收机制回收了obj


//console.log(obj.nname);//当后面有使用对象以后使用完毕以后才会回收
console.log(ws);//垃圾回收机制的生效时间是程序员不可控的，因此有时会导致ws有值
//垃圾回收无论如何都会回收

