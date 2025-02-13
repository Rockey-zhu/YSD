<template>
	<view :class="curThemeType">
	<!-- <nav-bar :title="lang.login" home=false></nav-bar> -->
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<wInput v-model="phoneData" type="text" maxlength="11" :placeholder="lang.userName+'/'+lang.telephone"></wInput>
				<wInput v-model="passData" type="password" maxlength="11" :placeholder="lang.password"></wInput>
			</view>
			<wButton class="wbutton" :text="lang.login" :rotate="isRotate" @click="startLogin"></wButton>
			<!-- 其他登录 -->
			<view class="other_login cuIcon">
				<view class="login_icon">
					<button class="cuIcon-weixin btStyle" open-type="getUserInfo" lang="zh_CN" @getuserinfo="login_weixin" withCredentials="true"></button>
				</view>
				<view class="login_icon">
					<button class="cuIcon-weibo btStyle" @tap="login_weibo"></button>
				</view>
				<view class="login_icon">
					<button class="cuIcon-github btStyle" @tap="login_github"></button>
				</view>
			</view>

			<!-- 底部信息 -->
			<view class="footer"> 
				<navigator url="forget" open-type="navigate">{{lang.forget}}</navigator>
				<text>|</text>
				<navigator url="register" open-type="navigate">{{lang.registerAccount}}</navigator>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../components/watch-login/watch-input.vue' //input
	import wButton from '../components/watch-login/watch-button.vue' //button
	import {mapState, mapMutations} from 'vuex';
	export default {
		data() {
			return {
				//logo图片 base64
				logoImage: '../../static/logo.png',
				phoneData: '', //用户/电话
				passData: '', //密码
				isRotate: false, //是否加载旋转
			}
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		components: {
			wInput,
			wButton,
		},
		mounted() {
			_this = this;
			//this.isLogin();
		},
		methods: {
			isLogin() {
				//判断缓存中是否登录过，直接登录
				// try {
				// 	const value = uni.getStorageSync('setUserData');
				// 	if (value) {
				// 		//有登录信息
				// 		console.log("已登录用户：",value);
				// 		_this.$store.dispatch("setUserData",value); //存入状态
				// 		uni.reLaunch({
				// 			url: '../../../pages/index',
				// 		});
				// 	}
				// } catch (e) {
				// 	// error
				// }
			},
			startLogin(e) {
				console.log(e)
				//登录
				if (this.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.phoneData.length == "") {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: this.lang.userNameNull
					});
					return;
				}
				if (this.passData.length < 5) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: this.lang.passwordError
					});
					return;
				}

				console.log("登录成功")

				_this.isRotate = true
				//设置三秒加载 
				// setTimeout(function(){
				// 	_this.isRotate=false;
				// },3000)

				//登录成功加载一秒
				setTimeout(function() {
					_this.isRotate = false;
					//!!!需要删除的代码
					//无验证直接跳转
					uni.setStorage({ //将用户信息存储到本地缓存中
						key: "phoneData",
						data: _this.phoneData,
						success() {
							console.log("存储成功！");
							//清除其他登录的缓存文件
							uni.removeStorageSync('weixinData');
							uni.reLaunch({
								url: '../tabbar/tabbar'
							})
						}
					})
				}, 1000)
				// uni.showLoading({
				// 	title: '登录中'
				// });
				// getLogin()
				// .then(res => {
				// 	//console.log(res)
				// 	//简单验证下登录（不安全）
				// 	if(_this.phoneData==res.data.username && _this.passData==res.data.password){
				// 		let userdata={
				// 			"username":res.data.username,
				// 			"nickname":res.data.nickname,
				// 			"accesstoken":res.data.accesstoken,
				// 		} //保存用户信息和accesstoken
				// 		_this.$store.dispatch("setUserData",userdata); //存入状态
				// 		try {
				// 			uni.setStorageSync('setUserData', userdata); //存入缓存
				// 		} catch (e) {
				// 			// error
				// 		}
				// 		uni.showToast({
				// 			icon: 'success',
				// 			position: 'bottom',
				// 			title: '登录成功'
				// 		});
				// 		uni.reLaunch({
				// 			url: '../../../pages/index',
				// 		});
				// 	}else{
				// 		_this.passData=""
				// 		uni.showToast({
				// 			icon: 'error',
				// 			position: 'bottom',
				// 			title: '账号或密码错误，账号admin密码admin'
				// 		});
				// 	}
				// 	uni.hideLoading();
				// }).catch(err => {
				// 	uni.hideLoading();
				// })

			},
			login_weixin(res) {
				//微信登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: this.lang.weChatLogin
				});

				// #ifdef MP-WEIXIN
				uni.getProvider({//获取服务商信息
					service: 'oauth',
					success: (res)=> {
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: (res2) => {
									uni.getUserInfo({
										provider: 'weixin',
										success: (info) => { //这里请求接口
											//console.log(res2);
											console.log(info);
											uni.setStorage({ //将用户信息存储到本地缓存中
												key: "weixinData",
												data:info.userInfo ,
												success() {
													console.log("存储成功！")
												}
											})
											//跳转页面
											uni.reLaunch({
												url: '../tabbar/tabbar',
												success: () => {
													uni.showToast({//跳转提示
														icon: 'none',
														position: 'bottom',
														title: this.lang.weChatLoginSuccessful
													});
													//防止数据冲突，清除其他登录方式的缓存
													uni.removeStorageSync('phoneData');
												}
											})
										},
										fail: () => {
											uni.showToast({
												title: this.lang.weChatLoginError,
												icon: "none"
											});
										}
									})

								},
								fail: () => {
									uni.showToast({
										title: this.lang.weChatLoginError,
										icon: "none"
									});
								}
							})
						} else {
							uni.showToast({
								title: this.lang.installWeChat,
								icon: "none"
							});
						}
					}
				});
				//#endif
			},
			login_weibo() {
				//微博登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			},
			login_github() {
				//github登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			}
		}
	}
</script>

<style>
	@import url("./css/main.css");
</style>

<!-- 主题样式颜色 -->
<style lang="scss">
	.login{
		height: 100%;
		button::after {
			border: none;
		}
		.dlbutton{
			font-weight:bold;
			font-size: 32rpx;
		}
	}
</style>
