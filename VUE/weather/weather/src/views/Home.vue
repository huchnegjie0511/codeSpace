<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ localtime }}</div>
            <div class="city">切换城市</div>
        </div>
        <div class="city-info">
            <div class="city-name">南昌</div>
            <div class="wether">大雪</div>
            <h2 class="temp">
                <em>-10</em>℃
            </h2>
            <div class="detail">
                <span>风力：6级</span> |
                <span>风向：北风</span> |
                <span>空气湿度：10%</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                localtime: '00:00',
            }
        },
        methods:{
            
        }
    }
</script>

<style lang="css" scoped>
.container{
    min-height: 100vh;
    background-color: #000;
    opacity: 0.6;
    color: #fff;

}
.nav{
overflow: auto;
padding: 10px;
}
.time{
    float: left;
}
.city{
    float: right;
}
.city-info{
    text-align: center;
    padding: 20px;
}
.temp{
    font-size: 26px;

    /* margin: 20px 0; */
}
.temp em{
    font-style: normal;
    font-size: 34px;
}
</style>