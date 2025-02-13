'use strict'

const Controller = require('egg').Controller;

class admin extends Controller {
    async index() {
        await this.ctx.render('news')
    }
}

module.exports = admin;