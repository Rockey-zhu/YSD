<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.dataProvided" backState="1000"></nav-bar>
		<view class="staffEnter">
			<view class="top">
				<text>{{lang.employeeInformationEntry}}</text>
				<text @click="handleToHistory">{{lang.viewChangeHistory}}</text>
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.userName}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="content">
				<view class="userName" >{{lang.gender}}</view>
				<radio-group class="radioStyle">
					<radio checked="true" :value="1">{{lang.man}}</radio>
					<radio :value="1">{{lang.woman}}</radio>
					<radio :value="1">{{lang.other}}</radio>
				</radio-group>
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.age}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.nation}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.politicsStatus}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.graduateInstitutions}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.education}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.specialty}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.phoneNumber}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="content">
				<view class="staffEnterText">{{lang.email}}</view>
				<input class="staffEnterInput" />
			</view>
			<view class="staffEnterOther">
				<view class="staffEnterText">{{lang.other}}</view>
				<textarea class="staffEnterInput" />
				</view>
				<view>
					<button class="staffEnterSave">{{lang.submit}}</button>
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
		.staffEnter{
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
				.userName{
					font-size: 26rpx;
				}
				.radioStyle{
					radio{
						padding-right: 10rpx;
						font-size: 26rpx;
					}
				}
				.staffEnterText{
					font-size: 26rpx;
					padding-top: 10rpx;
				}
				.staffEnterInput{
					border-radius: 8rpx;
					width: 450rpx;
					height: 60rpx;
				}
			}
			.staffEnterOther{
				height: 200rpx;
				margin: 0 10rpx;
				.staffEnterText{
					font-size: 28rpx;
				}
				.staffEnterInput{
					border-radius: 8rpx;
					width: 100%;
					height: 120rpx;
				}
			}
			.staffEnterSave{
				width: 50%;
				height: 80rpx;
				font-size: 28rpx;
				line-height: 80rpx;
				border-radius: 40rpx 8rpx;
				margin-top: 30rpx;
			}
		}
	</style>
