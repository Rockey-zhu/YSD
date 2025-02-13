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

//配置要打包的路径列表,需要打包某些目录，添加到数组里面即可 相对路径
function generateFolderDirectory(filStream) {
    let statu = 0; //判断需要request 的数量 ，为了等待request完成
    let imgPathJsonArr = []; //存储 图片路径的img,用于解析

    // 解析文件流获取大屏中使用到的文件
    // 生成文件夹将文件
    // 将文件存储至文件夹内
    return new Promise((reslove) => {
        // detail -> bg
        function copyImg(imgFile, kindName) {
            if (imgFile === undefined) {
                --statu;
                console.log(`imgFile为空`, statu);
                if(statu == 0)
                    reslove();
                return 0
            } else {
                let imgName = imgFile.split('/')[imgFile.split('/').length - 1];
                let sourceFile = path.join(`${__dirname}/../../../../html/${imgFile}`);
                let destPath = path.join(__dirname, `/stream/${kindName}/`, imgName);
                let readStream = fs.createReadStream(sourceFile);
                let writeStream = fs.createWriteStream(destPath);
                readStream.pipe(writeStream);
                writeStream.on("finish", () => {
                    --statu;
                    imgPathJsonArr.push({
                        kind: kindName,
                        value: `/${kindName}/${imgName}`,
                        imgName: imgName,
                    });
                    console.log(`copy写入成功~`, statu);
                    if (statu === 0) {
                        // const imgPathJson  = path.join(__dirname, `/stream/`, "imgPathJson.json");
                        // fs.writeFile(`${__dirname}/stream/imgPathJson.json`, JSON.stringify(imgPathJsonArr),(err)=>{
                        //     if(err){}else{
                        //         reslove();
                        //     }
                        // });
                        let imgPathJson = fs.createWriteStream(__dirname + "/stream/imgPathJson.txt");
                        imgPathJson.write(JSON.stringify(imgPathJsonArr), () => {
                            imgPathJson.close();
                            reslove();
                        });
                    }
                });

                writeStream.on("error", err => {
                    --statu;
                    console.log(`copy写入失败~`, statu, err);
                    if (statu === 0) {
                        let imgPathJson = fs.createWriteStream(__dirname + "/stream/imgPathJson.txt");
                        imgPathJson.write(JSON.stringify(imgPathJsonArr), () => {
                            imgPathJson.close();
                            reslove();
                        });
                    }

                });
                readStream.on("finish", () => {
                    console.log(`copy读取成功~`, statu);
                    // read 流成功才执行
                })
                readStream.on("error", err => {
                    writeStream.close();
                    console.log(`copy读取失败~`, statu, err);
                    if (statu === 0) {
                        let imgPathJson = fs.createWriteStream(__dirname + "/stream/imgPathJson.txt");
                        imgPathJson.write(JSON.stringify(imgPathJsonArr), () => {
                            imgPathJson.close();
                            reslove();
                        });
                    }
                })
            }
        }
        // 通过全路径下载图片至某文件夹内
        function downloadImg(url, kindName) {
            if (url === undefined) {
                --statu;
                console.log(`url为空`, statu);
                if(statu == 0)
                    reslove();
                return 0
            }
            let imgName = url.split('/')[url.split('/').length - 1];
            let destPath = path.join(__dirname, `/stream/${kindName}/`, imgName);
            let process = fs.createWriteStream(destPath);
            request({
                // https://keyportaldev.krclouds.com/keydatatest/img/nav-img.9f74d09f.png
                url: url,
                timeout: 10000
            }, (error) => {
                if (error) {
                    process.close();
                    console.log("___request error__", statu)
                    if (statu === 0) {
                        let imgPathJson = fs.createWriteStream(__dirname + "/stream/imgPathJson.txt");
                        imgPathJson.write(JSON.stringify(imgPathJsonArr), () => {
                            imgPathJson.close();
                            reslove();
                        });
                    }
                }
            }).pipe(process);

            process.on("finish", () => {
                --statu;
                imgPathJsonArr.push({
                    kind: kindName,
                    value: `/${kindName}/${imgName}`,
                    imgName: imgName,
                });
                console.log(imgName, `download写入成功~`, statu);
                if (statu === 0) {
                    let imgPathJson = fs.createWriteStream(__dirname + "/stream/imgPathJson.txt");
                    imgPathJson.write(JSON.stringify(imgPathJsonArr), () => {
                        imgPathJson.close();
                        reslove();
                    });
                }
            });
            process.on("error", err => {
                --statu;
                console.log(imgName, `download写入失败~`, statu, err);
                if (statu === 0) {
                    let imgPathJson = fs.createWriteStream(__dirname + "/stream/imgPathJson.txt");
                    imgPathJson.write(JSON.stringify(imgPathJsonArr), () => {
                        imgPathJson.close();
                        reslove();
                    });
                }
            });
        }
        // 生成文件夹
        fs.promises.mkdir(__dirname + "/stream", {
            recursive: true
        }).then(() => {
            // filStream 文件流分析
            // 需要生成的文件有 visual 文件（txt）  config文件（txt） 和 各类图片
            // txt文件包含内容 图片路径  内容
            fs.promises.mkdir(__dirname + CONFIG.uploadsZipFile + saveDay(), {
                recursive: true
            }).then(() => {
                // -----图片-- 存储各类图片即可----
                let cover = filStream.visual.backgroundUrl;
                let bg = JSON.parse(filStream.config.detail).backgroundImage;
                // 生成bg文件夹
                fs.mkdir(__dirname + "/stream/bg", {
                    recursive: true
                }, () => {
                    ++statu
                    copyImg(bg, 'bg');
                })
                // cover 预览图
                fs.mkdir(__dirname + "/stream/cover", {
                    recursive: true
                }, () => {
                    ++statu
                    copyImg(cover, 'cover');
                })

                // component中的其他图片
                let componets = JSON.parse(filStream.config.component);
                let componetsLength = componets.length;
                // 此处需等待全部文件流结束后执行后续----
                let visualTxt = fs.createWriteStream(__dirname + "/stream/visual.txt");
                visualTxt.write(JSON.stringify(filStream.visual), () => {
                    visualTxt.close();
                });
                let visualConfigTxt = fs.createWriteStream(__dirname + "/stream/visualConfig.txt");
                visualConfigTxt.write(JSON.stringify(filStream.config), () => {
                    visualConfigTxt.close();
                });
                componets.map((key, val) => {
                    if (key.title === '图片') {
                        fs.mkdir(__dirname + "/stream/source", {
                            recursive: true
                        }, () => {
                            if (typeof key.data === "object") {
                                ++statu;
                                downloadImg(key.data.value, "source")
                            } else if (typeof key.data === "string") {
                                ++statu
                                copyImg(key.data, 'source');
                            }

                        })
                    } else if (key.title === '图片框') {
                        fs.mkdir(__dirname + "/stream/border", {
                            recursive: true
                        }, () => {
                            if (typeof key.data === "object") {
                                ++statu;
                                downloadImg(key.data.value, "border")
                            } else if (typeof key.data === "string") {
                                ++statu
                                copyImg(key.data, 'border');
                            }
                        })
                    } else if (key.title === '轮播图') {
                        fs.mkdir(__dirname + "/stream/banner", {
                            recursive: true
                        }, () => {
                            if (key.data.length > 0) {
                                key.data.map((key2, index2) => {
                                    if (typeof key.data === "object") {
                                        ++statu;
                                        downloadImg(key2.value, "banner")
                                    } else if (typeof key.data === "string") {
                                        ++statu;
                                        copyImg(key2.data, 'banner');
                                    }
                                })
                            }
                        })
                    }
                })
            })

        }).catch(err => {
            reslove();
        })
    })
}
module.exports = {
    /**
     * 获取大屏的压缩文件
     * @param {*} id 
     */
    async uplpadZip(req, res) {
        // ---压缩相关--
        const zipName = GenNonDuplicateID();
        // 生成压缩包路径
        const output = fs.createWriteStream(__dirname + CONFIG.uploadsZipFile + saveDay() + `/` + zipName + '.zip');
        const archive = archiver('zip', {
            zlib: {
                level: 9
            } // 设置压缩级别
        });
        archive.on('error', function (err) {
            throw err;
        });
        //id
        const {
            id,
            tid,
            sid,
        } = req.query;

        let data = {
            config: {},
            visual: {},
        };
        let getQuery = {
            id: parseInt(id),
            tid: parseInt(tid),
            sid: parseInt(sid),
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
                                    is_del: 0,
                                })
                                .then((resp) => {
                                    data = {
                                        config: {
                                            component: resp[0].component,
                                            detail: resp[0].detail,
                                        },
                                        visual: {
                                            title: resq[0].title,
                                            backgroundUrl: resq[0].background_url,
                                        },
                                    };
                                })
                                .then(() => {
                                    if (data) {
                                        // 下一步对data数据进行分析
                                        generateFolderDirectory(data).then(() => {
                                            output.on('close', function () {
                                                console.log(`
                                                    --------- ---------压缩完毕--------- ---------
                                                    生成文件大小${(archive.pointer() / 1024 / 1024).toFixed(1)}MB,
                                                    ${(archive.pointer()).toFixed(1)}B
                                                    请在/uploads查找activity-ui.zip
                                                    ---------如需配置生成路径或文件名,请配置output---------
                                                    `);
                                                // 删除文件与文件夹
                                                emptyDir(__dirname + "/stream");
                                                rmEmptyDir(__dirname + "/stream");
                                                // fs.rmdirSync(__dirname + "/stream");
                                                codeBack(req, res, 2000, "操作成功", {
                                                    uploadsUrl: `upload/keydata/zipFile/${saveDay()}/${zipName}.zip`
                                                });

                                            });
                                            output.on('end', function () {
                                                // 删除文件与文件夹 此处问题 会在文件流没有都导入后在执行
                                                // emptyDir(__dirname + "/stream");
                                                // fs.rmdirSync(__dirname + "/stream")
                                                console.log('Data has been drained');

                                            });
                                            // 建立管道
                                            archive.pipe(output);
                                            // 压缩指定文件
                                            archive.directory(__dirname + '/stream', false)
                                            archive.finalize()
                                        })

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
    }
}