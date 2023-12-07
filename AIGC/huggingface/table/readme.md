- 顶级大厂需要看到实习生的github界面
- fork
    开源的力量
- 给一个开源repo贡献代码

- 思想切换
    前端 切到 后端
    DOM BOM 
    I/O 数据库  network  服务器  api 文件系统  操作系统
- 管家
    指令交给它
    向 厨师，花匠。。。发号，命令
    自动将任务完成  AutoGen
    UserProxyAgent  
    initateChat(
        assistant,
        message=""
    )
    执行代码
- AssistantAgent
    llm_config user_proxy message->openai 分析命令的意思
    自己编写代码的能力


import pandas as pd;
from transformers import pipeline #数据分析
question = "How many repository are there?";
#github
context = pd.DataFrame.from_dict({
    "Repository":["Transforms","Datasets","Tokenizers"],
    "Stars":["23258","4512","3934"],
    "Contributors":["2205","77","34"],
    "Programming Language":["Python,JS","Python","Python,Rust,NodeJS"]
});
res = pipeline("table-question-answering", model= "google/tapas-large-finetuned-wtq")#专门处理table数据
print(res(query=question, table=context))

import os

def list_files(directory):
  return os.listdir(directory);
print(list_files('sample_data'));




# 使用大模型进行数据处理
!pip install pyautogen~=0.1.0  -q -U

# 配置多个大模型
config_list=[{
    'model':'gpt-3.5-turbo',
    'api_key':'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'
}]
llm_config = {
    "timeout": 600,
    "config_list": config_list,
    "temperature": 0
}


import autogen;
# 用户代理agent 管家
# 授权
user_proxy = autogen.UserProxyAgent(#提供管家对象
    name="user_proxy",
    human_input_mode="TERMINATE",
    max_consecutive_auto_reply=10, #授权十次自我尝试的机会
    #代码的执行目录是当前目录
    code_execution_config={"work_dir":"."}, 
    system_message="Reply TERMINATE if the task has been solved at full satisfaction.Otherwise, reply CONTINUE, or the reason why the task is not solved yet."
)
# 助理Agent 干活的
assistant = autogen.AssistantAgent(
    name="assistant",
    #由大模型给予
    llm_config=llm_config
)


user_proxy.initiate_chat(
    assistant,
    message="""
    List all the files in the sample_data folder
    """   
)