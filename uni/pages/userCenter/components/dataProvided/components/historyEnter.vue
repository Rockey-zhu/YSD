<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.historyEnter" backState="1000"></nav-bar>
		<view class="historyEnter">
			<view class="historyEnterTop">{{lang.viewChangeHistory}}</view>
			<view class="historyEnterContentTop">
				<view class="username">{{lang.userName}}</view>
				<view class="time">{{lang.inputTime}}</view>
				<view class="operation">{{lang.operation}}</view>
			</view>
			<view class="historyEnterContent" v-for="(historyListItem,historyListIndex) in historyList" :key="historyListIndex">
				<view class="username">{{historyListItem.name}}</view>
				<view class="time">{{historyListItem.time}}</view>
				<view class="operation">{{historyListItem.operation}}</view>
			</view>
			<view style="height: 10rpx;"></view>
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
				historyList:[
					{
						name:'张三111111111111111111111',
						time:'2020-09-01',
						operation:"无111111111111111"
					},
					{
						name:'张三',
						time:'2020-09-01',
						operation:"无"
					}
				]
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
	.historyEnter{
		margin: 0 10px;
		border-radius: 8px;
		.historyEnterTop{
			margin-top: 10rpx;
			margin-left: 10rpx;
			padding-top: 10rpx;
			height: 100rpx;
			font-size: 28rpx;
		}
		.historyEnterContentTop{
			display: flex;
			justify-content:flex-start;
			padding-bottom: 20rpx;
			.username{
				width: 40%;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
			}
			.time{
				width: 35%;
			}
			.operation{
				overflow:hidden; 
				text-overflow:ellipsis;
				white-space:nowrap;
			}
		}
		.historyEnterContent{
			display: flex;
			justify-content:flex-start;
			margin-top: 10rpx;
			.username{
				width: 40%;
				overflow:hidden; //超出的文本隐藏
				text-overflow:ellipsis; //用省略号显示
				white-space:nowrap; //不换行
			}
			.time{
				width: 35%;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap; 
			}
			.operation{
				width: 25%;
				overflow:hidden; 
				text-overflow:ellipsis; 
				white-space:nowrap; 
			}
		}
	}
</style>
