<template>
  <!-- 路由路口写在哪，代码就会拿到哪个路由路口展示 -->
  <v-header></v-header>
  <router-view></router-view>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  export default{
    components:{
      'v-header':Header
    }
  }
</script>
<style lang="less">

</style>