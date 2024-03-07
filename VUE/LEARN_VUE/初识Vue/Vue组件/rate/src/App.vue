<script setup>
import HelloWorld from './components/HelloWorld.vue'
import rate from './components/rate.vue'
import JHead from './components/JHead.vue'
import JMain from './components/JMain.vue'
import JSide from './components/JSide.vue'
import JAdver from './components/JAdver.vue'

</script>

<template>
<div class="header">
    <JHead/>
</div>
<div class="body">
    <div class="aside">
        <JSide/>
    </div>
    <div class="main">
        <JMain/>
    </div>
    <div class="right">
        <JAdver/>
    </div>
</div>

</template>

<style scoped>

</style>
