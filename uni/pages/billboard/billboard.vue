<template>
	<view class="container">
		<!-- <nav-bar :title="lang.homePage" backState="2000" fontColor="#ffffff" bgColor="#2d8cf0"></nav-bar>
		<scroll-view scroll-y="true" class="container-scroll">
			<view class="container-box">
				<view class="list-item">省份：{{obj.liveData.province || ''}}</view>
				<view class="list-item">位置：{{obj.liveData.city || ""}}</view>
				<view class="list-item">湿度：{{obj.liveData.humidity || 0}}%</view>
				<view class="list-item">温度：{{obj.liveData.temperature || 0}} 摄氏度</view>
				<view class="list-item">天气：{{obj.liveData.weather || ""}}</view>
				<view class="list-item">风向：{{obj.liveData.winddirection || ""}}</view>
				<view class="list-item">风力：{{obj.liveData.windpower || 0}}级</view>
			</view>
			<view class="container-wrap">
				<button type="default" class="container-button" @click="fnGetWeather()">获取当前城市天气</button>
				<button type="default" class="container-button" @click="fnGetCityCode()">获取其它城市天气</button>
			</view>

		</scroll-view> -->
		<web-view style="height: 750;" src="https://www.baidu.com"></web-view>
	</view>
</template>

<script> 
	
	// 需要去高德开发平台注册小程序密钥 https://console.amap.com/dev/key/app
	// 接口文档：https://lbs.amap.com/api/webservice/guide/api/weatherinfo
	import {mapState,mapMutations} from 'vuex';
	export default {
		data () {
			return {
				amapPlugin: null,
				key: "0c3434cdb6ec41777f71f23ffafb61b6",
				obj: {
					liveData: {}
				}
			}
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		onShow() {

		},
		onLoad () {
			//监听城市列表选择城市code
			//注册全局监听事件
			uni.$on('sendCode', res => {
				// console.log(res,'res');
				let item = JSON.parse(res);
				//city 城市编码表
				//key web服务类型的key值
				uni.showLoading({
					title: '请稍候...'
				})
				getApp().globalData.http.get('https://restapi.amap.com/v3/weather/weatherInfo', {
					params: {
						parameters: 'base',
						key: '0c3434cdb6ec41777f71f23ffafb61b6',
						city: item.adcode
					},
					header: {}
				}).then(res=> {
					// console.log({res:res})
					// console.log(res.data.lives, '1');
					uni.hideLoading()
					this.obj.liveData = res.data.lives;
					this.$set(this.obj, 'liveData', res.data.lives[0]);
				})
			})

			//sdk实例化
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			})
		},
		methods: {
			fnGetWeather () {
				uni.authorize({
				    scope: 'scope.userLocation',
				    success() {
				        uni.getLocation()
				    }
				})
				uni.showLoading({
					title: '请稍候...'
				})
				this.amapPlugin.getWeather({
					success: (data) => {
						console.log({data: data})
						uni.hideLoading()
						this.obj.liveData = data.liveData;
					},
					fail: function(info) {
						console.log(info)
					}
				})
			},
			fnGetCityCode () {
				uni.navigateTo({
					url: './city'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		.container-scroll {
			flex: 1;
			.container-box {
				padding: 30rpx;
				box-sizing: border-box;
				border-radius: 20rpx;
				.list-item {
					background: #fff;
					font-size: 28rpx;
					padding-left: 20rpx;
					padding-bottom: 20rpx;
				}
			}
			.container-wrap {
				width: 750rpx;
				font-size: 28rpx;
				.container-button {
					width: 620rpx;
					margin-top: 30rpx;
				}
			}
		}
	}
</style>
