import config from '@/config';
import axios from 'axios';

var request = axios;

export const getCheck = (data) => request({
    url: config.http + '/yunyiUser/checklist',
    method: 'get',
    data: data
})
export const postRemoveCheck = (params) => request({
    url: config.http + '/yunyiUser/removecheck',
    method: 'get',
    params: params
})
export const getCommunity = (limit) => request({
    url: config.http + '/yunyiUser/communityList',
    method: 'get',
    params: {
        limit
    },
})
export const postNewCommunity = (data) => request({
    url: config.http + '/yunyiUser/newcommunity',
    method: 'post',
    data: data
})
export const postRemoveCommunity = (data) => request({
    url: config.http + '/yunyiUser/removecommunity',
    method: 'post',
    data: data
})
export const postUpdateCommunity = (data) => request({
    url: config.http + '/yunyiUser/updatecommunity',
    method: 'post',
    data: data
})