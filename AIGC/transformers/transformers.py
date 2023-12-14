#!pip install transformers #来自抱抱脸
from transformers import pipeline #pipeline 派发模块
classifer = pipeline('sentiment-analysis')#情感分析
result = classifer('I Love You')
result

result = classifer('thank you')
result

result = classifer('shut up')
result

result = classifer('遥遥领先')
result

#classifer = pipeline()派发任务
#中文模型 基于大众点评的亿万条数据训练的
classifer = pipeline('sentiment-analysis',model="uer/roberta-base-finetuned-dianping-chinese")

result = classifer("遥遥领先")
result