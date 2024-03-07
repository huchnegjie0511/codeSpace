<template>
      <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确定</button>
      </div>

</template>
<script>
export default{
    data(){
      return{
        message:''
      }
    },
    methods:{
      submit(){
        if(!this.message) return 
        this.$emit('submit',this.message)
      }
    }
}
</script>
<style lang="css"scoped>
</style>