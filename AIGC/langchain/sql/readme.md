# AIGC 方向
- GPTs应用商店正式发布
    商机
    一家有AIGC思维的公司加入  AI电商

- python
    - LangChain
    - 后端 API Flask

- 生成代码 开发提效
    - Copilt
    - SQL 如何生成及分析
    
- SQL不是查询或数据分析的必须了
    AIGC 自然语言处理 

- 新的数据库查询范式
    - 提出问题（用户、小编、老板、产品经理、技术实施）
    - chatgpt 自然语言处理能力 生成SQL 新手快速上手，学习能力
    - 自动执行SQL 并拿到数据查询结果 AI应用 Agent LangChain
    - 根据用户需求生成json格式还是图表，都是小菜
    - 得到答案 结束
可以让任何人都拥有数据分析的能力


# 轻量的关系型数据库，大佬一般在测试产品想法的时候用它
# 本地数据库  python 自带
import sqlite3
# 数据库连接句柄
conn = sqlite3.connect('FlowerShop.db')
# 游标
cursor = conn.cursor()
# 执行sql 完成支持sql  三大范式
cursor.execute('''
  CREATE TABLE FLOWERS(
    ID INTEGER PRIMARY KEY,
    Name TEXT NOT NULL,
    Type TEXT NOT NULL,
    Source TEXT NOT NULL,
    PurchasePrice REAL,
    SalePrice REAL,
    StockQuantity INTEGER,
    SoldQuantity INTEGER,
    ExpiryDate DATE,
    Description TEXT,
    EntryDate DATE DEFAULT CURRENT_DATE
  );
''')

flowers = [ ('Rose', 'Flower', 'France', 1.2, 2.5, 100, 10, '2023-12-31', 'A beautiful red rose'), ('Tulip', 'Flower', 'Netherlands', 0.8, 2.0, 150, 25, '2024-12-31', 'A colorful tulip'), ('Lily', 'Flower', 'China', 1.5, 3.0, 80, 5, '2023-12-31', 'An elegant white lily'), ('Daisy', 'Flower', 'USA', 0.7, 1.8, 120, 15, '2023-12-31', 'A cheerful daisy flower'), ('Orchid', 'Flower', 'Brazil', 2.0, 4.0, 50, 2, '2023-12-31', 'A delicate purple orchid')]

for flower in flowers:
  cursor.execute('''
    INSERT INTO Flowers(Name, Type, Source, PurchasePrice, SalePrice, StockQuantity, SoldQuantity, ExpiryDate, Description )
    VALUES(?,?,?,?,?,?,?,?,?);
  ''', flower)
# 事务
conn.commit()
# 关闭数据库连接 为了并发 减少线程数
conn.close()


#text2SQL
!pip install openai==0.28.1  #llm
!pip install langchain  #AI框架
!pip install  langchain-experimental  #实验 sql

#有多少种不同的鲜花？ Select Distinct 数据库工程师  SQL比较专业的语法
# AI 产品经理


# langchain 来将llm和用户间chain起来 连数据库 八爪鱼
# langchain 有一个模块叫utilities  工具库
from langchain.utilities import SQLDatabase
from langchain.llms import OpenAI
from langchain_experimental.sql  import SQLDatabaseChain
#数据库对象
db=SQLDatabase.from_uri("sqlite:///FlowerShop.db")
# 返回openai实例 细节出来
llm = OpenAI(temperature=0,verbose=True,api_key='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')
#Chain 起来这些
#langchain 提供了各种chain
db_chain =SQLDatabaseChain.from_llm(llm,db,verbose=True)
response=db_chain.run("有多少种不同的鲜花")
print(response)


<!-- 结果 -->
> Entering new SQLDatabaseChain chain...
有多少种不同的鲜花
SQLQuery:SELECT COUNT(DISTINCT Name) FROM FLOWERS
SQLResult: [(5,)]
Answer:5
> Finished chain.
5