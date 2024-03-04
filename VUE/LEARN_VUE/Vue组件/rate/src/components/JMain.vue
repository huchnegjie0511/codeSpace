<template>
    <div>
        jmain
        <div v-for="user in users" >
            <item  :name="user.name" :age="user.age"/>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import item from './item.vue'
//提供数据 模型
//Model
let users = ref([{
    name: '张三',
    age: 18
}, {
    name: '李四',
    age: 20
}])

setTimeout(() => {
    users.value=[...users.value, {
        name: '王五',
        age: 22
    }]
}, 2000);
</script>

<style  scoped>

</style>