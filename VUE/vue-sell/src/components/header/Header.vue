<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avater">
                <img src="https://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
            </div>
            <div class="content">
                <div class="tittle">
                    <span class="brand"></span>
                    <span class="name">店铺名称</span>
                </div>
                <div class="description">蜂鸟专送/38分钟送达</div>
                <div class="support">
                    <!-- 需要添加一个单独的小组件确定它的优惠政策 -->
                    <span class="text">在线支付满28-5</span>
                </div>
            </div>
            <div class="support-count">
                <span class="count">5个</span>
                <i class="iconfont">></i>
            </div>
        </div>
        <div class="bulletin-wrapper">

        </div>
        <div class="bulletin"></div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import '@/common/style/variable.less';
@import '@/common/style/mixin.less';

.header {
    background: @color-background-ss;

    .content-wrapper {
        display: flex;
        padding: 24px 12px 18px 24px;
        position: relative;

        .avater {
            width: 64px;
            height: 64px;

            img {
                width: 100%;
                border-radius: 2px;
            }
        }

        .content {
            flex: 1;
            margin-left: 16px;
            color: @color-white;

            .tittle {
                display: flex; //弹性布局
                align-items: center;
                margin-bottom: 8px;

                .brand {
                    //行内无法设置宽高，除非出现在弹性容器里面
                    width: 30px;
                    height: 18px;
                    // background-image: url('./header/brand@2x.png');
                    .bg-image('brand'); //自动找到
                    background-size: cover;
                }

                .name {
                    margin-left: 6px;
                    font-size: @fontsize-large;
                    font-weight: bold;
                }
            }

            .description {
                font-size: @fontsize-small;
                margin-bottom: 8px;
            }

            .support {
                display: flex;
                align-items: center;

                .text {
                    font-size: @fontsize-small-s ;
                }
            }
        }

        .support-count {
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 24px;
            //line-height: 24px;
            text-align: center;
            background: @color-background-sss;
            border-radius: 14px;
            display: flex;
            align-items: center;
            color: @color-white;

            .count {
                font-size: @color-background-s;
            }

            .iconfont {
                font-size: @color-background-s;
                margin-left: 2px;
            }
        }
    }



}
</style>
