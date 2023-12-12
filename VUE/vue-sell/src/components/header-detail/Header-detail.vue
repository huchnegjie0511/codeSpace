<template>
    <Transition name="fade">
        <div class="header-detail">
            <div class="detail-wrapper">
                <div class="detail-main">
                   
                </div>
            </div>
            <div class="detail-close" @click.stop="hideDetail">
            X
            </div>
        </div>
        <!-- Transition里面只能包含一个子节点 -->
    </Transition>
    <!-- //官方用于做过渡界面的标签 -->
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        hideDetail(){//子父组件通讯
            this.$emit('hide',false)//emit在vue的作用是负责创建一个hide事件向外发送内容

        }
    }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
.header-detail{
    position: fixed;//相对手机屏幕定位，自动变为一样大
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: @color-background-s;
    color: @color-white;
    backdrop-filter: blur(10px);//底层虚化
    &.fade-enter-from,&.fade-leave-to{//当两者都有时，设置为全透明状态
        opacity: 0;
        background-color: @color-background;
    }
    &.fade-enter-active,&.fade-leave-active{//出现和消失的过程中出现的类名
        transform: all 0.5s ease;
    }
    .detail-wrapper{

    }
    .detail-close{
        position: fixed;
        height: 30px;
        width: 30px;
        bottom: 30px;
        left: 50%;
        margin-left: -15px;
        text-align: center;
        line-height: 30px;
    }
}
</style>