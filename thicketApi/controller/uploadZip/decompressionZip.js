const multer = require("multer"); //导入multer中间件
const fs = require('fs');
const archiver = require('archiver');
var path = require('path');
const request = require("request");

const {
    GenNonDuplicateID,
    joiValidateFun,
    emptyDir,
    rmEmptyDir,
    saveDay,
} = require("../../lib/commentFunction");
const CONFIG = require("../../config");
const codeBack = require("../../middleware/codeback");
const {
    Console
} = require('console');
const object = require('joi/lib/types/object');
const knex = require("knex")(CONFIG.mysql);
const compressing = require("compressing");

function copyImg(readPath, writePath) {
    // let imgName = imgFile.split('/')[imgFile.split('/').length - 1];
    let sourceFile = path.join(`${readPath}`);
    let destPath = path.join(`${writePath}`);
    let readStream = fs.createReadStream(sourceFile);
    let writeStream = fs.createWriteStream(destPath);
    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
        writeStream.close();
        console.log(`copy写入成功~`);

    });

    writeStream.on("error", err => {
        writeStream.close();
        console.log(`copy写入失败~`, err);

    });
    readStream.on("finish", () => {
        console.log(`copy读取成功~`);
    })
    readStream.on("error", err => {
        writeStream.close();
        console.log(`copy读取失败~`, err);
    })
}
module.exports = {
    // 创建当天日期的文件夹 为存储压缩包作准备
    buildExists(req, res, next) {
        //判断是否有文件夹，有true,无false
        fs.exists(CONFIG.upload + saveDay(), function (exists) {
            if (exists) {
                console.log(`have floaders:${saveDay()}`);
            } else {
                fs.mkdir(CONFIG.upload + saveDay(), function (err) {
                    if (err) {
                        console.log(`err:${error},${new Date()}`);
                    }
                    console.log("zip-success:", new Date());
                });
            }
            next();
        });
    },
    //upload: upload, 解压&&解析压缩包文件
    decompressionZip(req, res, next) {
        let fileName = req.file.path.slice(0, -4);
        let bgPath = "";
        let coverName = "";
        let today = saveDay();
        let {category} = req.query;
        let tid = 0;
        let sid = 0;
        //1.解压缩文件夹
        compressing.zip.uncompress(`${req.file.path}`, `${fileName}`)
            .then(() => {
                console.log('success');
                //2.将各路径图片复制至指定文件夹内的当日文件夹中
                fs.readFile(`${fileName}/imgPathJson.txt`, (err, str) => {
                    if (err) {
                        console.log("读取imgPathJson失败----", err);
                        codeBack(req, res, 4012, err.message);
                    } else {
                        let imgPathArr = JSON.parse(str.toString());
                        imgPathArr.map((item) => {
                            // border cover source 有日期
                            // bg border 无日期 ----> 修改成有日期
                            // console.log("_item_", item);
                            let itemKind = '';
                            if (item.kind === 'cover') {
                                coverName = item.imgName;
                                itemKind = CONFIG.cover;
                            } else if (item.kind === 'source') {
                                itemKind = CONFIG.source;
                            } else if (item.kind === 'border') {
                                itemKind = CONFIG.border;
                            } else if (item.kind === `bg`) {
                                itemKind = CONFIG.bg
                            } else if (item.kind === `banner`) {
                                itemKind = CONFIG.banner
                            }
                            fs.mkdir(`${__dirname}${itemKind}/${today}`, {
                                recursive: true
                            }, () => {
                                copyImg(`${fileName}/${item.value}`, `${__dirname}${itemKind}/${today}/${item.imgName}`);
                            })
                        })
                    }

                })

                // 3.读取 visual.txt 文件  将数据写入数据库 注意 bgUrl 需要替换成当前bgurl路径 
                //* 需要从前端获取的字段有 tid  sid  category 
                fs.readFile(`${fileName}/visual.txt`, (err, str) => {
                    let visualTxt = JSON.parse(str.toString());
                    // cover
                    visualTxt.backgroundUrl = `/upload/keydata/cover/${today}/${coverName}`;

                    //3.读取 visualConfig.txt 文件
                    fs.readFile(`${fileName}/visualConfig.txt`, (err, strConfig) => {
                        let visualConfigTxt = JSON.parse(strConfig.toString());
                        let visConfigComp = JSON.parse(visualConfigTxt.component);
                        let visConfigDetail = JSON.parse(visualConfigTxt.detail);

                        //detail
                        visConfigDetail.backgroundImage = `/upload/keydata/${today}/${bgPath}`;
                        // component
                        for (let i = 0; i <= visConfigComp.length - 1; i++) {
                            if (visConfigComp[i].title === '图片框' || visConfigComp[i].title === '图片' || visConfigComp[i].title === `轮播图`) {
                                if (typeof visConfigComp[i].data === "string") {
                                    let visConArr = visConfigComp[i].data.split(`/`);
                                    visConArr[3] = today;
                                    visConfigComp[i].data = visConArr.join("/");
                                }
                            }
                        }

                        let postReqBody = {
                            background_url: visualTxt.backgroundUrl,
                            password: ``,
                            title: visualTxt.title,
                            detail: JSON.stringify(visConfigDetail),
                            component: JSON.stringify(visConfigComp),
                            tid: parseInt(tid),
                            sid: parseInt(sid),
                            category: parseInt(category),
                        }
                        joiValidateFun(postReqBody).then(() => {
                            knex("tb_core_data_visual")
                                .insert({
                                    background_url: postReqBody.background_url,
                                    password: postReqBody.password,
                                    category: postReqBody.category,
                                    title: postReqBody.title,
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
                                                detail: postReqBody.detail,
                                                component: postReqBody.component
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
                    })

                })
            })
            .catch(err => {
                codeback(req, res, 4012, err.message);
            })

    }
}