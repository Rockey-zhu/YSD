<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.changeLanguage"  backState="1000"></nav-bar>
		<!-- 顶部空白区20rpx -->
		<view style="height: 20rpx;"></view>
		<view class="switchLanguage">
			<radio-group>
				<view class="content">
					<radio :checked="Chinese" @click="handleChangeChinese">
						<view>{{lang.chinese}}</view>
					</radio>
				</view>
				<view class="content">
					<radio :checked="English" @click="handleChangeEnglish">
						<view>{{lang.english}}</view>
					</radio>
				</view>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {
				Chinese: true,
				English: false,
				userLang: ''
			}
		},
		onLoad() {
			//根据缓存内的userLang判断checked
			this.userLang = uni.getStorageSync('userLang')
			if (this.userLang == 'zh-CN') {
				this.Chinese = true,
					this.English = false;
			} else if (this.userLang == 'en') {
				this.Chinese = false;
				this.English = true;
			}
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		methods: {
			...mapMutations(['handleChangeChinese', 'handleChangeEnglish']),

		}
	}
</script>

<style lang="less">
	.switchLanguage {
		.content {
			height: 100rpx;
			margin: 0rpx 20rpx;
			margin-bottom: 20rpx;
			border-radius: 20px 4px;
			radio {
				margin-left: 20rpx;
				margin-top: 30rpx;
				width: 80%;
			}
			view {
				margin-left: 40rpx;
				
			}
		}
	}
</style>
