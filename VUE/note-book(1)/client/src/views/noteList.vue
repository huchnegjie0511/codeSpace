<template>

<div class="note-list">
   <ul>
    <li>
        <div class="img">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9e18d14b-8a44-41b0-97d9-6aed05b70e7f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307524&t=2fad188fffc2051b59beea724bcd5a32" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天吃了猪脚饭</p>
    </li>
    <li>
        <div class="img">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9e18d14b-8a44-41b0-97d9-6aed05b70e7f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307524&t=2fad188fffc2051b59beea724bcd5a32" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天吃了猪脚饭</p>
    </li>
    <li>
        <div class="img">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9e18d14b-8a44-41b0-97d9-6aed05b70e7f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707307524&t=2fad188fffc2051b59beea724bcd5a32" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天吃了猪脚饭123123123123123123123123123123123123123123123</p>
    </li>
   </ul>
</div>
</template>

<script setup>
//页面加载中发请求，拿到当前分类的数据
import { onBeforeMount,onMounted,onUnmonted } from 'vue'
// onBeforeMount(()=>{
//     console.log();
// }) //挂载前
// onMounted(()=>{
//     console.log();
// })//挂载后 接口请求常放在这里，因为有些地方可能存在需要dom结构操作
// onUnmonted(()=>{
//     //去到别的界面才会返回
// })
onMounted(()=>{
    //页面加载中发起请求，拿到当前的分类数据
})
</script>

<style lang="less" scoped>
.note-list{
    width: 100%;
    padding:1rem 0.667rem 0;
    box-sizing:border-box;
    // 第一种办法使用弹性布局
    ul{
        display: flex;
        // 弹性容器默认不换行
        flex-wrap: wrap;//让弹性容器自动换行
        justify-content: space-between;
        li{
            // width: 4rem;
            width: 50%;
            padding: 0 10px;
            box-sizing: border-box;//将内边距算到自己的宽度里面去
            img{
                width: 100%;
                border-radius: 0.27rem;//圆角
            }
            .time{
                font-size: 0.375rem;
                color: rgba(16, 16, 16, 1);
                text-align: center;
                margin: 10px 0 5px 0;
            }
            .title{
                width: 4rem;
                font-size: 0.375rem;
                color: rgba(16, 16, 16, 1);
                white-space: nowrap;//文字不换行
                overflow: hidden;//超出隐藏
                text-overflow: ellipsis;//隐藏内容为省略号
            }
        }
    }
    // 第二种办法使用浮动
    // ul{
    //    overflow: auto;
    //     // 弹性容器默认不换行
    //     li{
    //         // width: 4rem;
    //         width: 50%;
    //         padding: 0 10px;
    //         box-sizing: border-box;//将内边距算到自己的宽度里面去
    //         img{
    //             width: 100%;
    //         }
    //     }
    // }
    // 第三种用法使用网格布局
    // ul{
    //     display: grid; 
    //     grid-column-gap: 50px; //列之间间距50
    //     grid-row-gap: 30px;//行间距30   
    //     grid-template-columns:1fr 1fr;//1fr代表一列
    //     li{
    //         img{
    //             width: 100%;
    //            border-radius: 0.27rem;//圆角
    //         }
    //         .time{
    //             font-size: 0.375rem;
    //             color: rgba(16, 16, 16, 1);
    //             text-align: center;
    //             margin: 10px 0 5px 0;
    //         }
    //         .title{
    //             width: 4rem;
    //             font-size: 0.375rem;
    //             color: rgba(16, 16, 16, 1);
    //             white-space: nowrap;//文字不换行
    //             overflow: hidden;//超出隐藏
    //             text-overflow: ellipsis;//隐藏内容为省略号
    //         }
    //     }
    // }
}
</style>