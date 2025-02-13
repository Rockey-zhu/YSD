### 结构信息

-------libs #存放公用js
	|
	|
-------pages #存放页面组件 ------billboard	
	|					|
	|					|
	|					|-------components
	|					|
	|					|
	|					|-------detail
	|					|
	|					|
	|					|-------index
	|					|
	|					|
	|					|-------login
	|					|
	|					|
	|					|-------message
	|					|
	|					|
	|					|-------usercenter
	|					
	|					
	|
	|
-------static #存放静态数据：图片，logo，css和小部分js
	|
	|
-------store #vuex入口
	|
	|
-------style #存放样式文件
	|
	|
-------unpackage #项目打包文件
	|
	|
-------App.vue 
	|
	|
-------main.js
	|
	|
-------manifest.json #基础配置
	|
	|
-------pages.json  #路由文件&&全局样式
	|
	|	
-------READEME.md
	|
	|
-----
	
	


### 学习素材

编译器 HBuilder X 
[](https://www.dcloud.io/hbuilderx.html)
在  工具----安装插件  内安装---- less / scss 

文档
uniapp：[](https://uniapp.dcloud.io/)
微信小程序：[](https://developers.weixin.qq.com/miniprogram/dev/framework/)


社区
DCLOUD：[](https://ask.dcloud.net.cn/explore/is_recommend-1)
微信社区：[](https://developers.weixin.qq.com/community/develop/question)

插件市场
[](https://ext.dcloud.net.cn/?cat1=1&cat2=11)


视频：简易的API讲解 && 示例项目（不建议看） && 小程序，H5，APP 打包流程
[](https://www.bilibili.com/video/BV1CC4y1476y?from=search&seid=13476653383407211300)


代码过程

设置元素边框盒尺寸（box-sizing:border-box）
当元素的 box-sizing 是 border-box 的时候，我们给元素设置的宽度、高度实际上是设置这个元素边框盒的宽度、高度。也就是说内边距、边框都是在这个内部绘制，而不会把元素撑开。
还是同样的样例，设置为border-box后：


---------------------------------------------------------------------------------------------------------------------------------------
同步是指：当程序1调用程序2时，程序1停下不动，直到程序2完成回到程序1来，程序1才继续执行下去。  
异步是指：当程序1调用程序2时，程序1径自继续自己的下一个动作，不受程序2的的影响。
---------------------------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------------------------
同步是指：发送方发出数据后，等接收方发回响应以后才发下一个数据包的通讯方式。  
异步是指：发送方发出数据后，不等接收方发回响应，接着发送下个数据包的通讯方式。
---------------------------------------------------------------------------------------------------------------------------------------
#### 条件编译：
条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。
写法：以 #ifdef 或 #ifndef 加 %PLATFORM% 开头，以 #endif 结尾。

#ifdef：if defined 仅在某平台存在
#ifndef：if not defined 除了某平台均存在
%PLATFORM%：平台名称

%PLATFORM% 可取值如下：
|值						|平台																	|
|APP-PLUS				|App																	|
|APP-PLUS-NVUE			|App nvue																|
|H5						|H5																		|
|MP-WEIXIN				|微信小程序																|
|MP-ALIPAY				|支付宝小程序															|
|MP-BAIDU				|百度小程序																|
|MP-TOUTIAO				|字节跳动小程序															|
|MP-QQ					|QQ小程序																|
|MP-360					|360小程序																|
|MP						|微信小程序/支付宝小程序/百度小程序/字节跳动小程序/QQ小程序/360小程序	|
|quickapp-webview		|快应用通用(包含联盟、华为)												|
|quickapp-webview-union	|快应用联盟																|
|quickapp-webview-huawei|快应用华为																|

#### UNIAPP路由跳转
--- 1.uni.navigateTo(OBJECT)保留当前页面（跳转新的页面）
--- 2.uni.redirectTo(OBJECT)关闭当前页面，跳转到应用内的某个页面。
--- 3.uni.reLaunch(OBJECT)关闭所有页面，打开到应用内的某个页面。
--- 4.uni.switchTab(OBJECT)跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
--- 5.uni.navigateBack(OBJECT)关闭当前页面，返回上一页面或多级页面。

--- 注意：navigateTo, redirectTo 只能打开非 tabBar 页面。
--- switchTab 只能打开 tabBar 页面。
--- reLaunch 可以打开任意页面。
--- 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
--- 不能在 App.vue 里面进行页面跳转。

#### 常用API
---- 1.数据缓存 
		https://uniapp.dcloud.io/api/storage/storage?id=setstorage

	
#### 注意事项
--- 1.小程序端不支持更新属性值为 undefined，框架内部将替换 undefined 为 null
--- 2.tabbar的页面展示过一次后就会保存在内存中，再次切换tabbar页面，只会出发每个页面的onShow，不会再触发onLoad 
--- 3.uni.chooseImage 上传图片 count值在H5只能限制单选（1）/多选（>1）,无法限制数量
	  https://uniapp.dcloud.io/api/media/image?id=chooseimage
--- 4.组件无uniapp的生命周期，但有vue的生命周期钩子  
	  
	



### 问题待解决
1.vue界面导入js  ， export default 暴露js内相关信息，vx上传时报错
	已解决：
	解决方法如下： 将export default xxxxx;方式暴露js内信息方式修改为 module.exports = {}
	不可用方案： export default {   }
	参考网址：https://blog.csdn.net/wron_path/article/details/105317474
	
2.获得当前定位，vx开发者工具和真机测试都没问题，但生成体验版后无法获取当前定位
	已解决
	解决方案如下：在微信小程序控制页面  开发--开发设置---服务器域名 为接口域名添加白名单
				在manifest.json中打开微信小程序 接口位置选项
				
				
3.子组件不是页面，无法触发小程序的页面生命周期


### 思路分析
--- 用户登录相关思路
		将输入框phoneData与passData信息通过接口传递至后台判定是否存在。
		存在的话，将用户的phoneData 通过 uni.setStorage保存到用户本地缓存内
		通过本地缓存将用户相关信息从数据库内调出，渲染至界面内
		点击退出登录 uni.removeStorage删除本地缓存并  uni.reLaunch跳转至登录界面。
		
		
		
----多语言切换思路
		使用：
			因为使用的是store状态机管理多语言的
			在页面内首先需要将其导入至界面内
			import {mapState} from 'vuex';
			........
			computed: {
				...mapState([
					'lang'
				])
			},
			html通过{{lang.xxxx}}引用，js代码内通过this.lang.xxxx引用
		
		实现思路
			1.首先应该思考的是将页面内文字有关的部分抽离放置在js文件内（language文件夹内）。
			  书写不同语种的js文件。通过module.exports={}抛出数据.
			  
			2.其次是如何导入这些js文件。借助vuex的状态机管理，经判定，通过require函数将js抛出的数据存放在变量内，再将变量赋值给static内的变量lang。
				这样就将js内数据保存至状态机内了，即可在项目内的页面里使用.
				
			3.在页面中如何使用？见上文。
			
			4.退出后如何保持现在的选择状态？使用缓存，在切换语言时，将语种信息保存至缓存userLang内。 
				判定是否有缓存userLang
				有:保存至相关变量内 -> 通过变量判定require读取相关js；
				无:通过uni.getSystemInfoSync();获取用户手机语种，保存至相关变量 -> 通过变量判定require读取相关js；
				默认：中文。后续可通过环境变量拓展，使不同环境有着不同的默认语言
				
		
		
----3.多主题切换思路
		1.使用：
			<template>
				<view :class="curThemeType">
				</view>
			</template>
			...........
			computed: {
				...mapState([
					'curThemeType'
				])
			},
		
		2.实现思路：
			主要思路：通过双向绑定改变class值 :class="curThemeType"，将curThemeType存入状态机内，改变curThemeType的值。
					 通过curThemeType去改变样式。
			
			过程
				1.style内创建不同样式的less文件。在App.vue中导入这些文件  样式文件开头书写格式	.颜色-theme{样式内容}
				2.setCurThemeType函数改变curThemeType的值。
				3.将curThemeType的值保存到缓存内
				4.通过缓存保存样式改变后的状态。
				
			
			
			
	
### 常用技巧
	1.判断是否为微信小程序
		方案一：在百度小程序开发工具、微信小程序开发工具、支付宝小程序开发工具中使用
			uni.getSystemInfoSync().platform 返回值均为 devtools
					
		方案二：使用条件编译(查看READEM)
		
	2.组件无小程序生命周期但有vue生命周期
		如果想在页面内动态刷新组件中的data内的值，需要通过父级页面的onshow（）改变v-if的判定值，实现动态刷新子组件，子组件再次通过created生命周期刷新页面





### 新建页面格式
	<template>
		<view :class="curThemeType">
			<nav-bar :title="lang.xxxxx" backState="2000"></nav-bar>
			<view>
				
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
		}
	</script>
	
	<style scoped lang="less">
	</style>
	
### navbar属性说明
|属性	|属性类型	|默认值	|说明|
|title		|string			|首页	|导航栏标题					|
|textColor	|string			|#333	|导航栏文字颜色				|
|bgColor	|string			|#ffffff|导航栏背景颜色				|
|isReturn	|string，boolean|false	|是否显示返回按钮			|
|textAlign	|string			|left	|文字对齐方式，left和center	|
|fixed		|string			|fixed	|标题栏表现形式 fixed和none	|
|returnColor|number			|0		|返回按钮的颜色 0白色 1黑色	|

