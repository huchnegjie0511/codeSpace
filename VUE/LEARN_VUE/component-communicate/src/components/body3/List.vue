<template>
    <div class="body">
      <ul>
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      msg: String,
    },
    computed: {
      list() {
        let list = ['html', 'css'];
        if (this.msg) {
          list.push(this.msg);
        }
      },
    },
    data() {
      return {
        // 定义一个空数组用于存储消息
        // 如果你需要在消息改变时执行其他操作，可以使用这个数组
        // 例如：this.lists.push(this.msg) 
        lists: [],
      };
    },
  };
  </script>
  
  <style lang="css" scoped>
  /* 样式 */
  </style>
  