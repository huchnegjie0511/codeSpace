//使用map进行记录出现的对象，防止循环引用
const deepClone = (target,map = new WeakMap())=>{
    if(typeof target ==='object'||target === null){
        return target
    }
    // 函数  正则 日期  Map与Set 执行对应构造 返回新对象
    const constructor= target.constructor
    if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)){
        return new constructor(target)
    }

    // 解决 共同引用  循环引用的问题
    // 借用 'WeakMap' 作为缓存 记录每次复制的对象，在递归中，如果遇到已经复制过的对象，直接使用上次返回的，不需要重新拷贝
    if(map.get(target)){
        return map.get(target)
    }

    //创建新对象
    const cloneTarget = Array.isArray(target)?[]:{}
    map.set(target,cloneTarget)
    
    // 循环＋递归处理
    Object.keys(target).forEach(key =>{
        cloneTarget[key]=deepClone(target[key],map)
    })

    //返回结果
    return cloneTarget
}


