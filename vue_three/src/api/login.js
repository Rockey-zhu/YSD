import config from '@/config';
var request = window.axios;

//console.log("http", config)
export const postLogin = (data) => request({
    url: config.http + '/login/postlogin',
    method: 'post',
    data: data
})
export const postRegister = (data) => request({
    url: config.http + '/login/postRegister',
    method: 'post',
    data: data
})