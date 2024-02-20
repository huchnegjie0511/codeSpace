function bubbleSort1(arr) {
    for(let m = 0;m<arr.length;m++){
        for(let n=0;n<arr.length-1-m;n++){
            if(arr[n]>arr[n+1]){
                swap(arr,n,n+1)
                
            }
        }
    }
    return arr;
}
function bubbleSort2(arr) {
    for(let m = 0;m<arr.length;m++){
        let flag = false;
        for(let n=0;n<arr.length-1-m;n++){
            if(arr[n]>arr[n+1]){
                swap(arr,n,n+1);
                flag = true;
            }
        }
        if(!flag){
            break;
        }
    }
    return arr;
}
function bubbleSort3(arr){
    let len=arr.length,k=len-1,swapPos=0;
    for(let m=0;m<len;m++){
        let flag=false;
        for(n=0;n<k;n++){
            if(arr[n]>arr[n+1]){
                swap(arr,n,n+1);
                flag=true;
                swapPos=n;
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
function shuffle(a){
    let len=a.length;
    for(let i=0;i<len;i++){
        let index=Math.floor(Math.random()*len-i);
        let temp=a[index];
        a[index]=a[len-1-i];
        a[len-1-i]=temp;
    }
}
function test(fn){
    let array=[]
    for(let i=0;i<10000;i++){
        if(i<=1000)
        array[i]=1000-i;
        else
        array[i]=i;
    }
    console.log('========================')
let start = new Date-0
fn(array);
console.log('部分有序的数组排序时间：'+fn.name+' '+(new Date-0-start)+'ms')
shuffle(array);
start = new Date-0
fn(array)
console.log('完全无序的数组排序时间：'+fn.name+' ' +(new Date-0-start)+'ms')

}

test(bubbleSort1)
test(bubbleSort2)  
test(bubbleSort3)