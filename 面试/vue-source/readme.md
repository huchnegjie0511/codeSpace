## vue源码之compile



## 从vue源码中学到了什么
    代码之美   逻辑  封装  抽象  性能  严谨
    vue这样的框架可以写出来
- 模块化
    - reactivity 响应式
        effect track  trigger
        proxy 
        baseHandler 
    - 正则表达式
        [\s]
    - 闭包的使用
        - 在vue源码中学习到闭包的使用案例
        - compile模块 由template 字符串转虚拟DOM时， 我们会先tokenizer 
            在tokenizer函数内部会闭包一个push方法，用于收集token的关键信息
            比如标签 属性 文本等等
            - 私有 不影响外界 可读性就很好 把复杂留给自己 
        
    - compile   
        temp;ate -> ast -> VDOM
            parse 函数负责 template 字符串的解析
            tokenizer 分词 将template字符串先分词
        每个模块内部的功能也分工明确

        模拟字符串->tokens 数组 -> 虚拟DOM (AST walk递归) -> helper(位运算) -> 代码
