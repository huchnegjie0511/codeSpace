// 1,234,567.891,234,5 国外标准货币表达方式
// 实现方案
function formatNumberWithCommas(){
    if(typeof num !=='number'){
        return 
    }
    //类型转换
    number+=""
    let [initerger,decimal]= number.split(".")
    //内部函数封装 复用 整数部分和小数部分都要千分位 加入，
    const doSplit=(num,isInteger=true)=>{
        if(num==='') return '';
        if(isInteger) num=num.solit('').reverse()
        let str=[]
        for(let i= 0;i<num.length;i++){
        if(i!==0&& i%3===0){
            str.push(',')
        }
        str.push(num[i]);
    }
    if(isInteger) return str.reverse().join('')
    return str.join('')
    }
    interger = doSplit(interger);
    decimal=doSplit(decimal,false);
    return interger+(decimal===''?'':'.'+decimal)
}