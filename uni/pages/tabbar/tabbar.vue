<template>
	<view :class="curThemeType" v-if="hackReset" >
		<home v-if="PageCur=='home' && hackReset" ></home>
		<components v-if="PageCur=='component'"></components>
		<userCenter v-if="PageCur=='userCenter'"></userCenter>
		<view class="cu-bar tabbar  shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<text :class="'cuIcon-home'+[PageCur=='home'?'fill':'']" class="tabbarIconColor"></text>
				</view>
				<view :class="PageCur=='home'?'iconTextColorActive':'iconTextColor'">{{lang.homePage}}</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<text :class="'cuIcon-community'+[PageCur=='component'?'fill':'']" class="tabbarIconColor"></text>
				</view>
				<view :class="PageCur=='component'?'iconTextColorActive':'iconTextColor'">{{lang.chat}}</view>
			</view>
			<view class="action" @click="NavChange" data-cur="userCenter">
				<view class='cuIcon-cu-image'>
					<text :class="'cuIcon-friend'+[PageCur=='userCenter'?'fill':'']" class="tabbarIconColor"></text>
				</view>
				<view :class="PageCur=='userCenter'?'iconTextColorActive':'iconTextColor'">{{lang.personCenter}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	export default {
		data() {
		return {
				PageCur: 'home',
				hackReset:true
			}
		},
		computed: {
			...mapState([
				'lang',
				'curThemeType'
			])
		},
		methods: {
			NavChange: function(e) {
				console.log( e.currentTarget.dataset.cur)
				this.PageCur = e.currentTarget.dataset.cur
			}
		},
		onShow(){
			//再要操作子组件时进行销毁重建,这样子组件生命周期会全部更新一遍
			this.hackReset = false;
			  this.$nextTick(() => {
			       this.hackReset = true;
			  })
		}
	}
</script>

<style>
	@import "@/style/colorUi/main.css";
</style>
