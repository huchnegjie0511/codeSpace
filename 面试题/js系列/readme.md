5. 说说深浅拷贝
    - 是什么?
        拷贝指的是将一个对象中的元素复制到新的对象中,拷贝分为深拷贝和浅拷贝
        浅拷贝只拷贝对象的引用地址
        深拷贝会层层拷贝每一个属性值不受原对象修改值的影响
    - 浅拷贝常见方法
        1. object.assign
        2. 解构 
        3. concat
        4. slice
    - 常见的深拷贝方法
        1. JSON.parse(JSON.stringify(a))  --不能拷贝 Symbol function undefined bigint  和循环引用
           <!-- js前几年只有这一个方法 -->
        2. structedClone() 不能拷贝Symbol function
    - 函数的拷贝
6. 说说你对闭包的理解
    - 是什么？
        集合就是闭包  在js中的内部函数是一定可以使用外部函数的词法环境的变量的（内部函数一定可以访问外部函数的变量） 
        根据词法作用域的规则，内部函数总是能访问外部函数的变量，当内部函数对外部函数中的变量存在引用且被提到外部函数之外调用，即使外部函数执行完毕，它的执行上下文也无法被完全销毁，而是将内部函数引用的变量作为一个集合保留在调用栈之中，该集合被称为闭包
        闭包的机制存在的原因
            不污染全局变量 定义私有变量 封装模块  延长变量生命周期  
        主动使用闭包
            广告弹窗使用闭包 一直覆盖index   
        - 缺点
            内存泄漏
            使用null把用完的销毁
7. 说说原型
    - 是什么？
        原型是个对象，分为隐式原型和显式原型，隐式原型是对象上的_proto_，显式原型式函数上的Prototype属性，
        （构造函数和普通函数区别几乎没有）当我们要访问一个对象的属性时，js引擎不仅会在对象上查找，还会查找对象的隐式原型，顺着隐式原型层层往上查找，直到找到null
        对象的隐式原型等于创建该对象的构造函数的显式原型
        所有函数的隐式原型都等于Function的显式原型吗？箭头函数不一样，它没有构造函数，函数的_proto===Function.Prototype 箭头函数除外

8. js中如何实现继承
    1. 原型链继承 
        通过修改原型的方式将原型链的路径改变
        缺点： 
            1.对个实例之间公用了一个原型，属性会互相影响
            2.子类无法给父类传参
    2. 构造函数继承
        缺点：
            1. 无法继承到父类上的属性
    3. 组合继承（经典继承）
        缺点:
            父类被调用两次
    4. 原型式继承
        缺点：
            多个对象共用了同一个原型
9. 说说你对this的理解
    - 是什么？
        是函数中的一个关键字  用于代表函数作用域的指向 用于引用当前执行代码的对象
        
    - 绑定规则（先确定是否是独立调用，接下来才能确定绑定规则，前面什么都没有的时候就是直接调用）
        1. 默认绑定 -- 函数在哪个词法作用域中生效，this就指向哪个词法作用域，词法作用域需要找到底，也就是如果被函数包裹就需要找到包裹函数的词法作用域
        2. 隐式绑定 -- 当函数被一个对象所拥有且调用this指向该对象
        3. 隐式丢失 -- 多个对象链式调用函数，this指向最近的对象
        4. 显示绑定 -- call apply bind
        5. new绑定 --  用new进行函数绑定的时候，this指向实例对象  
    - 箭头函数
        箭头函数没有this的概念，如果写了的话是该箭头函数外层的非箭头函数的this