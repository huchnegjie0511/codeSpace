- 位运算 & | 遵守了与或非的规则可以在二进制中进行运算   优点：位运算速度快 原因：位运算是直接对二进制进行操作
-  聊vue patch过程需要聊到位运算
    -  更新
    - old new 
    - dom的更新是在浏览器的渲染层
    - js在V8引擎中运行主线程进行dom更新
    - patch一次收集所有需要的更新（patches 补丁数组）  通知浏览器更新
let num1 = 10//1010
let num2 = 5//0101
let result = num1 & num2
console.log(result)
//先转化为二进制，然后进行与运算 

n n
o(n^2)
节点之间比对属性 文本 ...o(n^3)

[a,b,c,d]   [a,b,c,d]
