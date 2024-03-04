<template>
  <div>

  </div>
</template>

<script setup>
import { OpenAI } from "@langchain/openai";
// 创建一个OpenAI实例，传入你的API密钥
const openai = new OpenAI('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');

// 准备一个简单的请求
const prompt = "Once upon a time";

// 调用OpenAI的completions方法来获取AI的响应
openai.complete({
  model: 'text-davinci-002',
  prompt: prompt,
  max_tokens: 50
})
  .then(response => {
    console.log(response.data.choices[0].text.trim());
  })
  .catch(error => {
    console.error('Failed to complete:', error);
  });

</script>

<style lang="css" scoped>

</style>