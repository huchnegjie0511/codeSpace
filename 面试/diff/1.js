const oldChildren = n1.children;
const newChildren = n2.children;

let lastIndex = 0//?

for(let i = 0;i<newChildren.length;i++)
{
    const newVNode = newChildren[i];
    let j = 0;
    let find = false;
    for(j;j<oldChildren.length;j++)
    {
        if(newVNode.key === oldChildren[j].key)
        {
            find = true;
            patch(oldVNode,newVNode,container)
        }
        if(j<lastIndex)
        {
            //插入元素比新增元素 性能好很多  insertBefore
            const anchor = prevVnode.el.nextSibling;//找到el节点的下一个节点
            insert(newVNode.val,container,anchor)//插入到下一个节点的前面
        }
        else{
            lastIndex = j
        }
        break;
    }
    
}