<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.userCenter" backState="1000"></nav-bar>
		<view class="personCenter">
			<view class="headPortrait">
				<view class="letter">{{lang.avatar}}：</view>
				<image :src="userPicter" class="headPortraitImg"></image>
			</view>
			<view class="content">
				<view class="letter">{{lang.name}}：</view>
				<input class="personCenterInput canNotPitch" :value="nickname" disabled="true" />
			</view>
			<view class="content">
				<view class="letter">{{lang.userChineseName}}：</view>
				<input class="personCenterInput" :value="chineseName" />
			</view>
			<view class="content">
				<view class="letter">{{lang.departement}}：</view>
				<input class="personCenterInput canNotPitch" :value="department" disabled="true" />
			</view>
			<view class="content">
				<view class="letter">{{lang.eMail}}：</view>
				<input class="personCenterInput" :value="eMail" />
			</view>
			<view class="content">
				<view class="letter">{{lang.employBrewery}}：</view>
				<input class="personCenterInput" :value="plant" placeholder="Enter something..." />
			</view>
			<view class="content personalityContent">
				<view class="letter">{{lang.personalInfo}}：</view>
				<textarea class="personCenterInput personality" :value='personality' placeholder="速速填写,快让大家认识你吧!" />
			</view>
			<view class="cu-form-group margin-top content">
				<view class="letter">{{lang.defaultLanguage}}：</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{picker[index]}}
					</view>
				</picker>
			</view>
		</view>
		<view>
			<button class="personCenterSave">保 存</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				index: '0',
				picker: ["中文", "English"],
				userPicter: '../../../../../static/message/img/face.jpg',
				nickname:'昵称',
				chineseName:'中文名',
				department:'部门',
				eMail:'电子邮箱',
				plant:'',//工厂
				personality:'',//个性签名
			};
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		methods: {
			PickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			personCenterSave(){
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.personCenter{
		margin: 0 10px;
		border-radius: 8px;
		.headPortrait{
			display: flex;
			justify-content:space-between;
			height: 200rpx;
			margin: 0 10rpx;
			padding-top: 40rpx;
			font-size: 26rpx;
			line-height: 100rpx;
			.headPortraitImg{
				height: 130rpx;
				width: 130rpx;
				margin-right:290rpx ;
				border-radius: 8rpx;
			}
		}
		.content{
			height: 100rpx;
			margin: 0 10rpx;
			display: flex;
			justify-content:space-between;
			.letter{
				padding-top: 10rpx;
				font-size: 26rpx;
			}
		}
		.personalityContent{
			height: 200rpx;
		}
		.personCenterInput {
			border-radius: 8rpx;
			width: 420rpx;
			height: 60rpx;
			font-size: 26rpx;
		}
		.personality{
			height: 150rpx;
			display: flex;
			flex-wrap: row;

		}
		.picker{
			width: 420rpx;
			height: 60rpx;
			border-radius: 8rpx;
			line-height: 60rpx;
		}
	}
	.personCenterSave{
		width: 50%;
		height: 80rpx;
		font-size: 26rpx;
		line-height: 80rpx;
		border-radius: 40rpx 8rpx;
		margin-top: 30rpx;
	}
</style>
