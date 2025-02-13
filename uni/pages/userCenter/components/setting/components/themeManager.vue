<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.themeManager" backState="1000"></nav-bar>
		<view class="themeManager">
			<!-- 顶部空白区20rpx -->
			<view style="height: 20rpx;"></view>
			<view class="content-wrap">
				<radio-group>
					<view class="content blueColor">
						<radio :checked="blueStyle" @click="handleChangeTheme('blue-theme')">
							<view>{{lang.bydefault}}</view>
						</radio>
					</view>
					<view class="content orangeColor">
						<radio :checked="orangeStyle" @click="handleChangeTheme('orange-theme')">
							<view>{{lang.contractedOrange}}</view>
						</radio>
					</view>
					<view class="content blackColor">
						<radio :checked="blackStyle" @click="handleChangeTheme('black-theme')">
							<view>{{lang.coolBlack}}</view>
						</radio>
					</view>
					<view class="content blackColor">
						<radio :checked="blackStyle" @click="handleChangeTheme('WITHEtheme')">
							<view>{{lang.coolBlack}}</view>
						</radio>
					</view>
				</radio-group>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';

	function getWindow() {
		return this;
	}
	export default {
		data() {
			return {
				blueStyle: true,
				orangeStyle: false,
				blackStyle: false,
				themeStyle: ''
			}
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		onLoad() {
			//读取缓存内信息，判断主题的选择
			this.themeStyle = uni.getStorageSync('userTheme');
			if (this.themeStyle == 'blue-theme') {
				this.blueStyle = true
				this.orangeStyle = false
				this.blackStyle = false
			} else if (this.themeStyle == 'orange-theme') {
				this.blueStyle = false
				this.orangeStyle = true
				this.blackStyle = false
			} else if (this.themeStyle == 'black-theme') {
				this.blueStyle = false
				this.orangeStyle = false
				this.blackStyle = true
			}
		},
		methods: {
			...mapMutations(['setCurThemeType']),
			handleChangeTheme(val) {
				this.setCurThemeType(val);
			}
		},
		mounted() {

		}
	}
</script>

<style lang="less">
	.themeManager {
		.content-wrap {
			.content {
				height: 180rpx;
				margin: 0rpx 20rpx;
				margin-bottom: 20rpx;
				border-radius: 20px 4px;
				font-size: 30rpx;
				radio {
					margin-left: 20rpx;
				}
				view {
					margin-top: 100rpx;
					margin-left: 350rpx;
				}
			}
		}
	}
</style>
