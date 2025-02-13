import config from '@/config';
import axios from 'axios';

var request = axios;

export const getUser = (data) => request({
    url: config.http + '/yunyiUser/list',
    method: 'get',
    data: data
})
export const postUpdata = (data) => request({
    url: config.http + '/yunyiUser/updata',
    method: 'post',
    data: data
})
export const postRemove = (params) => request({
    url: config.http + '/yunyiUser/remove',
    method: 'get',
    params: params
})