const {
    constModifyingNamingRules,
    saveDay,
    basicDataVerification,
    basicData,
    joiValidateFun
} = require("../../lib/commentFunction");
const {
    getCountLength
} = require("../../lib/commentDataBaseFunctin")
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


async function downloadFloader(path, fileName) {
    fs.exists(path + fileName, function (exists) {
        if (exists) {
            console.log("true", path, fileName);
        } else {
            fs.mkdir(path + fileName, function (err) {
                if (err) {
                    console.log(err);
                    resdata = false;
                }
                console.log("true", path, fileName);
            });
        }
    });
}
module.exports = {
    /*
      如何获取值 get请求方法   获取req的query方法取值
                 post请求方法  获取req的body方法取值
      */

    //获取列表
    async getList(req, res) {
        //获取url值
        const {
            current,
            size,
            category,
            tid,
            sid,
        } = req.query;
        console.log(`${new Date()}-category:${category},size:${size},current${current}`);
        let data;
        let total;
        let items;
        let getQuery = {
            current: parseInt(current),
            size: parseInt(size),
            category: parseInt(category),
            tid: parseInt(tid),
            sid: parseInt(sid),
        };
        joiValidateFun(getQuery).then(() => {
            // 查表
            knex("tb_core_data_visual")
                .select()
                .where({
                    category: category,
                    is_del: 0,
                    tid: parseInt(tid),
                    sid: parseInt(sid),
                })
                .then((resp) => {
                    total = resp.length;
                    data = resp.slice((current - 1) * 10, current * size);
                    constModifyingNamingRules(data); //下划线命名转驼峰
                })
                .then(() => {
                    // return  Promise.reject(3001);
                    try {
                        if (data.length >= 0) {
                            if (data.length != 0) {
                                codeBack(req, res, 2000, "操作成功", {
                                    countId: "",
                                    current: Number(current),
                                    hitCount: false,
                                    maxLimit: -1,
                                    optimizeCountSql: true,
                                    orders: [],
                                    pages: Math.ceil(total / size),
                                    records: data,
                                    searchCount: true,
                                    size: Number(size),
                                    total: total,
                                })
                            } else {
                                throw new Error(2004)
                            }
                        } else {
                            throw new Error(4001)
                        }
                    } catch (error) {
                        codeBack(req, res, error.message);
                    }
                });
        }).catch(err => {
            codeBack(req, res, err.code, err.message);
        });
    },

    async getDetail(req, res) {
        const {
            id,
            tid,
            sid,
            is_del
        } = req.query;
        let data = {
            config: {},
            visual: {},
        };
        let category = 0;
        let items;
        let getQuery = {
            id: parseInt(id),
            tid: parseInt(tid),
            sid: parseInt(sid),
            is_del: parseInt(is_del),
        };

        joiValidateFun(getQuery).then(() => {
            knex("tb_core_data_visual").select()
                .where({
                    id: id,
                    is_del: 0,
                    sid: sid,
                    tid: tid,
                })
                .then((resq) => {
                    try {
                        if (resq.length > 0) {
                            category = resq[0].category;
                            knex("tb_core_data_visual_config")
                                .select()
                                .where({
                                    visual_id: id,
                                    tid: tid,
                                    sid: sid,
                                    is_del: is_del,
                                })
                                .then((resp) => {
                                    data = {
                                        config: {
                                            component: resp[0].component,
                                            detail: resp[0].detail,
                                            id: resp[0].id,
                                            visualId: resp[0].visual_id,
                                        },
                                        visual: {
                                            category: category,
                                            createDept: -1,
                                            createTime: 1,
                                        },
                                        msg: resp[0].msg,
                                        success: resp[0].success,
                                    };
                                })
                                .then(() => {

                                    if (data) {
                                        codeBack(req, res, 2000, "操作成功", data);
                                    } else {
                                        throw new Error(4001)
                                    }
                                });
                        } else {
                            throw new Error(2004)
                        }
                    } catch (error) {
                        codeBack(req, res, error.message)
                    }
                })
        }).catch(err => {
            codeBack(req, res, err.code, err.message);
        })
    },

    async postSave(req, res) {
        let {
            background_url,
            category,
            password,
            title,
            tid,
            sid
        } = req.body.visual;
        let {
            detail,
            component
        } = req.body.config;

        let items;
        let postReqBody = {
            background_url: background_url,
            password: password,
            title: title,
            detail: detail,
            component: component,
            tid: parseInt(tid),
            sid: parseInt(sid),
        }

        joiValidateFun(postReqBody).then(() => {
            knex("tb_core_data_visual")
                .insert({
                    background_url: background_url,
                    password: password,
                    category: category,
                    title: title,
                    status: 1,
                    is_del: 0,
                    create_user: -1,
                    create_dept: -1,
                    update_user: -1,
                    update_time: new Date(),
                    create_time: new Date(),
                })
                .then((resp) => {
                    if (resp) {
                        //操作config表，为其添加数据
                        knex("tb_core_data_visual_config")
                            .insert({
                                visual_id: resp,
                                detail: detail,
                                component: component
                            })
                            .then(() => {
                                codeBack(req, res, 2000, `操作成功`, {
                                    id: resp[0]
                                })
                            });
                    } else {
                        codeBack(req, res, 4001);
                    }
                });
        }).catch(err => {
            codeBack(req, res, err.code, err.message);
        })
    },

    async postUpdate(req, res) {
        let {
            category,
            password,
            id,
            title,
            status,
            is_del,
            backgroundUrl,
            create_user,
            create_dept,
            update_user,
            tid,
            sid,
        } = req.body.visual;
        let visualId = 0;
        let detail = "";
        let component = "";
        // 
        if (req.body.config) {
            visualId = req.body.config.visualId;
            detail = req.body.config.detail;
            component = req.body.config.component;
        }
        let postReqBody = {
            category: parseInt(category),
            password: password,
            id: parseInt(id),
            title: title,
            backgroundUrl: backgroundUrl,
            tid: parseInt(tid),
            sid: parseInt(sid),
        }
        if (visualId != 0) {
            postReqBody.visualId = visualId;
            postReqBody.detail = detail;
            postReqBody.component = component;

        }
        console.log("___postReqBody__", postReqBody);
        joiValidateFun(postReqBody).then(() => {
            knex("tb_core_data_visual")
                .update({
                    background_url: backgroundUrl,
                    category: category,
                    password: password,
                    title: title,
                    update_time: new Date(),
                    create_time: new Date(),
                })
                .where({
                    id: id
                }).then(() => {
                    // 内容保存
                    if (visualId != 0) {
                        knex("tb_core_data_visual_config")
                            .update({
                                detail: detail,
                                component: component
                            })
                            .where({
                                visual_id: visualId
                            })
                            .then((resp) => {
                                if (resp === 1) {
                                    codeBack(req, res, 2000, `操作成功`)
                                } else {
                                    codeBack(req, res, 4001)
                                }
                            });
                    } else {
                        // 外部保存 修改名称 不修改内容
                        codeBack(req, res, 2000, `操作成功`)
                    }
                })
        }).catch(err => {
            codeback(req, res, err.code, err.message);
        })
        //console.log("req.body.config------", req.body.config);


    },

    async postRemove(req, res) {
        console.log("res._parsedUrl", req.query.ids);
        const ids = parseInt(req.query.ids);
        joiValidateFun({
            id: ids,
        }).then(() => {
            knex("tb_core_data_visual")
                .delete()
                .where({
                    id: ids
                })
                .then((resp) => {
                    if (resp) {
                        knex("tb_core_data_visual_config")
                            .delete()
                            .where({
                                visual_id: ids
                            })
                            .then((resq) => {
                                if (resq) {
                                    codeBack(req, res, 2000, `操作成功`);
                                } else {
                                    codeBack(req, res, 4001);
                                }
                            });
                    } else {
                        codeBack(req, res, 4001);
                    }
                });
        }).catch((err) => {
            codeback(req, res, err.code, err.message);
        })

    },
    async postCopy(req, res) {
        const id = parseInt(req.query.id);
        let data;
        joiValidateFun({
            id: id
        }).then(() => {
            knex("tb_core_data_visual")
                .select()
                .where({
                    id: id
                })
                .then((resp) => {
                    //console.log(resp[0])
                    data = resp[0];
                })
                .then(() => {
                    //tb_core_data_visual
                    knex("tb_core_data_visual")
                        .insert({
                            title: data.title + "_copy",
                            background_url: data.background_url,
                            category: data.category,
                            password: data.password,
                            create_time: data.create_time,
                            status: data.status,
                            is_del: data.is_del,
                            update_time: data.update_time,
                            create_user: data.create_user,
                            update_user: data.update_user,
                            create_dept: data.create_dept,
                        })
                        .then((resCopyId) => {
                            //搜索原来的config里面的数据
                            knex("tb_core_data_visual_config")
                                .select()
                                .where({
                                    visual_id: id
                                })
                                .then((resdata) => {
                                    //为复制的模板插入新的config数据
                                    // console.log("````````````data`````````", resdata)
                                    knex("tb_core_data_visual_config")
                                        .insert({
                                            visual_id: resCopyId,
                                            detail: resdata[0].detail,
                                            component: resdata[0].component,
                                        })
                                        .then(() => {
                                            if (resdata) {
                                                codeback(req, res, 2000, `success`);
                                            } else {
                                                codeback(req, res, 4001);
                                            }
                                        }).catch(err => {
                                            codeback(req, res, err.code, err.message);
                                        })
                                }).catch(err => {
                                    codeback(req, res, err.code, err.message);
                                })
                        }).catch(err => {
                            codeback(req, res, err.code, err.message);
                        })
                });
        }).catch(err => {
            codeback(req, res, err.code, err.message);
        })

    },

    //--cover背景图上传------------------
    //生成背景图
    async buildExists(req, res, next) {

        //判断是否有文件夹，有true,无false
        fs.exists(CONFIG.floadersPath + saveDay(), function (exists) {
            if (exists) {
                console.log(`have floaders:${saveDay()}`);
            } else {
                fs.mkdir(CONFIG.floadersPath + saveDay(), function (err) {
                    if (err) {
                        console.log(`err:${error},${new Date()}`);
                    }
                    console.log("cover-success:", new Date());
                });
            }
            next();
        });
    },
    //上传的封面图片
    async postPutFile(req, res) {
        /*
            1.在uploads下生成现在日期的文件夹
            2.判断是否有该文件夹，没有创建 , 有在该文件夹下生成封面图片
            */
        const file = req.file;
        file.url = `/upload/keydata/cover/${saveDay()}/${file.filename}`;
        res.send({
            data: file,
            code: 2000,
            msg: "操作成功",
            success: true,
        });
    },
    //--其他图片上传--------------
    async postPutFileImg(req, res) {
        let resQueryType = req.query.type;
        let filePath = "";
        //1.bg ;2.banner; 3.border; 4.source;
        if (resQueryType == 1) {
            filePath = CONFIG.fileBg;
        } else if (resQueryType == 2) {
            filePath = CONFIG.fileBanner;
        } else if (resQueryType == 3) {
            filePath = CONFIG.fileBorder;
        } else if (resQueryType == 4) {
            filePath = CONFIG.fileSource;
        }
        const file = req.file;
        //file.url = `http://localhost:3002/uploads/${saveDay}/${file.filename}`
        file.url = `${filePath}${file.filename}`;
        console.log("___file.url___", file.url, "--filePath-", filePath)
        knex("tb_core_data_image").insert({
            url: file.url,
            type: resQueryType
        }).then(resp => {
            console.log("__resp__", resp)
            if (resp) {
                res.send({
                    data: file.url,
                    code: 2000,
                    msg: "操作成功",
                    success: true,
                });
            } else {
                res.send({
                    data: file.url,
                    code: 4001,
                    msg: "operation fail",
                    success: true,
                });
            }

        })

    },
    //获取上传的图片 get type区分类型
    getTypeImg(req, res) {
        //获取url值
        const {
            current,
            size,
            type,
            count
        } = req.query;
        // console.log("----获取图片读取信息---", current, size, type);
        let data;
        let total = 0;
        let getQuery = {
            current: parseInt(current),
            size: parseInt(size),
            type: parseInt(type),
            // tid: parseInt(tid),
            // sid: parseInt(sid),
        };
        joiValidateFun(getQuery).then(() => {
            if (count === `true`) {
                getCountLength('tb_core_data_image', {
                    type: type
                }).then(counts => {
                    codeBack(req, res, 2000, `success`, {
                        count: counts
                    });
                })
            } else {
                knex('tb_core_data_image').select().limit(size).offset((current - 1) * size).where({
                    type: type
                }).then(resp => {
                    data = resp;
                    total = resp.length;

                }).then(() => {
                    if (data.length > 0) {
                        codeBack(req, res, 2000, `success`, data);
                        // items = 
                        // res.send(items)
                    } else {
                        throw new Error(4001)
                    }
                }).catch(err => {
                    codeBack(req, res, err.code, err.message);
                });
            }
        })

    },

    deleteTypeImg(req, res) {
        const {
            id
        } = req.query;
        console.log("___tb_core_data_image delete:", new Date(), ",id:", id);
        knex("tb_core_data_image")
            .delete()
            .where({
                id: id
            })
            .then((resp) => {
                if (resp) {
                    res.send({
                        code: 2000,
                        msg: "操作成功",
                        success: true,
                    });
                } else {
                    res.send({
                        code: 4001,
                        msg: "操作失败",
                        success: true,
                    });
                }
            });
    },
    //--未阅读使用的函数-----------
    downloadFloaders(req, res, next) {
        //判断是否有文件夹，有true,无false
        fs.exists("./../public/exportdata/" + saveDay(), function (exists) {
            let uuidv4Name = uuidv4();
            if (exists) {
                //日期文件夹存在
                //生成uuid文件夹
                downloadFloader("./../public/exportdata/" + saveDay() + "/", uuidv4Name);
                setTimeout(() => {
                    downloadFloader(
                        "./../public/exportdata/" + saveDay() + "/" + uuidv4Name + "/",
                        "banner"
                    );
                    downloadFloader(
                        "./../public/exportdata/" + saveDay() + "/" + uuidv4Name + "/",
                        "bg"
                    );
                    downloadFloader(
                        "./../public/exportdata/" + saveDay() + "/" + uuidv4Name + "/",
                        "border"
                    );
                    downloadFloader(
                        "./../public/exportdata/" + saveDay() + "/" + uuidv4Name + "/",
                        "source"
                    );
                }, 1000);
            } else {
                //日期文件夹不存在，创造该文件夹
                fs.mkdir("./../public/exportdata/" + saveDay(), function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("success");
                    //生成uuid文件夹
                    downloadFloader(
                        "./../public/exportdata/" + saveDay() + "/",
                        uuidv4Name
                    );
                    setTimeout(() => {
                        downloadFloader(
                            "./../public/exportdata/" + saveDay() + "/" + uuidv4Name + "/",
                            "banner"
                        );
                        downloadFloader(
                            "./../public/exportdata/" + saveDay() + "/" + uuidv4Name + "/",
                            "bg"
                        );
                        downloadFloader(
                            "./../public/exportdata/" + saveDay() + "/" + uuidv4Name + "/",
                            "border"
                        );
                        downloadFloader(
                            "./../public/exportdata/" + saveDay() + "/" + uuidv4Name + "/",
                            "source"
                        );
                    }, 1000);
                });
            }
            next();
        });
    },
};