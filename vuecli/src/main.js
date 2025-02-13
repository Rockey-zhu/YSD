import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import three from 'three';
import anime from 'animejs/lib/anime.es.js';
import VueNeditorWrap from "vue-neditor-wrap";
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import Driver from 'driver'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import htmlToPdf from '@/utils/htmlToPdf';
Vue.use(htmlToPdf)
Vue.use(ViewUI);
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
Vue.use(mavonEditor)
Vue.component("vue-neditor-wrap", VueNeditorWrap);
Vue.use(anime)
Vue.use(Driver)
Vue.use(VXETable)

Vue.config.productionTip = false
    //Vue.use(three)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')