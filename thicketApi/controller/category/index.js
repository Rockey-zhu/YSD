const CONFIG = require("../../config");
const { constModifyingNamingRules, basicDataVerification } = require("../../lib/commentFunction");
const knex = require('knex')(CONFIG.mysql);
const Joi = require("joi");
const { addOneRow, selectOneTabAll } = require("../../lib/commentDataBaseFunctin")

const MAINSCHEMA = [
    { name: "tid", type: "int" },
    { name: "sid", type: "int" },
]

module.exports = {
    // 获得数据列表
    async getList(req, res) {
        const { current, size, tid, sid, } = req.query;
        console.log(`---- ${new Date()},size:${size},current${current},tid${tid},sid${sid} ----`);
        let items = {};
        let data;
        let getQuery = {
            current: current,
            size: size,
            tid: tid,
            sid: sid,
        };
        // 数据校验
        const schema = basicDataVerification(MAINSCHEMA.concat(0, 0, [
            { name: "current", type: "int" },
            { name: "size", type: "int" },
        ]));
        try {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined)
                    throw { message: key + " is undefined" };
            })
            await Joi.validate(getQuery, schema)
        } catch (error) {
            console.log("_ errmessage__", error.message);
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
        // 查表
        knex('tb_core_data_visual_category').select().where({
            tid: tid,
            sid: sid,
            is_del: 0,
        }).then(resp => {
            total = resp.length;
            data = resp.slice((current - 1) * 10, current * size);
        }).then(() => {
            if (data.length > 0) {
                items = {
                    code: 2000,
                    data: data,
                    msg: "操作成功",
                    success: true
                }
                req.log.info(items);
                console.log("__send success__")
                res.send(items)
            } else {
                req.log.info("error")
                res.send("error");
            }
        })
    },
    //获取Copy数据---建议条数10
    async getCopyList(req, res) {
        //获取url值
        const { current, size, category, limit } = req.query;
        console.log(`${new Date()}-category:${category},size:${size},current${current},limit:${limit}`);
        let data;
        let total;
        knex("tb_core_data_visual")
            .select()
            .where({ category: category,is_del:0 })
            .limit(limit)
            .then((resp) => {
                total = resp.length;
                data = resp;
                constModifyingNamingRules(data); //下划线命名转驼峰
            })
            .then(() => {
                if (data.length >= 0) {
                    items = {
                        code: 2000,
                        data: data,
                        // data: {
                        //     countId: "",
                        //     current: Number(current),
                        //     hitCount: false,
                        //     maxLimit: -1,
                        //     optimizeCountSql: true,
                        //     orders: [],
                        //     pages: Math.ceil(total / size),
                        //     records: data,
                        //     searchCount: true,
                        //     size: Number(size),
                        //     total: total,
                        // },
                        msg: "操作成功",
                        success: true,
                    };
                    res.send(items);
                } else {
                    res.send("error");
                }
            });
    },
    // 获得单条数据
    async getDetail(req, res) {
        const { id, tid, sid } = req.query;
        let items = {};
        let data;
        let getQuery = {
            id: id,
            tid: tid,
            sid: sid,
        };
        // 数据校验
        const schema = basicDataVerification(MAINSCHEMA.concat(0, 0, [
            { name: "id", type: "int" },
        ]));
        try {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined)
                    throw { message: key + " is undefined" };
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
        // 查表
        knex('tb_core_data_visual_category').select().where({
            id: id,
            tid: tid,
            sid: sid,
            is_del: 0,
        }).then(resp => {
            data = resp;
        }).then(() => {
            if (data.length > 0) {
                items = {
                    code: 2000,
                    data: data,
                    msg: "操作成功",
                    success: true
                }
                res.send(items)
            } else {
                res.send("error");
            }
        })
    },
    // 新增
    async postSave(req, res) {
        //1.拿到前端传递数据
        let { categoryKey, categoryValue, tid, sid, note, tags, score, createer_name, createer, } = req.body;
        let tableName = "tb_core_data_visual_category";
        let items = {};
        let getQuery = {
            categoryKey: categoryKey,
            categoryValue: categoryValue,
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
        console.log("_getQuery_", getQuery);
        // 数据校验
        const schema = basicDataVerification(MAINSCHEMA.concat(0, 0, [
            { name: "id", type: "int" },
            { name: "categoryKey", type: "string" },
            { name: "categoryValue", type: "int" },
            { name: "note", type: "string" },
            { name: "tags", type: "string" },
            { name: "score", type: "int" },
            { name: "is_sync", type: "int" },
            { name: "is_system", type: "int" },
            { name: "createer_name", type: "string" },
            { name: "createer", type: "int" },
            { name: "ctime", type: "date" },
            { name: "modifier_name", type: "string" },
            { name: "modifier", type: "int" },
            { name: "mtime", type: "date" },
            { name: "is_del", type: "int" },
        ]));
        try {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined)
                    throw { message: key + " is undefined" };
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
        // sql
        selectOneTabAll(tableName, { categoryValue: categoryValue }).then(resq => {
            console.log("__res_one_", resq)
            if (resq.length === 0) {
                addOneRow(tableName, getQuery).then(resp => {
                    console.log("resp_category_add:", resp);
                    if (resp) {
                        items = {
                            code: 2000,
                            msg: "操作成功",
                            success: true
                        }
                        res.send(items)
                    } else {
                        items = {
                            code: 4001,
                            msg: "操作失败",
                            success: true
                        }
                        res.send(items)
                    }
                })
            } else {
                items = {
                    code: 4402,
                    msg: "categoryValue重复",
                    success: false,
                }
                req.log.info(items);
                res.send(items)
            }
        })

    },
    // 更新
    async postUpdate(req, res) {
        let { categoryKey, categoryValue, id, tid, sid, modifier_name, score } = req.body;
        let items = {};
        let getQuery = {
            categoryKey: categoryKey,
            categoryValue: categoryValue,
            id: id,
            tid: tid,
            sid: sid,
            modifier_name: modifier_name,
            score: score
        };
        console.log(req.body)
            // 数据校验
        const schema = basicDataVerification(MAINSCHEMA.concat(0, 0, [
            { name: "id", type: "int" },
            { name: "categoryKey", type: "string" },
            { name: "categoryValue", type: "int" },
            { name: "modifier_name", type: "string" },
            { name: "score", type: "int" }
        ]));
        try {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined)
                    throw { message: key + " is undefined" };
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
        // sql
        // 判断categoryValue 是否重复
        try {
            await knex('tb_core_data_visual_category').update({
                categoryKey: categoryKey,
                categoryValue: categoryValue,
                modifier_name: modifier_name,
                mtime: new Date().getTime(),
                score: score,
            }).where({ id: id }).then(resp => {
                if (resp === 1) {
                    items = {
                        code: 2000,
                        msg: "success",
                        success: true
                    }
                    req.log.info(items);
                    res.send(items);
                } else {
                    items = {
                        code: 4401,
                        msg: "id can not find",
                        success: true
                    }
                    req.log.info(items);
                    res.send(items);
                }
            })
        } catch (error) {
            items = {
                code: 4001,
                msg: error.sqlMessage,
                success: false,
            }
            req.log.info(items);
            res.send(items);
        }

    },
    //删除
    async postRemove(req, res) {
        console.log("res._parsedUrl", req.query.ids);
        const ids = req.query.ids;

        knex('tb_core_data_visual_category').delete().where({ id: ids }).then(resp => {
            console.log(resp);
            if (resp) {
                res.send({
                    code: 2000,
                    msg: "操作成功",
                    success: true
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