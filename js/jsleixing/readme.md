# 基本数据类型
1.转布尔值
2.转数字
3.转字符串

4.原始值转对象

# 对象转原始值
- 转字符串 调用的其实就是Object.prototype.toString();
1.{}.toString() 返回由[object 和 class 和]组成的字符串
2.[].toString() 返回由数组内部元素以逗号拼接的字符串
3.xx.toString() 直接返回由字符串字面量


- valueOf 
1.用于转换包装类

# ToPrimitive
ToPrimitive(obj,String) ==>Number({}) 用户无法调用 对象调用ToString（）方法时自动调用、
1.如果参数 obj 是基本类型 直接返回
2.否则，调用valueOf（）方法，如果得到原始值，则返回
3.否则，调用ToString（）方法，如果得到原始值，则返回
4.否则，报错

ToPrimitive(obj,String) ==>String({})
1.如果参数 obj 是基本类型 直接返回
2.否则，调用valueOf（）方法，如果得到原始值，则返回
3.否则，调用ToString（）方法，如果得到原始值，则返回
4.否则，报错

# 对象转布尔就是true


# 一元运算符



# 二元运算符
lprim + rprim


ToPrmitive(v1)+ToPrimitive(v2)
1.当+两边由一个是字符串，则按字符串进行拼接
2.否则，转到number进行计算
