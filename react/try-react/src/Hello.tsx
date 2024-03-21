// UI组件，连状态都没有 性能优化 不需要更新
//store
import *as React from 'react';

interface Props{
    username:string
}
//Function Component  声明是个函数组件
// props 参数对象
const Hello:React.FC<Props>=(Props)=>{//泛型 传递参数   //React.FC  函数组件    泛指需要用到的函数
    return (
        <h2>Hello {Props.username}</h2>
    )
}

export default Hello