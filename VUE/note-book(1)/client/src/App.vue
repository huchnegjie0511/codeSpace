<template>
    <Transition name="move">
      <router-view></router-view>
    </Transition>
    <!-- 直接给路由包裹动画效果 -->
</template>

<script setup>

</script>

<style lang="less" scoped>
.move-enter-active, .move-leave-active{
  transition: all 5 ease-out;//全部在0.5s内淡出
}
.move-enter-from, .move-leave-to{
  transform: translateX(110vw);
  opacity: 0;
}

</style>