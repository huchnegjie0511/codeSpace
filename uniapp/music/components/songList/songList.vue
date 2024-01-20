<template>
	<view class="recommend">
		<view class="recommend-hd">
			<view class="title">推荐歌单</view>
			<view class="more">
				<uni-icons type="right" size="16"></uni-icons>
			</view>
		</view>
		<view class="recommend-bd">
			<view class="recommend-bd__item">
				<view class="item-pic">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<text class="title">大大大所大多请问阿迪</text>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.recommend {
	.recommend-hd {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
	}
	.recommend-bd {
	}
}
</style>