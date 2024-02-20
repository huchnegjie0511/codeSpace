function swap(arr,a,b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;    
}

function bubbleSort(arr) {
    for(let m = 0;m<arr.length;m++){
        for(let n=0;n<arr.length-1-m;n++){
            if(arr[n]>arr[n+1]){
                swap(arr,n,n+1)
                
            }
            console.log('第'+m+'次排序后的数组为：'+arr)
        }
    }
    return arr;
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