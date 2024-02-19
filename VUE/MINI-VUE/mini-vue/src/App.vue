<template>
<div>
  <p>{{ state.count }}</p>
  <button @click="()=>state.count++">add</button>
</div>
</template>


<script setup>
import { reactive } from "vue";
const state=reactive({
  count:1
})

const state2 = reactive(state)
</script>


<style lang="css" scoped>



</style>