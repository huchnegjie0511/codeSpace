# let vs var
1. var可以存在声明提升 let不存在
2. var可以重复声明变量 let不会
3. var 声明的全局变量会添加在window上，let不会

# let vs const


在es6中，const所声明的原型是一旦创建就无法修改的，但是const创建的引用类型虽然说不能修改，但是引用类型的属性值是可以修改的
原始类型：
    1. 字符串
    2. 数字
    3. 布尔
    4. undefined
    5. null
    6. Symbol
引用类型：
    1. 对象
    2. 数组
    3. 函数