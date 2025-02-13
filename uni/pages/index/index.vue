<template>
	<view :class="curThemeType">
		<view class="index">
			<!-- 刷新组件需搭配scroll-view使用，并在pages.json中添加 "disableScroll":true-->
			<view class="indexTop">
				<nav-bar :title="lang.homePage" backState="2000"></nav-bar>
				<!-- 搜索 -->
				<view class='indexSearchInput' @click="handleSearch">
					<view class='indexSearchBox'>
						<image src='@/static/icon-search.png' class='indexSearch'></image>
					</view>
					<input class='indexInput' placeholder="输入关键词"></input>
				</view>
			</view>
			<!--#ifndef MP-WEIXIN-->
			<view style="height: 160rpx;"></view>
			<!--#endif  -->
			<!--#ifdef  MP-WEIXIN  -->
			<view style="height: 250rpx;"></view>
			<!--#endif  -->
			<view class='nav'>
				<!-- 导航栏 agents导航栏标题 -->
				<navTab ref="navTab" :tabTitle="[lang.recentVisit,lang.collect]" @changeTab='changeTab' v-if="hackReset"></navTab>
			</view>
			<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
			<swiper class="swiperStyle"  :current="currentTab" @change="swiperTab">
				<swiper-item v-for="(listItem,listIndex) in list" :key="listIndex">
					<scroll-view class="scrollStyle" style="height: 100%;" scroll-y="true" scroll-with-animation :scroll-into-view="toView">
						<view class='content'>
							<view class='card' v-if="listItem.length > 0">
								<view class='smallcard' v-for="(item,index) in listItem" :key="index">
									<image :src="item.src"></image>
									<view>{{item.name}}</view>
								</view>
							</view>
						</view>
						<view class='noCard' v-if="listItem.length===0">
							暂无信息
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
			<view class="homeContent">
				<view class='dataCard' v-for="(reportItem,reportIndex) in reportcategory" :key="reportIndex">
					<view class="reportName">
						{{reportItem}}
						
						<text class="cuIcon-circlefill"></text>
					</view>
					<view class='smallcard'
					 v-for="(reportCategortDataItem,reportCategortDataIndex) in reportCategortData" 
					 :key="reportCategortDataIndex"
					 v-if="reportCategortDataItem.reportName === reportItem"
					 >
						<image :src="reportCategortDataItem.src"></image>
						<view>{{reportCategortDataItem.name}}</view>
					</view>
				</view>
				<view style="height: 100rpx;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	const util = require('@/libs/util.js');
	import {mapState,mapMutations} from 'vuex';
	import navTab from './components/navTab.vue';
	export default {
		components: {
			navTab,
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		data() {
			return {
				toView: '', //回到顶部id
				currentTab: 0, //sweiper所在页
				pages: [1, 1, 1, 1], //第几个swiper的第几页
				hackReset:true,
				list: [
					[	//最近访问内的数据
						{
							name: "one",
							src: "/static/KR-LOGO-400x400.png"
						}, {
							name: "two",
							src: "/static/logo.png"
						}, {
							name: "two",
							src: "/static/logo.png"
						}, {
							name: "two",
							src: "/static/logo.png"
						}
					],
					[//收藏
						
					]
				], //数据格式
				reportcategory:['Test DM','Korea',"Sales Insights","Supply","VN Mobile","VN Mobile"],
				reportCategortData:[
					{
						name: "222",
						src: "/static/logo.png",
						reportName:'Test DM'
					}, {
						name: "111",
						src: "/static/logo.png",
						reportName:'Test DM'
					}, {
						name: "444",
						src: "/static/logo.png",
						reportName:'Korea'
					}
				]
			};
		},
		onLoad(e) {
			
		},
		onShow() {
		},
		onHide() {
		},
		
		methods: {
			toTop() {
				this.toView = ''
				setTimeout(() => {
					this.toView = 'top' + this.currentTab
				}, 10)
			},
			changeTab(index) {
				this.currentTab = index;
			},
			// 其他请求事件 当然刷新和其他请求可以写一起 多一层判断。
			// isRequest() {
			// 	return new Promise((resolve, reject) => {
			// 		this.pages[this.currentTab]++
			// 		var that = this
			// 		setTimeout(() => {
			// 			uni.hideLoading()
			// 			uni.showToast({
			// 				icon: 'none',
			// 				title: `请求第${that.currentTab + 1 }个导航栏的第${that.pages[that.currentTab]}页数据成功`
			// 			})
			// 			let newData = ['新数据1','新数据2','新数据3']
			// 			resolve(newData)
			// 		}, 1000)
			// 	})
			// },
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				this.$refs.navTab.longClick(index);
			},
			// 加载更多 util.throttle为防抖函数
			// lower1: util.throttle(function(e) {
			// console.log(`加载${this.currentTab}`)//currentTab表示当前所在页数 根据当前所在页数发起请求并带上page页数
			// uni.showLoading({
			// 	title: '加载中',
			// 	mask:true
			// })
			// 	this.isRequest().then((res)=>{
			// 		let tempList = this.list
			// 		tempList[this.currentTab] = tempList[this.currentTab].concat(res)
			// 		console.log(tempList)
			// 		this.list = tempList
			// 		this.$forceUpdate() //二维数组，开启强制渲染
			// 	})
			// }, 300),
			handleSearch() {
				uni.navigateTo({
					url: '../components/search/search'
				});
			}
		}
	};
</script>

<style lang="less">
	.index {
		width: 100vw;
		font-size: 28rpx;
		min-height: 100rpx;
		overflow: hidden;
		position: relative;
		.indexTop{
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			height: 250rpx;
			/*#ifdef H5 */
			height:160rpx ;
			/*#endif*/
			font-size: 26rpx;
			border-radius: 0 0 8rpx 8rpx;
			z-index: 996;
			.indexSearchInput {
				width: 90%;
				margin: 0 auto;
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 56rpx;
				.indexSearchBox {
					width: 56rpx;
					height: 56rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					.indexSearch {
						width: 32rpx;
						height: 32rpx;
					}
				}
				.indexInput {
					color: #999;
					width: 80%;
				}
			}
		}
		.nav {
			left: 0;
			top: 0;
			width: 95%;
			margin: 10rpx 10px 0 10px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			font-size: 26rpx;
			border-radius: 8rpx 8rpx 0 0;
		}
		.swiperStyle{
			/*#ifdef H5 */
			height:180rpx ;
			/*#endif*/
			/*#ifdef  MP-WEIXIN*/
			height:180rpx ;
			/*#endif*/
			.scrollStyle{
				width: 95%;
				margin: 0 10px 42rpx 10px;
				border-radius: 5px;
				position: relative;
				.content {
					width: 100%;
					.card {
						.smallcard{
							float: left;
							width: 33%;
							height: 150rpx;
							padding-top: 20rpx;
							margin: auto;
							display: flex;
							align-items: center;
							justify-content: center;
							flex-direction: column;
							image{
								height: 80rpx;
								width: 80rpx;
								border-radius: 10rpx;
								padding-bottom: 10rpx;
							}
						}
					}
				}
				.noCard {
					height: 140rpx;
					margin: auto;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
		.homeContent{
			margin-top: 20rpx;
			.dataCard{
				width: 95%;
				height: 260rpx;
				margin: 0 10px 42rpx 10px;
				border-radius: 5px;
				position: relative;
				.reportName{
					padding-left: 30rpx;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
					text{
						height: 30rpx; 
						width: 30rpx; 
						float: right; 
						margin-right: 30rpx;
						margin-top: 10rpx;
					}
				}
				.smallcard{
					float: left;
					width: 33%;
					height: 200rpx;
					margin: auto;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					image{
						height: 80rpx;
						width: 80rpx;
						border-radius: 10rpx;
						padding-bottom: 10rpx;
					}
				}
			}
		}
	}
</style>
