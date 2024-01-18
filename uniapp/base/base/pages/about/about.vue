<template>
	<view>about page</view>
	<view class="btn">
		<button type="default">按钮</button>
	</view>
</template>

<script setup>
	import {
		onMounted
	} from 'vue';
	onMounted(() => {
		const reqTask=uni.request({
			url: 'https://mock.mengxuegu.com/mock/65a9154bc4cd67421b34c8ad/movie/movieList',
			method: 'GET',
			success: (res) => {
				console.log(res);
				uni.setStorage({
					key:'movieName',
					data:res.data.movieList[0].nm,
					success(){
						uni.showToast({
							title:'保存成功',
							duration:2000,
							icon:'success'
													
							})
					}
				})
			},
			
		})
		
	});
</script>

<style lang="scss">
	.btn{
		button{
			width: 100rpx;//rpx是根据屏幕宽度指定的响应式单位
			
		}
	}
</style>