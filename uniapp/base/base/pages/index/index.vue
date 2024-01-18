<template>
	<view class="content">
		<navigator url="/pages/about/about">去关于页面</navigator>
		<image class="logo" src="/static/logo.png" @click="goAbout"></image>
		<view class="text-area" @click='changeTitle'>
			<text class="title">{{title}}</text>
			<text>{{reverseTitle}}</text>
		</view>
		<view class="name">
			<text>{{name}}</text>
		</view>
		
		<song :data='list.song'/>
	</view>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import song from '../../components/song/song.vue'

const title = ref('你好')
console.log(getApp().globalData.name);
const name = getApp().globalData.name
const changeTitle = () => {
	title.value = title.value === '你好' ? 'Hello' : '你好'
}
const reverseTitle = computed(() => {
	return title.value.split('').reverse().join('')
})


const list = reactive({
	song: {
		img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5563f052-0f0b-475a-b14f-eea08dc82117%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708169990&t=435007adf70f7240bcb62bfeaf751b93',
		title: '卡通头像',
		price: '10',
		marketPrice: '13',
	}
})

const goAbout = ()=>{//不需引入router
	uni.navigateTo({//官方封装的路由
		url:'../about/about'
	})
}




</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>