import config from '@/config';
import axios from 'axios';

var request = axios;

//console.log("http", config)
export const getArt = (data) => request({
    url: config.http + '/yunyiUser/artlist',
    method: 'get',
    data: data
})
export const postNewArt = (data) => request({
    url: config.http + '/yunyiUser/newart',
    method: 'post',
    data: data
})
export const postUpdataArt = (data) => request({
    url: config.http + '/yunyiUser/updataart',
    method: 'post',
    data: data
})
export const postRemoveArt = (params) => request({
    url: config.http + '/yunyiUser/removeart',
    method: 'get',
    params: params
})
export const postPublish = (data) => request({
    url: config.http + '/yunyiUser/publish',
    method: 'post',
    data: data
})