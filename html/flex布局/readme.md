# flex 布局（弹性布局）
 - 原理：通过给父级添加flex属性控制子盒子的元素的排列
    - 使用flex布局以后 float clear vertical-align属性失效
    - 伸缩布局=弹性布局=伸缩盒子布局=flex布局
    - 子容器可以横向排列也能纵向排列
 - 常用属性
    - flex-direction 设置主轴方向
        - 默认主轴为x轴 水平向右
        - 默认侧轴为y轴 垂直向下
        - flex-direction: row 排列默认
        - flex-direction: row-reverse 主轴倒序排列
        - flex-direction: column 主轴设置为y轴
        - flex-direction: column y轴倒叙排列
    - justify-content 设置主轴上的子元素排列方式
        - justify-content:flex-start  默认值 如果主轴为x轴，从左到右
        - justify-content:flex-end 从尾部开始排列
        - justify-content:center 在主轴居中对齐
        - justify-content:space-around 平分剩余空间
        - justify-content:space-between 两边贴边，其他平分

    - flex-wrap 设置子元素是否换行
        - flex-rap:wrap 默认不换行，如果装不下会缩小子元素的大小
        - flex-rap:nowrap  换行 
    - aligin-items 设置侧主轴上的子元素排列方式(单行)
        - align-items: flex-start 默认值 从上到下排列子轴
        - align-items:flex-end 从下到上
        - align-items:center 垂直居中（最多）
        - align-items:stretch 拉伸（子盒子不能给高度）
    - align-content 设置侧轴的子元素的排列方式（多行）
        - align-content：flex-start 默认在侧轴的头部开始排列
        - align-content：flex-end 在侧轴的尾部开始排列
        - align-content：center 在侧轴中间显示
        - align-content：space-around 子项在侧轴平分剩余空间
        - align-content：space-between 子项在侧轴先分布在两头，再平分剩余空间
        - align-content：stretch 设置子项元素高度平分父元素高度
    
    - flex-flow 复合属性，相当于同时设置了flex-direction和flex-wrap
        - flew-flow:row wrap;
    - flex子元素常见属性
        - flex: 数字  属性定义子项目分配剩余空间，用flex表示占几份
            div span nth-child(2){
                flex:2
            }
            div中的span的子元素的第二个专门给分两份
        - align-self:flex-end 改变某一个子项的顺序
        - order: 数字   改变排列顺序
