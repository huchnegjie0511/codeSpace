<template>
  <div>
    <div class="head">
      <input type="text" v-model="message">
      <button @click="submit">确定</button>
    </div>
    <div class="body">
      <ul>
        <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:['html','css'],
      message:''
    }
  },
  methods:{
    submit(){
      if(!this.message) return
      this.lists.push(this.message)
      this.message = ''
    }
  }
}
</script>

<style lang="css" scoped>

</style>