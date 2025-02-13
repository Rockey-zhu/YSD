'use strict';

const Controller = require('egg').Controller;

/**
 * egg 是一个mvc的框架
 * 
 * view 试图 模板 页面的展示
 * Controler控制器  负责处理一些业务逻辑
 * model 模型(service)  和数据交互（ 查询数据库  || 请求数据 ）
 * 
 */
class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, 111';
    }

    async news() {
        const { ctx } = this;
        ctx.body = 'hi, news';
    }
}

module.exports = HomeController;