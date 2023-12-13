# !pip install openai==0.10.2
#基于openai的大模型强化客服能力
import openai 
openai.api_key="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"
#常量  文本生成的模型
COMPLETION_MODEL="text-davinci-003"
# 系统后台生成一条记录，再调用这个aigc生成客服
prompt="请你使用朋友的语气回复到客户，并称他为亲，他的订单已经发货在路上了，预计三天内送达，订单号2021AEDG，我们很抱歉，因为天气原因，物流时间比原来长，感谢他选购我们的商品。"
#封装了openai 回复的功能
def get_response(prompt,temperature=1.0):
  #Completion 模块
  #生成内容 同步的
  # 调用openai库的completion模块，创建一个新的
  # 字典
  completions = openai.Completion.create(
      engine=COMPLETION_MODEL,
      prompt=prompt,
      max_tokens=1024,
      n=1,
      #只要一条结果
      stop=None,
      temperature=temperature
  )
  #JSON choices txt
  print(completions)
  message=completions.choices[0].text
  return message
print(get_response(prompt))