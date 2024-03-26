- 什么是 diff 算法
    - vue/react等现代mvvm开发框架基于vdom的
    - 组件渲染返回虚拟dom  vdom通过 dom api 显示 
    - 当响应式数据更新后会生成新的虚拟dom 
    - 比较新旧两棵虚拟dom树，并收集 差异的算法叫做diff算法

- 为什么设计diff算法？
    出发点， 时间复杂度，   性能不好   1000*1000*1000 = 10亿
    减少移动的次数
    - 时间复杂度 O(n^3)
        - 每个节点跟另一dom树的所有节点都比较  O(n) key
            v-if/v-show    v-for
                todolist 翻页
        - 相同的key结点  所有的属性需要比对下（O(n)）
        - 比对完所有结点  O(n)
- diff算法
    - 简单 diff算法
        只做同层对比   type变了就不再对比子节点  跨层需要比较的场景的比较小
            不用去一味为了复用节点，跨层
            ABCDE  EABCD
            diff 算法除了考虑本身的时间复杂度以外，还需要考虑：dom操作的次数
            
    - 双端 diff算法
        子元素顺序发生改变
        O(n)


    VUE3的新diff
      - 递增子序列的diff算法
      


      旧 ABCD  j   新 DABC
        ABCD         DABC
        j =3         i=0    lastIndex = 3
        BCDA         i=1    lastIndex = 3
        j=0          i=2    lastIndex = 3
        
        
 双端队列比较
