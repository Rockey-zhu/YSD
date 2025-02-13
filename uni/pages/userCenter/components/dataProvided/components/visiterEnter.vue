<template>
		<view :class="curThemeType">
			<nav-bar :title="lang.dataProvided" backState="1000"></nav-bar>
			<view class="visiterEnter">
				<view class="top">
					<text>{{lang.customerVisitInformationInput}}</text>
					<text @click="handleToHistory">{{lang.viewChangeHistory}}</text>
				</view>
				<view class="content">
					<view class="visiterEnterText">{{lang.customerNmae}}</view>
					<input class="visiterEnterInput"/>
				</view>
				<view class="content">
					<view class="visiterEnterText">{{lang.customerAddress}}</view>
					<input class="visiterEnterInput"/>
				</view>
				<view class="content">
					<view class="visiterEnterText">{{lang.visitNumber}}</view>
					<input class="visiterEnterInput"/>
				</view>
				<view class="content">
					<view class="visiterEnterText">{{lang.visitTime}}</view>
					<input class="visiterEnterInput"/>
				</view>
				<view class="visiterEnterOther">
					<view class="visiterEnterText">{{lang.contentNegotiation}}</view>
					<textarea class="visiterEnterInput"/>
				</view>
				<view class="visiterEnterOther">
					<view class="visiterEnterText">{{lang.negotiationResult}}</view>
					<textarea class="visiterEnterInput"/>
				</view>
				<view class="content">
					<view class="visiterEnterText">{{lang.phoneNumber}}</view>
					<input class="visiterEnterInput"/>
				</view>
				<view class="content">
					<view class="visiterEnterText">{{lang.eMail}}</view>
					<input class="visiterEnterInput"/>
				</view>
				<view class="content">
					<view class="visiterEnterText">{{lang.other}}</view>
					<input class="visiterEnterInput"/>
				</view>
				<view>
					<button class="visiterEnterSave">{{lang.submit}}</button>
				</view>
				<view style="height: 20rpx;"></view>
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
			methods:{
				handleToHistory(){
					uni.navigateTo({
						url:'historyEnter'
					})
				}
			}
		}
	</script>
	
	<style scoped lang="less">
		.visiterEnter{
			margin: 0 10px;
			border-radius: 8px;
			.top{
				margin-top: 10rpx;
				margin-left: 10rpx;
				padding-top: 10rpx;
				height: 100rpx;
				display: flex;
				justify-content:space-between;
				font-size: 25rpx;
			}
			.content{
				height: 100rpx;
				margin: 0 10rpx;
				display: flex;
				justify-content:space-between;
				.radioStyle{
					radio{
						padding-right: 50rpx;
					}
				}
				.visiterEnterText{
					font-size: 26rpx;
					line-height: 60rpx;
				}
				.visiterEnterInput{
					border-radius: 8rpx;
					width: 450rpx;
					height: 60rpx;
				}
			}
			.visiterEnterOther{
				height: 200rpx;
				margin: 0 10rpx;
				.visiterEnterText{
					font-size: 28rpx;
				}
				.visiterEnterInput{
					border-radius: 8rpx;
					width: 100%;
					height: 120rpx;
					margin-top: 10rpx;
				}
			}
			.visiterEnterSave{
				width: 50%;
				height: 80rpx;
				font-size: 28rpx;
				line-height: 80rpx;
				border-radius: 40rpx 8rpx;
				margin-top: 30rpx;
			}
		}
	</style>