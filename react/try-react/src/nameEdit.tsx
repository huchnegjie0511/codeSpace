import *as React from 'react'

interface Props{
    userName:string;
    onChange:(e:React.ChangeEvent<HTMLAnchorElement>)=>void;
    // 定义对象说明它式change事件
}


const NameEditComponent:React.FC<Props>=(Props)=>{
    return (
        <div>
            <label>Username:</label>
            <input value={Props.userName} onChange={Props.onChange} />
            {/* 标签上加签名 */}
        </div>
    )
}




export default NameEditComponent