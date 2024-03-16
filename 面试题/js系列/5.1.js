let obj ={
    a:1,
    b:{
        n:2
    }
}


function deepClone(obj){
    let objClone=Array.isArray(obj)?[]:{}//引用类型除了function其他都是object
    for(let key in obj){
        if(obj.hasOwnProperty(key)){//深拷贝不拷贝继承的属性
            if(typeof obj[key]==='object'){
                objClone[key]=deepClone(obj[key])
            }else{
                objClone[key]=obj[key]
            }
        }
    }
}

let objClone=deepClone(obj)
obj.b.n=3
console.log(objClone.b.n) // 2