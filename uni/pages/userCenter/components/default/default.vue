<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.homePage" backState="1000"></nav-bar>
		<view>
			default
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

