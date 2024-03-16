let obj ={
    a:1,
    b:{
        n:2
    }
}
// 管道通讯
function deepClone(obj){
    return new Promise((resolve)=>{
        const {port1,port2}= new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage=(msg)=>{
            resolve(msg.data)
        }
    })
}
async function fn()
{
    let objClone=await deepClone(obj)
    obj.b.n=3
    console.log(objClone) 
}
fn()

