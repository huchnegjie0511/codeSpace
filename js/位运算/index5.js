const num = 5   //101
const lNum = num << 2
const rNum = num >> 2
console.log(rNum)
// 5*4  20
// 101  100
// 5*7
// 101  111  11100 111
// 100011  35
// 6*7  110  111  
// 101010

function multiply(x,y){
    let result = 0 ;
    while(y>0){
        if(y&1){
            result +=x
        }
        x=x<<1;
        y=y>>1;
    }
    return result
}
console.log(multiply(5,3))