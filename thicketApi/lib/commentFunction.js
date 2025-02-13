const Joi = require("joi");
const fs = require('fs');
//将字符串转小写，有下划线的去除下划线，并将下划线后的首字母转大写（驼峰）
function toUp(str) {
    let str2 = str.toLowerCase(); //先全部转小写
    let newStr = '';
    let arr = str2.split('_'); //先用字符串分割成数组
    arr.forEach((item, index) => {
        if (index > 0) {
            return newStr += item.replace(item[0], item[0].toUpperCase());
        } else {
            return newStr += item;
        }
    })
    return newStr;
}
// 数据格式校验 参数判定
function basicDatas() {
    return Joi.object().options({
        convert: false,
        allowUnknown: true
    }).keys({
        current: Joi.number().integer().min(0).max(10000).error(new Error("current must be an integer greater than 0 and less than 100 ")),
        size: Joi.number().integer().min(0).max(10000).error(new Error("size must be an integer greater than 0 and less than 100 ")),
        category: Joi.number().integer().min(0).max(10000).error(new Error("category must be an integer greater than 0 and less than 100 ")),
        tid: Joi.number().integer().min(0).max(10000).error(new Error("tid must be an integer greater than 0 and less than 100 ")),
        sid: Joi.number().integer().min(0).max(10000).error(new Error("sid must be an integer greater than 0 and less than 100 ")),
        is_del: Joi.number().integer().min(0).max(1).error(new Error("is_del must be an integer greater than 0 and 1 ")),
        background_url: Joi.string().allow('').error(new Error("background_url must be a String")),
        password: Joi.string().allow('').error(new Error("password must be a String")),
        title: Joi.string().allow('').error(new Error("title must be a String")),
        detail: Joi.string().allow('').error(new Error("detail must be a String")),
        component: Joi.string().allow('').error(new Error("component must be a String")),
    })
}

/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path 
 */
let emptyDir = function (path) {
    const files = fs.readdirSync(path);
    files.forEach(file => {
        const filePath = `${path}/${file}`;
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            emptyDir(filePath);
        } else {
            fs.unlinkSync(filePath);
            console.log(`删除${file}文件成功`);
        }
    });
}


/**
 * 删除指定路径下的所有空文件夹
 * @param {*} path 
 */
let rmEmptyDir = function (path, level = 0) {
    const files = fs.readdirSync(path);
    if (files.length > 0) {
        let tempFile = 0;
        files.forEach(file => {
            tempFile++;
            rmEmptyDir(`${path}/${file}`, 1);
            console.log(`删除${file}文件夹成功`)
        });
        if (tempFile === files.length && level !== 0) {
            fs.rmdirSync(path);
            console.log(`删除${file}文件夹成功`)
        }
    } else {
        level !== 0 && fs.rmdirSync(path);
    }
}



module.exports = {
    //下划线改驼峰命名
    //fieldList-对象 { a_b:"1",b_c:"2"}
    constModifyingNamingRules(fieldList) {
        // console.log("__fieldList__", fieldList)
        if (fieldList) {
            fieldList.map(res => {
                for (let item in res) {
                    let Nowitem = toUp(item);
                    res[Nowitem] = res[item];
                    if (Nowitem != item) {
                        delete res[item];
                    }
                }
            })
            return fieldList;
        }

    },
    // 获得当天 日期
    saveDay() {
        let mydata = new Date();
        return mydata.getFullYear().toString() + (mydata.getMonth() + 1).toString() + mydata.getDate().toString();
    },

    // 基础数据格式校验 输入[{name:Id,type:number}]
    basicDataVerification(data) {
        let schema = {};
        data.map(ele => {
            if (ele.type === "int") {
                schema[ele.name] = Joi.number().integer().min(0).max(10000).error(new Error(ele.name + " must be an integer greater than 0 and less than 100 "))
            } else if (ele.type === "date") {
                schema[ele.name] = Joi.number().error(new Error(ele.name + " must be a Number"))
            } else if (ele.type === "number") {
                schema[ele.name] = Joi.number().min(0).max(10000).error(new Error(ele.name + " must be a Number"))
            } else if (ele.type === "string")
                schema[ele.name] = Joi.string().allow('').error(new Error(ele.name + " must be a String"))
        })
        return schema;
    },
    joiValidateFun(getQuery) {
        return new Promise((resolve, reject) => {
            Object.keys(getQuery).map(key => {
                if (getQuery[key] === undefined) {
                    reject({
                        code: 4012,
                        message: `${key} is undefined`
                    });
                }
            })
            Joi.validate(getQuery, basicDatas(), (err, value) => {
                if (err) {
                    if (err.message) return reject({
                        code: 4012,
                        message: err.message,
                    });
                    else return resolve(null);
                } else {
                    return resolve(null);
                }
            })
        })
    },

    // 数据格式校验 参数判定
    basicData() {
        return Joi.object().options({
            convert: false,
            allowUnknown: true
        }).keys({
            current: Joi.number().integer().min(0).max(10000).error(new Error("current must be an integer greater than 0 and less than 100 ")),
            size: Joi.number().integer().min(0).max(10000).error(new Error("size must be an integer greater than 0 and less than 100 ")),
            category: Joi.number().integer().min(0).max(10000).error(new Error("category must be an integer greater than 0 and less than 100 ")),
            tid: Joi.number().integer().min(0).max(10000).error(new Error("tid must be an integer greater than 0 and less than 100 ")),
            sid: Joi.number().integer().min(0).max(10000).error(new Error("sid must be an integer greater than 0 and less than 100 ")),
            is_del: Joi.number().integer().min(0).max(1).error(new Error("is_del must be an integer greater than 0 and 1 ")),
            background_url: Joi.string().allow('').error(new Error("background_url must be a String")),
            password: Joi.string().allow('').error(new Error("password must be a String")),
            title: Joi.string().allow('').error(new Error("title must be a String")),
            detail: Joi.string().allow('').error(new Error("detail must be a String")),
            component: Joi.string().allow('').error(new Error("component must be a String")),
        })
    },

    // 遍历对象---value值为undefined 返回false
    traverseObjectValueUndefind(obj) {},

    //生成指定长度的唯一ID
    GenNonDuplicateID(randomLength = 8) {
        return Number(
            Math.random()
            .toString()
            .substr(3, randomLength) + Date.now()
        ).toString(36);
    },

    // 处理 `a:1,b:2 字符串成 obj`
    strToObj(str){
        let arr = str.split(",");
        let obj = {};

        for(let i = 0; i< arr.length ; i++){
            let arr2 = arr[i].split(":")
            let key = arr2[0];
            let val = arr2[1];
            
            obj[key] = val;
        }
        return obj
    },


    emptyDir: emptyDir,
    rmEmptyDir: rmEmptyDir,

}