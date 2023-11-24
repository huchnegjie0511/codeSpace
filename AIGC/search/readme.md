# 搜索

- 项目亮点 
    搜索比较难，可以在面试的时候讲出来
- 全栈
    - 前端  防抖和节流 （前端用户体验）
    - 后端  
        - SQL post LIKE '%${keyword}%'
        - 各种该数据放入hadoop 进行相应规则查询 eg：flink
        - Elastic Search 使用专业的解决方案进行加分   node
    - AIGC使用全新思想进行查询
- 数据？
    - python 爬虫 
    - AIGC 生成数据  
        get_response
        promot   电商网站

## 数据清洗
- pandas来处理aigc生成的text文本
    - split('\n')   按换行符切割
    - pandas 提供了DataFrame实例
      pd.DataFrame({"product_name"}) column_name
    - pd.head() 默认输出五条

- 文本如何转成向量  数学表达 openai 提供embedding 接口
    cosin值表示
openai的三种接口
- openai completion\chat\embedding

- embedding
    openai 的新接口
    查询keyword+数据 都进行向量计算
    cosine_smilarity 计算两个向量间的相似度 -》 无线接近于0 则为相同或相似
