const coins=[1,2,5],amount=11
//11-5=6 原本是思考如何凑11，现在变为凑6
//6-5=1 现在变为凑1



 var coinChange = function(coins,amount){
    if (amount===0)  return 0;
    let max={};
    for(let i=coins.length-1;i>=0;i--){
        if(amount/coins[i]>=1){//最大面值的硬币用得了   找到了能用的最大面值
            max[coins[i]]=amount/coins[i];
            let rest =amount % coins[i]; 
            max=Object.assign(max,coinChange(coins,rest));
        }
    }
    return max
 }