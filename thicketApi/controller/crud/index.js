const {
  constModifyingNamingRules,
  saveDay,
  basicDataVerification,
  basicData,
  joiValidateFun,
  strToObj,
} = require("../../lib/commentFunction");
const { getCountLength } = require("../../lib/commentDataBaseFunctin");
// const { addOneRow } = require("../../lib/commentDataBaseFunctin")
const CONFIG = require("../../config");
const codeBack = require("../../middleware/codeback");
const knex = require("knex")(CONFIG.mysql);
const Joi = require("joi");
let fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const e = require("express");

// 必须校验数组
function mustBeVerifiedObj(obj) {
  return {
    Tid: obj.Tid,
    Sid: obj.Sid,
    count: obj.count || false,
    sortby: obj.sortby || `Id`,
    order: obj.order || `desc`,
    limit: obj.limit || 0,
    offset: obj.offset || 0,
  };
}
module.exports = {
    async Search(req, res) {
        // console.log(req.params)//默认是空对象
        console.log(req.query);
        let tableName = "";
        const reqQuerystr = req.query;
        let reqQueryObj = {};
        let reqSearchQueryObj = {};
        let getObj = {};
        // 解析query
        if (reqQuerystr.query != "" && reqQuerystr.query != undefined ) {
            reqQueryObj = strToObj(reqQuerystr.query)
        }
        // 解析 searchquery (用于模糊查询)
        if (reqQuerystr.searchquery != "" && reqQuerystr.searchquery != undefined) {
            reqSearchQueryObj = strToObj(reqQuerystr.searchquery)
        }
        if (req.params.tableName != "") {
            tableName = req.params.tableName;
        }
        // 强转使用到的参数类型 用于后续操作
        getObj = {
            Tid: parseInt(reqQueryObj.Tid),
            Sid: parseInt(reqQueryObj.Sid),
            count: reqQuerystr.count === "true" ? true: false,
            sortby: reqQuerystr.sortby,
            order: reqQuerystr.order,
            limit: parseInt(reqQuerystr.limit),
            offset: parseInt(reqQuerystr.offset),
        }

        // 对数据进行校验
        joiValidateFun(mustBeVerifiedObj(getObj)).then(() => {
            // 获取长度
            if (getObj.count) {
                getCountLength(tableName,reqSearchQueryObj).then(counts => {
                    codeBack(req, res, 2000, `success`, {
                        count: counts
                    });
                })
            } else {
                knex(tableName)
                    .select()
                    .where(reqSearchQueryObj)
                    .limit(getObj.limit)
                    .offset((getObj.offset - 1) * getObj.limit)
                    .then(resp => {
                        console.log("__resp_", resp.length >= 0)
                        try {
                            if (resp.length >= 0) {
                                codeBack(req, res, 2000, `success`, resp)
                            } else {
                                
                                throw new Error(2004)
                            }
                        } catch (error) {
                            codeBack(req, res, error.message);
                        }

                    }).catch(err => {
                        codeBack(req, res, err.code, err.message);
                    })
            }

        }).catch(err => {
            codeBack(req, res, err.code, err.message);
        })
    },

    async Get(req, res) {

    },

   
  async Add(req, res) {
    let tableName = "";
    let insertData = req.body;
    insertData.Ctime = new Date().getTime();
    insertData.Mtime = new Date().getTime();
    if (req.params.tableName != "") {
      tableName = req.params.tableName;
    }
    console.log("__insertData__", insertData);
    knex(tableName)
      .insert(insertData)
      .then((resp) => {
        console.log("resp", resp);
        if (resp) {
          codeBack(req, res, 2000, `操作成功`, {
            id: resp[0],
          });
        }
      })
      .catch((err) => {
        console.log("__err__", err);
        codeBack(req, res, err.code, err.message);
      });
  },

  async Del(req, res) {
    let tableName = "";
    const Id = parseInt(req.params.Id);
    console.log("__Id__",Id,"____req.parmas___", req.params)
    if (req.params.tableName != "") {
      tableName = req.params.tableName;
    }
    joiValidateFun({
      Id: Id,
    })
      .then(() => {
        knex(tableName)
          .delete()
          .where({
            Id: Id,
          })
          .then((resq) => {
            if (resq) {
              if (resq) {
                codeBack(req, res, 2000, `操作成功`);
              } else {
                codeBack(req, res, 4001);
              }
            } else {
              codeBack(req, res, 4001);
            }
          });
      })
      .catch((err) => {
        codeback(req, res, err.code, err.message);
      });
  },

  async UpData(req, res) {
    const Id = req.params.Id;
    let insertData = req.body;
    let tableName = "";
    insertData.Mtime = new Date().getTime();
    if (req.params.tableName != "") {
      tableName = req.params.tableName;
    }
    knex(tableName)
      .update(insertData)
      .where({
        Id: Id,
      })
      .then((resq) => {
        if (resq === 1) {
          codeBack(req, res, 2000, `操作成功`);
        } else {
          codeBack(req, res, 4001);
        }
      });
  },
};
