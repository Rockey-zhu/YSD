const CONFIG = require("../config")
const knex = require('knex')(CONFIG.mysql);

module.exports = {
    //单表新增数据 table:表名 string; insertData数据 obj
    addOneRow(table, insertData) {
        return knex(table).insert(insertData).then((res) => {
            return res;
        })
    },

    //查询单表全部数据 table:表名
    selectOneTabAll(table,selectWhere) {
        return knex(table).select().where(selectWhere).then((res)=>{
            return res;
        })
    },

    //编辑单条数据  table:表名,data数据（必须包含id）
    updataOneRow(table, data) {

    },

    //删除单条数据  table:表名 , id
    deleteOneRow(table, id) {

    },

    // 获取总长度
    async getCountLength(table='',whereObj={}){
        let count = 0;
        await knex(table).count(`id as nums` ).where(whereObj).then(resp=>{
            let dataString = JSON.stringify(resp);
            let data = JSON.parse(dataString)[0];
            count = data.nums;
        })
        console.log("__count__",count);
        return count;
    }
}