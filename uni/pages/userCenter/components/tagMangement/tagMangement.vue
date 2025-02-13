<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.tabUtilities" backState="1000"></nav-bar>
		<view v-if="show === 'Tag'">
			<view class="addNewTag" @click="handleChange">
				<text class="cuIcon-roundaddfill iconColor" ></text>
				<view>{{lang.addNewTag}}</view>
			</view>
			<view class="TagContent" v-for="(TagItem,TagImage) in TagName" :key='TagImage'>
				<view class="TagItem">{{TagItem}}</view>
				<button class="TagDelete" @click="handleDelete">{{lang.Delete}}</button>
				<button class="TagSubmit" @click="handleSubmit">{{lang.compile}}</button>
			</view>
		</view>
		<view v-if="show === 'addTag'" class="addTag">
			<view class="TagName">{{lang.tagName}}：</view>
			<input v-model="value"></input>
			<button class="confirm" @click="handleConfirm">{{lang.confirm}}</button>
			<button class="cancel" @click="handleCancle">{{lang.cancle}}</button>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {
				value:'',
				show:'Tag',
				TagName:[
					'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa','bbb','ccc'
				]
			};
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		methods:{
			handleChange(){
				this.show ="addTag";
			},
			handleConfirm(){
				//获取输入框内容添加至 内容数组内
				this.TagName.push(this.value);
				this.show = 'Tag';
			},
			handleCancle(){
				this.show = 'Tag';
			},
			handleDelete(){
				
			},
			handleSubmit(){
				
			}
		}
	}
</script>

<style scoped lang="less">
	.addNewTag{
		height: 80rpx;
		line-height: 80rpx;
		margin: 20rpx 10rpx;
		margin-bottom: 20rpx;
		border-radius: 8px;
		.iconColor{
			margin: 0 20rpx; 
			font-size: 40rpx;
			float: left;
		}
	}
	.TagContent{
		height: 80rpx;
		line-height: 70rpx;
		margin: 0 10rpx;
		border-radius: 8px;
		.TagItem{
			float: left;
			margin-left: 10rpx;
			width: 50%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space:nowrap;
		}
		button{
			height: 60rpx;
			width: 150rpx;
			line-height: 60rpx;
			float: right;
			font-size: 26rpx;
			margin-right: 20rpx;
			margin-top: 10rpx;
			
		}
	}
	.addTag{
		margin-top: 80rpx;
		margin-left: 20rpx;
		.TagName{
			float: left;
			margin-right: 40rpx;
			line-height: 60rpx;
			font-size: 26rpx;
		}
		input{
			border-radius: 8rpx;
			width: 70%;
			height: 60rpx;
		}
		button{
			height: 70rpx;
			width: 140rpx;
			float: right;
			font-size: 26rpx;
			margin: 40rpx;
		}
	}
</style>
