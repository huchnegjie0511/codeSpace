<template>
    <div>
        <ul>
          <li v-for="(index,item) in foods" :key="index">
            <div>{{ item.image }}</div>
            <div>{{item.name}}</div>
            
            <div></div>
          </li>
        </ul>
    </div>
</template>

<script >

</script>

<style lang="less" scoped>

</style>