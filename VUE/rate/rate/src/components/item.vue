<template>
    <div>
        用户:{{ name }}
        年龄:{{ age }}
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
    name: String,
    age: Number
})
</script>

<style  scoped>

</style>