<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.collect" backState="1000"></nav-bar>
		<view class="collect">
			<view class="recentsTop">
				<button class="topChange" plain="true">{{remove}}</button>
			</view>
			<view class="recentsCollect">
				<view class="collect" v-for="(item, index) in collectData" :key="index">
					<image class="collectImg" :src="item.src"></image>
					<view class="collectName">{{item.name}}</view>
					<view class="collectTime">{{item.date}} {{item.time}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {
				remove: "移除收藏",
				collectData: [{
						src: "../../../../static/message/img/p10.jpg",
						name: "collect",
						date: "2020-10-18",
						time: "23:39"
					},
					{
						src: "../../../../static/message/img/q.jpg",
						name: "hahhahah",
						date: "2020-10-18",
						time: "23:39"
					},
				]
			}
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
	.collect{
		button::after {
			border: none;
		}
		.recentsTop {
			height: 60rpx;
			button {
				width: 40%;
				font-size: 25rpx;
				float: right;
			}
			.topChange {
				width: 200rpx;
			}
		}
		.recentsCollect {
			.collect {
				height: 190rpx;
				margin: 0px 10px 10px;
				border-radius: 8px;
				font-size: 30rpx;
				.collectImg {
					height: 150rpx;
					width: 150rpx;
					float: left;
					margin: 20rpx;
					border-radius: 8px;
				}
				.collectName {
					padding: 20rpx 0;
				}
				.collectTime {
					padding-top: 20rpx;
				}
			}
		}
	}
</style>
