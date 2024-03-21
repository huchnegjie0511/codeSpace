// facebook   JS way  不用学API
//能用  JS表达的就不用API 
// 函数就是组件
// 返回一段template的就是组件
// hooks 驱动
//组件的构建  
import React from 'react'
import Hello from './Hello'//FC的声明
import NameEditComponet from './nameEdit'
//为组件声明一个props接口
function App() {
  //reactive hooks到底
  //name是状态的名字 setName是改变状态的名字  响应式
  //react 函数式
  const [name,setName]= React.useState("initialName")//使用name可以获取状态的值，使用setName可以改变状态的值
  const obj ={ a:1 }  //model
  //JS 逻辑
  //JSX是react 表示模板的创新写法，在JS里面写HTML
  //HTML是表示UI界面最直接简单的方式 
  // <T>类型传参
  const setUsernameState=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value)//event有target属性，但是不一定有value属性
  }
  
  return (
    //view层

    <>
      <div>
        App
        {obj.a}
        <Hello username={name} />
        <NameEditComponet userName={name} onChange={setName} />
      </div>
      
    </>
  )
}

export default App
