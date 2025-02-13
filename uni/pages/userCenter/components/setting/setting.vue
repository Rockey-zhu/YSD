<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.setting" backState="1000"></nav-bar>
		<view class="setting">
			<!-- <view class="settingTop">设置</view>
		<view class="settingPersonCenter">
			<view>个人中心</view>
			<view @click="startLogin">主题管理</view>
		</view>
		<button @click="handleExit">退出登录</button> -->
			<!-- <view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 菜单列表
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button>
			</view>
		</view> -->
			<!-- <view class="cu-modal" :class="modalName=='menuModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop>
					<view class="cu-list menu text-left solid-top">
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">箭头</text>
							</view>
							<view class="action">
								<switch @change="MenuArrow" :class="menuArrow?'checked':''" :checked="menuArrow?true:false"></switch>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">卡片</text>
							</view>
							<view class="action">
								<switch @change="MenuCard" :class="menuCard?'checked':''" :checked="menuCard?true:false"></switch>
							</view>
						</view>
					</view>
				</view>
			</view> -->
			<!-- 顶部空白区20rpx -->
			<view style="height: 20rpx;"></view>
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu':'']">
				<view class="cu-item" :class="menuArrow?'arrow':''" @click="handleToPersonCenter">
					<button class="cu-btn content">
						<text class="cuIcon-peoplefill text-olive"></text>
						<text class="settingText">{{lang.userCenter}}</text>
					</button>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''" @click="handleToSwithLanguage">
					<button class="cu-btn content">
						<text class="cuIcon-markfill text-yellow"></text>
						<text class="settingText">{{lang.changeLanguage}}</text>
					</button>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''" @click="handleToThem">
					<button class="cu-btn content">
						<text class="cuIcon-colorlens text-brown"></text>
						<text class="settingText">{{lang.themeManager}}</text>
					</button>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<button class="cu-btn content" open-type="contact">
						<text class="cuIcon-btn text-olive"></text>
						<text class="settingText">{{lang.coupleBack}}</text>
					</button>
				</view>
			</view>
			<button @click="handleExit" class="btnquit">{{lang.logOut}}</button>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {
				menuBorder:'',
				modalName: null,
				menuArrow: true,
				menuCard: true,
			}
		},
		onLoad() {
			//console.log(this.lang)
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		methods: {
			handleToPersonCenter() {
				uni.navigateTo({
					url: 'components/personCenter'
				})
			},
			handleToThem() {
				uni.navigateTo({
					url: 'components/themeManager'
				})
			},
			handleToSwithLanguage() {
				uni.navigateTo({
					url: 'components/switchLanguage'
				})
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value
			},
			MenuCard(e) {
				this.menuCard = e.detail.value
			},
			//退出登录
			handleExit() {
				uni.clearStorage();
				uni.reLaunch({
					url: '../../../login/login'
				})
			}
		}
	}
</script>
<style>
	@import "../../../../style/colorUi/main.css";
</style>
<style lang="less" scoped>
	.setting {
		.cu-list.menu>.cu-item {
			position: relative;
			display: flex;
			padding: 0 30upx;
			min-height: 100upx;
			justify-content: space-between;
			align-items: center
		}
		.cu-list.menu-avatar>.cu-item:after,
		.cu-list.menu>.cu-item:after {
			position: absolute;
			top: 0;
			left: 0;
			box-sizing: border-box;
			width: 200%;
			height: 200%;
			border-radius: inherit;
			transform: scale(.5);
			transform-origin: 0 0;
			pointer-events: none
		}
		.settingText{
			font-size: 28rpx;
		}
		.btnquit {
			margin: 0 80rpx;
			margin-top: 30rpx;
			border-radius: 40rpx 8rpx;
		}
	}
</style>
