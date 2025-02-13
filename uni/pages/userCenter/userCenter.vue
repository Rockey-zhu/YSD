<template>
	<view :class="curThemeType">
		<nav-bar :title="lang.personCenter" backState="2000"></nav-bar>
		<view class="userCenter">
			<view class="userAvater">
				<view class="userContent">
					<view class="headPortrait">
						<image class="headImg" :src="userInfo.accountPicture" @click="chooseImg"></image>
					</view>
					<view class="textContent">
						<view>{{userInfo.name}}</view>
						<br />
						<view class="textContentCollect">{{lang.collect}}：{{userInfo.number}}</view>
					</view>
					<view class="userSetting">
						<view>
							<text class="cuIcon-settingsfill"  @click="handleToPersonCenter"></text>
						</view>
					</view>
				</view>
			</view>
			<view class="example-body">
				<uni-grid :column="3" :highlight="true">
					<uni-grid-item v-for="(item, index) in list" :index="index" :key="index" v-if="hackReset">
						<view class="grid-item-box" @click="handleTo(item)">
							<!-- <image :src="item.url" class="image" mode="aspectFill" /> -->
							<text class="image" :class="item.url" ></text>
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import uniGrid from './components/uni-grid.vue'
	import uniGridItem from './components/uni-grid-item.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem,
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType',
				'userInfo'
			])
		},
		data() {
			return {
				dynamicList: [],
				imgArr: [], //保存上传图片的信息
				hackReset:true,
				list: [{
						url: 'cuIcon-rankfill',
						text: '最近访问',
						badge: '0',
						type: "primary"
					},
					{
						url: 'cuIcon-favorfill',
						text: '收藏',
						badge: '1',
						type: "success"
					},
					{
						url: 'cuIcon-tagfill',
						text: '标签管理',
						badge: '2',
						type: "warning"
					},
					{
						url: 'cuIcon-creativefill',
						text: '知识库',
						badge: '3',
						type: "error"
					},
					{
						url: 'cuIcon-card',
						text: '数据填报',
						badge: '4',
					},
					// {
					// 	url: '/static/personCenter/fankui.png',
					// 	text: '反馈',
					// 	badge: '5',
					// },
					{
						url: 'cuIcon-settingsfill',
						text: '设置',
						badge: '6',
					},
					{
						url: 'cuIcon-commandfill',
						text: 'Default',
						badge: '7',
					}
				]
			}
		},
		onLoad() {
		},
		created() {
			//初始化list列表
			// this.list[0].text = this.lang.recentVisit;
			// this.list[1].text = this.lang.collect;
			// this.list[2].text = this.lang.tabUtilities;
			// this.list[3].text = this.lang.reposotpry;
			// this.list[4].text = this.lang.dataProvided;
			// this.list[5].text = this.lang.setting;
			console.log("usercenterShow")
			//再要操作子组件时进行销毁重建,这样子组件生命周期会全部更新一遍
			//获取缓存数据
			//将本地缓存内数据取出赋给用户id
			//读取账号密码登录时的缓存
			uni.getStorage({
				key: "phoneData",
				success: res => {
					console.log("获取成功，phoneData为", res.data, this.userInfo.name);
					this.userInfo.name = res.data;
				},
				fail: () => {
					console.log('获取phoneData缓存失败');
				}
			})
			//读取微信登录时的缓存
			uni.getStorage({
				key: 'weixinData',
				success: res => {
					console.log("获取成功，weixinData为", res.data, this.userInfo.name);
					this.userInfo.name = res.data.nickName;
					this.userInfo.accountPicture = res.data.avatarUrl;
				}
			})
			this.hackReset = false;
			  this.$nextTick(() => {
			       this.hackReset = true;
			  })
		},
		methods: {
			handleTo(item) {
				//跳转到设置
				console.log(item.badge)
				if (item.badge == 0) {
					uni.navigateTo({
						url: '../userCenter/components/recents/recents'
					});
				}
				if (item.badge == 1) {
					uni.navigateTo({
						url: '../userCenter/components/collect/collect'
					});
				}
				if (item.badge == 2) {
					uni.navigateTo({
						url: '../userCenter/components/tagMangement/tagMangement'
					});
				}
				if (item.badge == 3) {
					uni.navigateTo({
						url: '../userCenter/components/repository/repository'
					});
				}
				if (item.badge == 4) {
					uni.navigateTo({
						url: '../userCenter/components/dataProvided/dataProvided'
					});
				}
				// if(item.badge == 5){
				// 	uni.navigateTo({
				// 	    url: './components/tagMangement/tagMangement'
				// 	});
				// }
				if (item.badge == 6) {
					uni.navigateTo({
						url: '../userCenter/components/setting/setting'
					});
				}
				if (item.badge == 7) {
					uni.navigateTo({
						url: '../userCenter/components/default/default'
					});
				}
			},
			//上传头像
			chooseImg() {
				uni.chooseImage({
					count: 1,
					success: res => {
						console.log(res);
						this.imgArr = res.tempFilePaths;
						this.userInfo.accountPicture = this.imgArr[0];
					}
				})
				console.log("chooseImg");
			},
			//预览图片
			previewImg(current) {
				console.log(curre)
				uni.previewImage({
					current,
					urls: this.imgArr,
					loop: true,
					indicator: this.imgArr.length
				})
			},
			handleToPersonCenter() {
				uni.navigateTo({
					// url: './components/setting/components/personCenter'
					url:'../userCenter/components/setting/components/personCenter'
				});
				console.log("11")
			}
		}
	}
</script>

<style lang="less" scoped>
	.userCenter {
		.userAvater {
			height: 150px;
			margin: 0 10px;
			margin-bottom: 10px;
			border-radius: 8px;
			.userContent {
				padding: 20px 20px;
				.headPortrait {
					float: left;
					height: 110px;
					width: 110px;
					.headImg {
						height: 100%;
						width: 100%;
						border-radius: 60rpx;
					}
				}
				.textContent {
					float: left;
					//background-color: red;
					width: 50%;
					padding-left: 20px;
					padding-top: 20px;
					.textContentCollect {
						/*#ifdef MP-WEIXIN*/
						padding-top: 80rpx;
						/*#endif*/
					}
				}
				.userSetting {
					//background-color: red;
					padding-top: 20px;
					text{
						font-size: 40rpx;
					}
				}
			}
		}
		.example-body {
			flex-direction: column;
			padding: 6px;
			margin: 10px;
			border-radius: 8px;
		}
		.image {
			font-size: 52rpx;
			
		}
		.text {
			font-size: 26rpx;
			margin-top: 10rpx;
		}
		.grid-dynamic-box {
			margin-bottom: 15px;
		}
		.grid-item-box {
			flex: 1;
			/* position: relative;*/
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 15px 0;
		}
		.grid-dot {
			position: absolute;
			top: 5px;
			right: 15px;
		}
	}
</style>
