<script>
	export default {
		//切换主题代码
		onLaunch: () => {
			
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	@import "style/colorUi/icon.css";
	/* 蓝色全局背景色 */
	page{
		height: 100%;
		
		}
</style>
<!-- 每个页面公共css  -->
<style lang="less" src='style/blue/index.less'></style>
<style lang="less" src='style/black/index.less'></style>
<style lang="less" src='style/orange/index.less'></style>
<style scoped lang="scss">
</style>
