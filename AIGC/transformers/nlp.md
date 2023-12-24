# 机器学习任务
transformers huggingface的核心库
-pipeline 分发任务
    pipeline（task，model）
- 数组和 hashTable|Dict
    - 相同点
        数据容器 线性
    - 区别
        数组 Dict(o(1)) Dict 和栈 队列 链表
        连续和不连续  内存空间
        非线性  树 图
        查找线性容器里 5？

- transformers 支持哪些nlp任务
    SUPPORTER_TASKS
    item值是一个Dict JS JSON
    for  k,v in    for 计数循环
    图解HTTP协议
    计算机组成原理
    summarization 总结思想
    zero-shot-image-classfication 图片检测
- 读/写 操作系统  I/O 操作 Input内存 
Output 硬盘 
    同步代码    I/O  远程 ->内存|硬盘   网络传输的耗时
    for（）  ms结束 多进程切换  轮循功能 
    阻塞
- 人生苦短，我用python
    - request 网络请求
    request.get(url,stream=True).raw
    get(http请求的方法)  get 明文请求 a
    post 提交表单
    - PIL库 图片的读写等...
        Image  r
        ImageDraw   w
        