# !pip install transformers
#transformers pipeline  哪些任务？
from transformers.pipelines import SUPPORTED_TASKS
SUPPORTED_TASKS

print(SUPPORTED_TASKS.items()) # dict 字典 o(1)

#cs6解构
for k, v in SUPPORTED_TASKS.items():#拥有所有点的对象
  print(k)


from transformers import pipeline
checkpoint ="google/owlvit-base-patch32"  #图片识别模型
detector=pipeline('zero-shot-object-detection',model=checkpoint)


import requests #python 的http请求库
from PIL import Image #PIL python 图片的专业库
url="https://unsplash.com/photos/oj0zeY2Ltk4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fHBpY25pY3xlbnwwfHx8fDE2Nzc0OTE1NDk&force=true&w=640"
# python
#request.get python 同步语言
img=Image.open(requests.get(url,stream=True).raw)
img