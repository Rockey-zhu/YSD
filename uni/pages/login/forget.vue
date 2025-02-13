<template>
	<view :class="curThemeType">
	<view class="forget">
	<nav-bar :title="lang.forget" backState="1000"></nav-bar>
		<view class="content">
			<!-- 主体 -->
			<view class="main">
				<view class="tips">{{lang.ifYouForgetText}}</view>
				<wInput
					v-model="phoneData"
					type="text"
					maxlength="11"
					:placeholder="lang.pleaseInputTelephone"
				></wInput>
				<wInput
					v-model="passData"
					type="password"
					maxlength="11"
					:placeholder="lang.pleaseInputNewPassword"
					isShowPass
				></wInput>
				
				<wInput
					v-model="verCode"
					type="number"
					maxlength="4"
					:placeholder="lang.authCode"
					
					isShowCode
					:codeText="lang.getAuthCode"
					setTime="30"
					ref="runCode"
					@setCode="getVerCode()"
				></wInput>
			</view>
			
			<wButton 
				class="wbutton"
				:text="lang.resetPasswords"
				:rotate="isRotate" 
				@click.native="startRePass()"
			></wButton>

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
				phoneData: "", //电话
				passData: "", //密码
				verCode:"", //验证码
				isRotate: false, //是否加载旋转
			}
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		components:{
			wInput,
			wButton
		},
		mounted() {
			_this= this;
		},
		methods: {
			getVerCode(){
				//获取验证码
				if (_this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				console.log("获取验证码")
				this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
				uni.showToast({
				    icon: 'none',
					position: 'bottom',
				    title: '模拟倒计时触发'
				});
				
				setTimeout(function(){
					_this.$refs.runCode.$emit('runCode',0); //假装模拟下需要 终止倒计时
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '模拟倒计时终止'
					});
				},3000)
			},
			startRePass() {
				//重置密码
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.phoneData.length != 11) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
			    if (this.passData.length < 6) {
			        uni.showToast({
			            icon: 'none',
						position: 'bottom',
			            title: '密码不正确'
			        });
			        return false;
			    }
				if (this.verCode.length != 4) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '验证码不正确'
				    });
				    return false;
				}
				console.log("重置密码成功")
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
				
				
			}
		}
	}
</script>

<style>
	@import url("../../style/colorUi/icon.css");
	@import url("./css/main.css");
</style>

