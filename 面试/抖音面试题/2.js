//面试准备策略
function bfs(root){
    // 队列  FIFO 先进先出
    const queue= [root];
    while (queue.length){
        const currentNode = queue.shift();
        console.log(currentNode.value);
        if(currentNode.children){
            currentNodechildren.forEach(child=>{
                queue.push(child)
            })
        }
    }
}