import config from '@/config';
var request = window.axios;

//console.log("http", config)


export const postUpload = (data) => request({
    url: config.http + '/yunyiUpload/put-file',
    method: 'post',
    data: data
})