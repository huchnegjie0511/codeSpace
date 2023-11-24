//记忆函数，闭包的高级功能
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
            return cache[key] = f.apply(this, arguments)
        }
    }
}
//commonjs模块化方案
module.exports=memoize