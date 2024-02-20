//当出现算法是有序数组的时候，改进原有的冒泡排序算法，可以大大减少资源消耗

function bubbleSort(arr) {
    for(let m = 0;m<arr.length;m++){
        let flag = false;
        for(let n=0;n<arr.length-1-m;n++){
            if(arr[n]>arr[n+1]){
                swap(arr,n,n+1);
                flag = true;
            }
            console.log('第'+m+'次排序后的数组为：'+arr)
        }
        if(!flag){
            console.log('结束排序')
            break;
        }
    }
    return arr;
}

function swap(arr,a,b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;    
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