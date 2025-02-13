import Vue from 'vue'
import App from './App'


import store from './store'
//导入Vuex
Vue.prototype.$store = store
Vue.config.productionTip = false

//全局组件
import navBar from 'pages/components/navbar/index.vue'
Vue.component('nav-bar',navBar)


//全局组件
import home from 'pages/index/index.vue'
Vue.component('home',home)

import components from 'pages/message/message.vue'
Vue.component('components',components)

import userCenter from 'pages/userCenter/userCenter.vue'
Vue.component('userCenter',userCenter)

App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount() 