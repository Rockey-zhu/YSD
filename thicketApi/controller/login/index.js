const CONFIG = require("../../config")
const knex = require('knex')(CONFIG.mysql);
const jwt = require('jsonwebtoken')
module.exports = {
    async postLogin(req, res) {
        //查表
        //返回token 
        let data = req.body.loginData;
        knex("blade_login").select().where({ username: data.username }).then(resp => {
            if (resp.length === 0) {
                console.log('用户不存在-------')
                res.send({
                    code: 3003,
                    msg: "用户不存在"
                })
            } else {
                knex("blade_login").select().where({ password: data.password }).then(resq => {
                    if (resq.length === 0) {
                        console.log('密码错误`````')
                        return res.send({
                            code: 3004,
                            msg: "密码错误"
                        })
                    } else {
                        const token = jwt.sign({ id: resp.id }, "sha");
                        console.log('登陆成功-------')
                        return res.send({
                            code: 2000,
                            msg: "登陆成功",
                            token: token
                        });
                    }
                })
            }
        })
    }
}