<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9e8bd863-bf16-4647-abf0-88490ce78ced%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1706790479&t=770078ea1dc465ed1b244e491ea8a4ea" alt="">
            </div>
            <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                v-model="state.username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                v-model="state.password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                登录
                </van-button>
            </div>
            </van-form>
            <p class="register" @click="register">新用户？点击这里注册</p>
        </div>
    </div>
</template>
<script setup>
    import { reactive } from 'vue'
    import { useRouter }from 'vue-router'
    const router=useRouter();//this.${router}
    const state=reactive({//将对象变成响应式
        username:'',
        password:'',
    })//需要手动引入
    const onSubmit=()=>{//发送请求，将state.username  state.password传给后端    
        console.log(state.username,state.password);
    }
    const register=()=>{
        router.push('/register')
    }
</script>


<style lang="less"scoped>

.login{
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  h1{
    height: 0.6933rem;
    text-align: center;
    margin-top: 1.12rem;
    font-size: 0.48rem;
  }
  .login-wrapper{
    width: 7.44rem;
    height: 10.77rem;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 1.7rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);
    .avatar{
      width: 2.4rem;
      height: 2.4rem;
      overflow: hidden;
      border-radius: 50%;
      margin: 1rem auto 0.77rem;
      img{
        width: 100%;
      }
    }
  }
  .register{
    position: absolute;
    bottom: 30px;
    width: 80%;
    left: 50%;
    text-align: center;
    font-size: 0.374rem;
    transform: translateX(-50%);
    height: 0.6rem;
    line-height: 0.6rem;
    color: rgba(16, 16, 16, 1);
  }
}
</style>

<style>
.van-cell__title.van-field__label{
    width: 45px;
}
</style>
<!-- 页面需要配置路由 vue-router 
    yarn add vue-router@4
-->

