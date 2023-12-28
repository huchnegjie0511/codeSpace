//es6 class类
//类是抽象的概念
class SingleDog{
    show(){
        console.log('我是一个单例对象')
    }

}
const s1=new SingleDog()
const s2=new SingleDog()
s1===s2//true 不同的内存空间 值 也不一定相等