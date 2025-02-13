<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.reposotpry" backState="1000"></nav-bar>
		<view>
			暂无内容
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {

			};
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
	}
</script>

<style scoped lang="less">
</style>
