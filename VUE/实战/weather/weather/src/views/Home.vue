<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ localtime }}</div>
            <div class="city">切换城市</div>
        </div>
        <div class="city-info">
            <div class="city-name">{{ weatherData.city }}</div>
            <div class="wether">{{weatherData.weather}}</div>
            <h2 class="temp">
                <em>{{ weatherData.temperature }}</em>℃
            </h2>
            <div class="detail">
                <span>风力：{{weatherData.windPower}}级</span> |
                <span>风向：{{ weatherData.windDirection }}风</span> |
                <span>空气湿度：{{weatherData.humidity}}%</span>
            </div>
        </div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
    data() {
        return {
            localtime: '00:00',
            weatherData:{}
        }
    },
    created() {//钩子函数 生命周期
        setInterval(() => {
            this.localtime = new Date().toLocaleTimeString();
        }, 1000);
        this.initAMap();
    },
    methods: {
        initAMap() {
            let that = this;
            AMapLoader.load({
                key: "d3ef6744c7ff5a0b1dc167841987a7ab", // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins: ['AMap.CitySearch'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            })
                .then((AMap) => {
                    //加载天气查询插件
                    AMap.plugin('AMap.CitySearch', function () {
                        var citySearch = new AMap.CitySearch()
                        citySearch.getLocalCity(function (status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                // 查询成功，result即为当前所在城市信息
                                console.log(result);
                                //加载天气查询插件
                                AMap.plugin("AMap.Weather", function () {
                                    //创建天气查询实例
                                    var weather = new AMap.Weather();
                                    //执行实时天气信息查询
                                    weather.getLive(result.city, function (err, data) {
                                        console.log(err, data);
                                        that.weatherData = data;//this指向丢失的时候通过指定其他变量改变回来
                                        //err 正确时返回 null
                                        //data 返回实时天气数据，返回数据见下表
                                    });
                                });
                            }
                        });
                    });


                })
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.6;
    color: #fff;

}

.nav {
    overflow: auto;
    padding: 10px;
}

.time {
    float: left;
}

.city {
    float: right;
}

.city-info {
    text-align: center;
    padding: 20px;
}

.temp {
    font-size: 26px;

    /* margin: 20px 0; */
}

.temp em {
    font-style: normal;
    font-size: 34px;
}
</style>