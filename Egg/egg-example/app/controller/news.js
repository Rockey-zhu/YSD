'use strict'

const Controller = require('egg').Controller;

class news extends Controller {
    async index() {
        const { ctx } = this;
        //获取get传值
        var query = this.ctx.query;
        console.log(query);

        this.ctx.body = "usercenter"
    }

    async newsList() {
        //获取get传值
        var params = this.ctx.params;
        console.log(params);
        this.ctx.body = "newsList"
    }
}

module.exports = news;