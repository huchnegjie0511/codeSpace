<template>
	<view class="index">
		
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
				<view class="search">
					<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @change="change" @clear="clear"></uni-search-bar>

				</view>
			</template>
		</wyheader>
		
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script setup>
import wyheader  from '../../components/wyheader/wyheader.vue'
const styles = {
	height:'60rpx'
}
</script>

<style lang="scss" scoped>
.index{
	.search {
			width: 500rpx;
			height: 60rpx;
			.uni-searchbar{
				height: 100%;
				padding: 0;
				.uni-searchbar__box{
					padding: 0;
				}
			}
		}
}
</style>
