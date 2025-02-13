<template>
	<view class="index">
		<view class="indexSearch">
			<view class="searchContent">
				<input class="searchInput" placeholder="搜索..."/>
				<icon type="search" size="18px"></icon>
			</view>
		</view>
		<view class="indexVisit"> 
			<view class="visitCut">
				<view class="cutOftenVisit" @click="handleCutOftenVisit()">最近访问</view>
				<view class="cutCollect" @click="handleCutCollect()">收藏</view>
			</view>
			<view class="visitContent" v-if="visitSelect">
				<view class="contentBox">
					<image  src="../../static/logo.png"></image>
					<view>最近访问</view>
				</view>
			</view>
			<view class="visitContent" v-else>
				<view class="contentBox">
					<image  src="../../static/logo.png"></image>
					<view>收藏</view>
				</view>
			</view>
		</view>
		<view class="indexContent">
			<view class="countCut">
				<view class="cutOftenVisit">内容</view>
			</view>
			<view class="contentCount">
				<view class="contentBox">
					<image  src="../../static/logo.png"></image>
					<view @click="setStorage">存储本地数据</view>
				</view>
				<view class="contentBox">
					<image  src="../../static/logo.png"></image>
					<view @click="getStorage">获取本地数据</view>
				</view>
				<view class="contentBox">
					<image  src="../../static/logo.png"></image>
					<view @click="removeStorage">删除本地数据</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				visitSelect:true
			}
		},
		onLoad() {

		},
		//下拉刷新生命周期
		onPullDownRefresh(){
			//console.log("触发下拉刷新");
			//延时触发，2s后暂停下拉刷新
			setTimeout(()=>{
				/*
					此处添加刷新时触发的事件
				*/
			   //刷新成功提示
			   uni.showToast({
			   	icon: 'none',
			   	position: 'bottom',
			   	title: '刷新成功！'
			   });
				uni.stopPullDownRefresh()
			},2000);
			
		},
		//上拉触底事件 
		onReachBottom() {
			console.log("触底拉!")
		},
		methods:{
			handleCutOftenVisit(){
				this.visitSelect = true;
				
			},
			handleCutCollect(){
				this.visitSelect = false;
			},
			//可以使用下拉刷新函数触发下拉刷新
			handlePullDown(){
				//开启下拉刷新
				uni.startPullDownRefresh()
				//关闭下拉刷新
				uni.stopPullDownRefresh()
			},
			//调用数据接口
			get() {
				uni.request({
					
				})
			},
			//本地存储数据
			setStorage() {
				uni.setStorage({
					key:"1",
					data:80,
					success() {
						console.log("存储成功！")
					}
				})
			},
			//获取本地数据,获取的数据保存在res内
			getStorage(){
				uni.getStorage({
					key:"1",
					success(res) {
						console.log("获取成功，data为",res.data)
					}
				})
			},
			//
			removeStorage(){
				uni.removeStorage({
					key:'1',
					success() {
						console.log("移除成功！")
					}
				})
			}
		}
	}
</script>

<style>
	page{background-color: #e8eaec}
</style>
<style lang="less" scoped>
.index{
	.indexSearch{
		background-color: white;
		height: 45px;
		margin: 0 10px;
		margin-bottom: 20px;
		.searchContent{
			margin: 0 10px;
			margin-bottom: 20px;
			padding-bottom: 5px;
			border: 1px solid #e8eaec;
			.searchInput{
				width: 85%;
				float: left;
				margin-right: 10px;
				margin-top: 5px;
			}
		}
	}
	.indexVisit{
		background-color: white;
		height: 130px;
		margin: 0 10px;
		margin-bottom: 20px;
		.visitCut{
			border-bottom:1px solid #e8eaec ;
			height: 30px;
			font-size: 16px;
			padding-top: 5px;
			padding-left: 10px;
			.cutOftenVisit{
				float: left;
				margin-right: 40px;
			}
			.cutOftenVisit:hover{
				border-bottom: 2px solid red;
			}
			.cutCollect{
				float: left;
			}
			.cutCollect:hover{
				border-bottom: 2px solid red;
			}
		}
		.visitContent{
			.contentBox{
				float: left;
				height: 98px;
				width: 32%;
				border-right: 1px solid #e8eaec;
				text-align: center;
				image{
					height: 40%;
					width: 40%;
					margin-top: 10px;
					margin-bottom: 5px;
				}
				view{
					font-size: 16px;
				}
			}
		}
	}
	.indexContent{
		background-color: white;
		height: 130px;
		margin: 0 10px;
		margin-bottom: 20px;
		.countCut{
			border-bottom:1px solid #e8eaec ;
			height: 30px;
			font-size: 16px;
			padding-top: 5px;
			padding-left: 10px;
			.cutOftenVisit{
				float: left;
				margin-right: 40px;
			}
		}
		.contentCount{
			.contentBox{
				float: left;
				height: 98px;
				width: 32%;
				border-right: 1px solid #e8eaec;
				text-align: center;
				image{
					height: 40%;
					width: 40%;
					margin-top: 10px;
					margin-bottom: 5px;
				}
				view{
					font-size: 16px;
				}
			}
		}
	}
}
</style>

