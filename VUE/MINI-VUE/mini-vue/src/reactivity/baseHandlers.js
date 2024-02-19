const get= createGetter()
const set= createSetter()


function createGetter(){
    return function get(){
    console.log('target对象被读取值了');
    const res=Reflect.get(target, key, receiver) // 获取原对象的值
    return res
    }
}

function createSetter(){
    return function set(target, key, value, receiver) { // target
    console.log('target对象被修改值了', key, value);
    const res=Reflect.set(target, key, value, receiver) // 更新原对象的值
    return res
    }

}
export const mutableHandlers = {
  get,
  set,
}