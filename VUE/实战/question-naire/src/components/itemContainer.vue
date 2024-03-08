<template>
    <section>
        <header class="top_tips">
            <span class="num_tip">
                第一周
            </span>
        </header>
        <div>
            <div class="home_logo item_container_style">
                
            </div>
            <router-link to="/home" class="start button_style"></router-link>
        </div>
    </section>
</template>
<script>
export default{

}
</script>
<style lang="less"scoped>

.top_tips{
    position: absolute;
    width: 3.25rem;
    height: 7.35rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url('../assets/images/WechatIMG2.png') no-repeat;
    background-size: 100% 100%;
    .num_tip{
        position: absolute;
        left: 0.48rem;
        bottom: 1.1rem;
        height: 0.7rem;
        width: 2.5rem;
        font-size: 0.6rem;
        font-family: '黑体';
        color:#a57c50;
        text-align: center;
    }
    .item_container_style{
        position: absolute;
        width: 3.25rem;
        height: 11.625rem;
        top: 0.5rem;
        left: 0.5rem;
        background: url('../assets/images/WechatIMG1.png') no-repeat;
        background-size: 100% 100%;
    }
}
</style>