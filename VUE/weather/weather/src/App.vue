<template>

  <div>
    <!-- 所有配了路由的.vue文件都展示这里 -->
    <router-view></router-view>

  </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    return {}
  }
}
</script>

scoped样式私有化  如果存在的话只会影响所在vue文件
<style lang="css">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>