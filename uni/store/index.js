import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 国际化相关代码
try {
	// 1. 分析用户已经选择的语言 
	var userLang = uni.getStorageSync("userLang");
	// 2. 如果用户没有选择过获取用户手机的语言
	if(!userLang){
		const sys = uni.getSystemInfoSync();
		userLang = sys.language;
	}
	console.log("userLang",userLang);
	// 以中英文切换为例, 其他语言请使用 getSystemInfoSync 获取语言对应的字符串
	// 然后扩展语言包即可
	if(userLang == 'zh-CN'){
		var lang = require('../language/zh.js');
	}else if(userLang == 'en'){
		var lang = require('../language/en.js');
	}else{//默认语言包
		var lang = require('../language/zh.js');
	}
} catch (e) {
    // error
}

//主题样式管理
try{
	//分析用户的主题样式
	let userTheme = uni.getStorageSync('userTheme');
	//若无赋初值，默认为蓝色
	if(!userTheme){
		userTheme = 'blue-theme'
	}
	console.log("初始样式",userTheme);
	//将获取的值赋给全局变量
	var curThemeType = userTheme;

}catch{
	console.log('ThemeStyle change error')
}

const store = new Vuex.Store({
	state: {
		lang : lang,//默认语言是中文
		curThemeType:curThemeType,//默认样式为蓝色
		userInfo: {
			accountPicture: '/static/logo.png',
			name: 'name',
			number: '1',
		},
	},
	getters:{
		getCurThemeType(state){
			return state.curThemeType
		}
	},
	mutations: {
		handleChangeChinese:function(state){
			state.lang = require('../language/zh.js');
			//将userLnag存储到本地
			uni.setStorage({
				key:'userLang',
				data:'zh-CN',
				success: () => {
					console.log('CNLanguagesuccess');
				}
			})
		},
		handleChangeEnglish:function(state){
			state.lang = require('../language/en.js');
			uni.setStorage({
				key:'userLang',
				data:'en',
				success: () => {
					console.log('enLanguagesuccess');
				}
			})
		},
		setCurThemeType(state,data){
			state.curThemeType = data;
			console.log('state.curThemeType',state.curThemeType);
			//保存至缓存
			uni.setStorage({
				key:'userTheme',
				data:state.curThemeType,
				success: () => {
					console.log('ThemeTypesuccess');
				}
			})
		}
	}
})
export default store;