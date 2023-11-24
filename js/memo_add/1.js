//永远不要相信用户输入   需要做校验
function add(a,b){
    if(arguments.length !=2){
        throw new Error('参数错误');
    
    }//arguments是类数组，参数对象，校验参数
    if(typeof a != 'number'||typeof b !='number'){
        throw new Error('请传入参数');
    }
    return a+b;
};
function memoize(fn){//静态到动态转变
    if(typeof fn != 'function'){
        throw new Error('请传入函数');
    }
    var cache={}//key：value o(1) 空间换时间
    return function(){
        //唯一性
        var key =arguments.length + Array.prototype.join.call(arguments,",");//好处是不需要浏览器支持es6
        //将函数运行时的this指向argument   argument是一个类数组，没有join方法，需要argument的参数用，拼接
        console.log(key);
        if (key in cache){
            return cache[key]
        }else{
            return cache[key] = fn.apply(this,arguments);
        }
    }
}
const memoizedAdd = memoize(add);
memoizedAdd(1,2)
memoizedAdd(1,2)

// try{
//     console.log(add(1,2));
// }
// catch{
//     console.log(err);
// }

//js不严格， 编译阶段不长 如果对象出现问题就会把函数全部混乱
//argument代表参数
// try{
//     add();
// }
// catch(err){
//     console.log();
// }
// console.log(add());
// console.log('111');