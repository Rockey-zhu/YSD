const {
    constModifyingNamingRules,
    saveDay,
    basicDataVerification,
    basicData,
    joiValidateFun
} = require("../../lib/commentFunction");
// const { addOneRow } = require("../../lib/commentDataBaseFunctin")
const CONFIG = require("../../config");
const codeBack = require("../../middleware/codeback")
const knex = require("knex")(CONFIG.mysql);
const Joi = require("joi");
let fs = require("fs");
const {
    v4: uuidv4
} = require("uuid");
const e = require("express");
const codeback = require("../../middleware/codeback");

module.exports = {
    async testGet(req, res) {
        //获取url值
        const {
            id,
            userName,
            passWord,

        } = req.query;
        console.log("____req.query__", req.query)
        let getQuery = {
            id: parseInt(id),
            userName: userName,
            passWord: passWord,
        };
        joiValidateFun(getQuery).then(() => {
            codeBack(req, res, 2000, "操作成功", {
                countId: "",
                data: {
                    a: "1",
                    b: "2",
                    c: "3",
                },
                default: {
                    passWord: passWord,
                    userName: userName,
                },
                success: true,
            })
        }).catch(err => {
            codeBack(req, res, err.code, err.message);
        });
    }

}

let json = [{
    "title": "轮播图",
    "name": "轮播图",
    "icon": "icon-banner",
    "img": "/keydatatest/img/swiper.770ce98b.png",
    "top": 13.77,
    "left": 4.59,
    "dataType": 1,
    "dataMethod": "get",
    "time": 5000,
    "url": "./swiper",
    "data": [{
        "value": "https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg"
    }, {
        "value": "https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg"
    }],
    "dataFormatter": "",
    "stylesFormatter": "",
    "component": {
        "width": 1913.89,
        "height": 314.92,
        "name": "swiper",
        "prop": "swiper"
    },
    "option": {
        "type": "",
        "interval": 5000,
        "opacity": 100,
        "indicator": "none"
    },
    "index": "73e1481e-8961-44ed-812c-271c1efc12c9",
    "zIndex": 2
}, {
    "title": "图片框",
    "name": "图片框",
    "icon": "icon-img",
    "img": "/keydatatest/img/imgborder.a784b680.png",
    "top": 754.29,
    "left": 241.74,
    "component": {
        "width": 140,
        "height": 140,
        "name": "imgborder",
        "prop": "imgborder"
    },
    "option": {
        "backgroundColor": "rgba(180, 181, 198, 0.1)",
        "opacity": 0
    },
    "index": "fd9006b3-53b5-4c1a-b841-d44f2c32c404",
    "zIndex": 1,
    "data": "upload/keydata/border/border1.png"
}, {
    "title": "图片",
    "name": "图片",
    "icon": "icon-img",
    "img": "/keydatatest/img/img.97e50755.png",
    "top": 751.23,
    "left": 1227.06,
    "dataType": 1,
    "data": {
        "value": "https://avuex.avue.top/images/logo.png"
    },
    "dataFormatter": "",
    "stylesFormatter": "",
    "component": {
        "width": 140,
        "height": 140,
        "name": "img",
        "prop": "img"
    },
    "option": {
        "duration": "1000",
        "opacity": 0
    },
    "index": "ac54070e-593d-4803-85d8-10c5cdfcfe31",
    "zIndex": 0
}]