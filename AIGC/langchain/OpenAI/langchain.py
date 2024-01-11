# # !pip install langchain==0.0.316
# !pip install openai==0.28.1
#安装langchain 库和openai库

# #LangChain怎么优化Openai开发的
# # 聊天模型
# from langchain.chat_models import ChatOpenAI
# # 分为三种角色 system 、 assistant、user（human）
# # HumanMessage？问题传给ai
# from langchain.schema import HumanMessage
# import os
# # 设置环境变量LangChain 自动来拿
# os.environ['OPENAI_API_KEY']=''

# chat = ChatOpenAI(temperature=0,model_name="gpt-3.5-turbo")
# #openai接受的是一个数组
# response= chat([HumanMessage(content="hello LangChain!")])#使用数组让openai记住你们聊了什么
# print(response)

# response=chat([HumanMessage(content="我怎么给开源项目贡献代码")])
# print(response)