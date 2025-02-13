import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import http from './http'
import "bootstrap/dist/css/bootstrap.min.css"

//将http放在vue原型上，这样就可以在任意界面使用this.http访问了
Vue.prototype.$http = http
Vue.prototype.$httpUrl = 'http://localhost:3002'
Vue.prototype.$upload = 'localhost:3002/web/api/yunyiUpload/put-file'

window.axios = axios;

Vue.config.productionTip = false
Vue.use(ViewUI);

Vue.mixin({
    methods: {
        getAuthHeaders() {
            return {
                Authorization: `Bearer ${localStorage.token || ''}`
            }
        }
    },
})


//格式化时间
Date.prototype.Format = function(fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')