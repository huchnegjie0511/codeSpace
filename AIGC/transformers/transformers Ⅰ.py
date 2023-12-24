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

predictions= detector(
    img,
    candidate_labels=["hat","sunglasses","book"]
)
predictions



from PIL import ImageDraw # 画图写模块
draw = ImageDraw.Draw(img)

for prediction in predictions:
  box = prediction["box"]
  label = prediction["label"]
  score = prediction["score"]
  xmin,ymin,xmax,ymax=box.values()  #解构
  draw.rectangle((xmin,ymin,xmax,ymax),outline="red",width=1)
  draw.text((xmin,ymin),"{label}:{round(score, 2)}",fill="red")
img