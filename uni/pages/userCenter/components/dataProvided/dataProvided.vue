<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.dataProvided" backState="1000"></nav-bar>
		<view class="dataProvided">
			<view class="content" @click="handleStaffEnter">{{lang.employeeInformationEntry}}</view>
			<view class="content" @click="handleVisiterEnter">{{lang.customerVisitInformationInput}}</view>
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
			handleStaffEnter(){
				uni.navigateTo({
					url:'components/staffEnter'
				})
			},
			handleVisiterEnter(){
				uni.navigateTo({
					url:'components/visiterEnter'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.dataProvided{
		margin-top: 20rpx;
		.content{
			height: 180rpx;
			margin: 0rpx 20rpx;
			margin-bottom: 20rpx;
			border-radius: 20px 4px;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	}
</style>
