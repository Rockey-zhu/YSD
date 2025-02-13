import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
    baseURL: 'http://localhost:3002/web/api'
})
window.axios = axios;

http.interceptors.request.use(function(config) {
    // 请求头Authorization
    config.headers.Authorization = 'Bearer ' + localStorage.token;
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

http.interceptors.response.use(res => {
    return res
}, err => {
    if (err.response.data.message) {
        console.log("err", err.response.data);
        Vue.prototype.$Message.error(err.response.data.message);
    }

    return Promise.reject(err)
})

export default http