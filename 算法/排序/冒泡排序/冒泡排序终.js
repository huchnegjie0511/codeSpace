function bubbleSort(arr){
    let len=arr.length,k=len-1,swapPos=0;
    for(let m=0;m<len;m++){
        let flag=false;
        for(n=0;n<k;n++){
            if(arr[n]>arr[n+1]){
                swap(arr,n,n+1);
                flag=true;
                swapPos=n;
                console.log('第'+m+'次排序后的数组为：'+arr)
            }
        }
        if(!flag){
            break;
        }
        k=swapPos;
    }
}
function swap(arr,a,b){
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

function test(arr){
    for(let i=0;i<10;i++){
        arr.push(Math.floor(Math.random()*100))
    }
}

let arr=[]
test(arr)
console.log('原数组为：'+arr)
bubbleSort(arr)