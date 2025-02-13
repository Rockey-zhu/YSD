const {
    constModifyingNamingRules,
    saveDay,
    basicDataVerification,
    joiValidateFun
} = require("../../lib/commentFunction");
const {
    getCountLength
} = require("../../lib/commentDataBaseFunctin")
const codeBack = require("../../middleware/codeback");
const CONFIG = require("../../config");
const knex = require('knex')(CONFIG.mysql);
const {
    addOneRow
} = require("../../lib/commentDataBaseFunctin")
const Joi = require("joi");
const codeback = require("../../middleware/codeback");

const MAINSCHEMA = [{
        name: "tid",
        type: "int"
    },
    {
        name: "sid",
        type: "int"
    },
]
module.exports = {
    /*
    如何获取值 get请求方法   获取req的query方法取值
               post请求方法  获取req的body方法取值
    */
    async getList(req, res) {
        //获取url值
        const {
            current,
            size,
            tid,
            sid
        } = req.query;
        let data;
        let getQuery = {
            current: parseInt(current),
            size: parseInt(size),
            tid: parseInt(tid),
            sid: parseInt(sid),
        };
        joiValidateFun(getQuery).then(() => {
            getCountLength(`tb_core_data_visual_map`).then(count => {
                if (count > 0) {
                    knex('tb_core_data_visual_map').select("id", "name").limit(size).offset((current - 1) * size).then(resp => {
                        data = resp;
                    }).then(() => {
                        codeBack(req, res, 2000, `success`, {
                            current: current,
                            hitCount: false,
                            orders: [],
                            pages: 1,
                            records: data,
                            searchCount: true,
                            size: size,
                            total: count,
                        });
                    }).catch(err => {
                        codeBack(req, res, err.code, err.message);
                    })
                } else {
                    codeBack(req, res, 2004);
                }
            }).catch(err => {
                codeBack(req, res, err.code, err.message);
            })
        }).catch(err => {
            codeBack(req, res, err.code, err.message);
        })

    },

    async getDetail(req, res) {
        const {
            id,
            sid,
            tid
        } = req.query;
        //console.log("-------", current, size);
        let data;
        let items = {};
        let getQuery = {
            id: id,
            tid: tid,
            sid: sid,
        };
        // 数据校验
        const schema = basicDataVerification(MAINSCHEMA.concat(0, 0, [{
            name: "id",
            type: "int"
        }, ]));
        try {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined)
                    throw {
                        message: key + " is undefined"
                    };
            })
            await Joi.validate(getQuery, schema)
        } catch (error) {
            console.log(error.message);
            // 保存log文档
            items = {
                code: 4001,
                msg: error.message,
                success: false,
            }
            req.log.info(items);
            res.send(items);
            return;
        }

        knex('tb_core_data_visual_map').select().where({
            id: id
        }).then(resp => {
            //console.log(resp[0])
            data = resp[0];
        }).then(() => {
            if (data) {
                items = {
                    code: 2000,
                    data: data,
                    msg: "操作成功",
                    success: true
                }
                req.log.info(items);
                res.send(items)
            } else {
                req.log.info("error");
                res.send("error");
            }
        })
    },

    // 新增
    async postSave(req, res) {
        let {
            data,
            name,
            tid,
            sid,
            note,
            tags,
            score,
            createer_name,
            createer,
        } = req.body;
        let dataName = "tb_core_data_visual_map";
        let items = {};
        let getQuery = {
            data: data,
            name: name,
            tid: tid,
            sid: sid,
            note: note,
            tags: tags,
            score: score,
            is_sync: 0,
            is_system: 0,
            createer_name: createer_name,
            createer: createer,
            ctime: new Date().getTime(),
            modifier_name: createer_name,
            modifier: createer,
            mtime: new Date().getTime(),
            is_del: 0,
        };

        // 数据校验
        const schema = basicDataVerification(MAINSCHEMA.concat(0, 0, [{
                name: "data",
                type: "string"
            },
            {
                name: "name",
                type: "string"
            },
            {
                name: "note",
                type: "string"
            },
            {
                name: "tags",
                type: "string"
            },
            {
                name: "score",
                type: "int"
            },
            {
                name: "is_sync",
                type: "int"
            },
            {
                name: "is_system",
                type: "int"
            },
            {
                name: "createer_name",
                type: "string"
            },
            {
                name: "createer",
                type: "int"
            },
            {
                name: "ctime",
                type: "date"
            },
            {
                name: "modifier_name",
                type: "string"
            },
            {
                name: "modifier",
                type: "int"
            },
            {
                name: "mtime",
                type: "date"
            },
            {
                name: "is_del",
                type: "int"
            },

        ]));
        try {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined)
                    throw {
                        message: key + " is undefined"
                    };
            })
            await Joi.validate(getQuery, schema)
        } catch (error) {
            console.log(error.message);
            // 保存log文档
            items = {
                code: 4001,
                msg: error.message,
                success: false,
            }
            req.log.info(items);
            res.send(items);
            return;
        }
        addOneRow(dataName, getQuery).then(resp => {
            console.log("_map add News__res_:", resp);
            if (resp) {
                items = {
                    code: 2000,
                    msg: "操作成功",
                    success: true
                }
                req.log.info(items);
                res.send(items)
            } else {
                items = {
                    code: 4001,
                    msg: "操作失败",
                    success: true
                }
                req.log.info(items);
                res.send()
            }
        })
    },

    async postUpdate(req, res) {
        let {
            name,
            data,
            id,
            tid,
            sid,
            modifier_name,
            score
        } = req.body;
        let items = {};
        let getQuery = {
            id: id,
            data: data,
            name: name,
            tid: tid,
            sid: sid,
            modifier_name: modifier_name,
            score: score
        };
        // 数据校验
        const schema = basicDataVerification(MAINSCHEMA.concat(0, 0, [{
                name: "id",
                type: "int"
            },
            {
                name: "data",
                type: "string"
            },
            {
                name: "name",
                type: "string"
            },
            {
                name: "modifier_name",
                type: "string"
            },
            {
                name: "score",
                type: "int"
            }
        ]));
        try {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined)
                    throw {
                        message: key + " is undefined"
                    };
            })
            await Joi.validate(getQuery, schema)
        } catch (error) {
            console.log(error.message);
            // 保存log文档
            items = {
                code: 4001,
                msg: error.message,
                success: false,
            }
            req.log.info(items);
            res.send(items);
            return;
        }
        knex('tb_core_data_visual_map').update({
            name: name,
            data: data
        }).where({
            id: id
        }).then(resp => {
            console.log(resp);
            if (resp === 1) {
                items = {
                    code: 2000,
                    msg: "操作成功",
                    success: true
                }
                req.log.info(items);
                res.send(items)
            } else {
                items = {
                    code: 4001,
                    msg: "操作失败",
                    success: true
                }
                req.log.info(items);
                res.send(items)
            }
        })
    },

    async postRemove(req, res) {
        console.log("res._parsedUrl", req.query.ids);
        const {
            id,
            tid,
            sid
        } = req.query;
        let items = {};
        let getQuery = {
            id: id,
            tid: tid,
            sid: sid,
        };
        // 数据校验
        const schema = basicDataVerification(MAINSCHEMA.concat(0, 0, [{
            name: "id",
            type: "int"
        }, ]));
        try {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined)
                    throw {
                        message: key + " is undefined"
                    };
            })
            await Joi.validate(getQuery, schema)
        } catch (error) {
            console.log(error.message);
            // 保存log文档
            items = {
                code: 4001,
                msg: error.message,
                success: false,
            }
            req.log.info(items);
            res.send(items);
            return;
        }

        knex('tb_core_data_visual_map').delete().where({
            id: id
        }).then(resp => {
            console.log(resp);
            if (resp) {
                items = {
                    code: 2000,
                    msg: "操作成功",
                    success: true
                }
                req.log.info(items);
                res.send(items)
            } else {
                items = {
                    code: 4001,
                    msg: "操作失败",
                    success: true
                }
                req.log.info(items);
                res.send(items)
            }
        })
    },
    async getData(req, res) {
        //console.log("res._parsedUrl", req.query.id);
        let id = req.query.id;
        knex('tb_core_data_visual_map').select().where({
            id: id
        }).then(resp => {
            //对象字符串格式处理成数组
            let data = eval("(" + resp[0].data + ")");
            //console.log(data.features);
            if (resp) {
                res.send({
                    features: data.features,
                    type: data.type
                })
            } else {
                res.send({
                    code: 4001,
                    msg: "操作失败",
                    success: true
                })
            }
        })
    },
}