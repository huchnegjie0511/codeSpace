<script>
	export default {
		globalData: {
			name: '全局的名称'
		},
		onLaunch: function(e) {
			console.log('App Launch', e)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* @import 'common/font/iconfont.css'; */
	/* @import url(https://at.alicdn.com/t/c/font_4416312_4qzw5cy6h0q.css); */
</style>
