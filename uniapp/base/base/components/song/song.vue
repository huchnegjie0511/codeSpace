<template>
	<view class="song">
		<img :src="data.img" alt="" />
		<view class="desc">标题</view>
		<view class="flex-box">
			<view class="price">￥{{data.price}}}</view>
			<view class="market-price">￥{{data.marketPrice}}</view>
		</view>
	</view>
</template>

<script setup>
	defineProps({
		data:Object
	})
	
</script>

<style lang="scss">

</style>