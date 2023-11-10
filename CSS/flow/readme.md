#块级(特点)
1、默认占据一整行
2、可以设置宽高

#行内块(特点)
1、可以同行显示
2、可以设置宽高

#行内
1、可以同行显示
2、不可以设置宽高

#浮动
1、脱离文档流
2、文字环绕
3、让块级元素同行显示
4、让行内元素可以设置宽高
5、可以使用margin但是不能使用margin：0 auto;
缺点：导致父容器高度塌陷，后面的非浮动元素受到影响
例如首行浮动以后 后面的非浮动元素会上移

#清除浮动(清楚浮动的负面影响)
1、给父容器设置高度
2、在最后一个浮动元素之后添加新的元素，在新的元素上做清除浮动
3、在父容器伪元素after上做清除浮动
4、在下方被浮动影响的容器上做清除浮动
5、BFC

#BFC容器 Block Formatting Context 快捷格式化上下文

-哪些属性可以创建BFC效果
1、float：left||right；
2、position：absolute||fixed；
3、display：inline-block；
4、display：table-cell；//table的标签除了table-column其他的都可以
5、overflow：hidden||auto||overly||scroll
6、弹性盒子（display：flex||inline-flex）

-BFC的特点：
1、BFC容器在计算高度时会将浮动元素的高度也计算在内
2、解决内外margin问题
上述都可以互换，只需要通过display互换块
浮动和定位都能使文件脱离文档流
span