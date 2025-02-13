const multer = require("multer"); //导入multer中间件
const CONFIG = require("../../config");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { saveDay} = require("../../lib/commentFunction");
let lengthName = 35;
module.exports = {
    savefileNoRename(req, res) {
        console.log("-------upload2--------", saveDay())
        let storage = multer.diskStorage({
            //设置上传后文件路径，uploads文件夹会自动创建。
            destination: function(req, file, cb) {
                cb(null, __dirname + CONFIG.upload + saveDay())
            },
            //给上传文件重命名，获取添加后缀名
            filename: function(req, file, cb) {
                // console.log("__file__",file)
                var fileFormat = (file.originalname).split(".");
                cb(null, 'zip' +'-' + uuidv4() + "." + fileFormat[fileFormat.length - 1]);
            }
        });
        //添加配置文件到muler对象。
        let upload = multer({
            storage: storage
        });
        return upload;
    },
    //upload: upload,
    savefile(req, res) {
        //const upload = multer({ dest: __dirname + '/../../uploads/' + saveDay })
        let storage = multer.diskStorage({
            //设置上传后文件路径，uploads文件夹会自动创建。
            destination: function(req, file, cb) {
                cb(null, __dirname + '/../../'+CONFIG.upload + saveDay())
            },
            //给上传文件重命名，获取添加后缀名
            filename: function(req, file, cb) {
                
                var fileFormat = (file.originalname).split(".");
                cb(null, file.fieldname + '-' + uuidv4() + "." + fileFormat[fileFormat.length - 1]);
            }
        });
        //添加配置文件到muler对象。
        let upload = multer({
            storage: storage
        });
        // console.log("-------upload2--------", upload)
        return upload;
    },
    // 判断是否生成日期文件夹
    async buildExists(req, res, next) {
        //判断是否有文件夹，有true,无false
        fs.exists(CONFIG.upload + saveDay(), function (exists) {
            if (exists) {
                console.log(`have floaders:${saveDay()}`);
            } else {
                fs.mkdir(CONFIG.upload + saveDay(), function (err) {
                    if (err) {
                        console.log(`err:${err},${new Date()}`);
                    }else{
                        console.log("cover-success:", new Date());
                    }
                });
            }
            next();
        });
    },
    //上传图片
    async postPutFile(req, res) {
        /*
            1.在uploads下生成现在日期的文件夹
            2.判断是否有该文件夹，没有创建 , 有在该文件夹下生成封面图片
            */
        const file = req.file;
        file.url = `/upload/0/${saveDay()}/${file.filename}`;
        res.send({
            data: file,
            code: 2000,
            msg: "操作成功",
            success: true,
        });
    },

    // ----------冗余代码块-------------------------------------------------------------------------
    savefileImg(req, res) {
        let type = 0;
        let uploads="";
        if(req){
            type = req.query.type;
        }
        //type 1.bg ;2.banner; 3.border; 4.source;
        if(type === 1)
            uploads = CONFIG.bg
        else if(type === 2)
            uploads = CONFIG.banner
        else if(type ===3)
            uploads = CONFIG.source
        else if(type === 4)
            uploads = CONFIG.border
        else
            uploads = CONFIG.bg
        let storage = multer.diskStorage({
            //设置上传后文件路径，uploads文件夹会自动创建。
            destination: function(req, file, cb) {
                cb(null, __dirname + uploads)
            },
            //给上传文件重命名，获取添加后缀名
            filename: function(req, file, cb) {
                var fileFormat = (file.originalname).split(".");
                cb(null, file.fieldname + '-' + uuidv4() + "." + fileFormat[fileFormat.length - 1]);
            }
        });
        //添加配置文件到muler对象。
        let upload = multer({
            storage: storage
        });
        //console.log("-------upload2--------", upload)
        return upload;
    },
    getBgNum(req, res, next) {
        //获取该文件夹内的bg个数
        console.log("req.````", req.query.isImg)
        let readDir;
        if (req.query.isImg == "ImgBg") {
            readDir = fs.readdirSync(__dirname + CONFIG.bg);
        } else if (req.query.isImg == "Image") {
            readDir = fs.readdirSync(__dirname + CONFIG.source);
        } else if (req.query.isImg == "Border") {
            readDir = fs.readdirSync(__dirname + CONFIG.border);
        }
        lengthName = readDir.length + 1;
        console.log("------lengthName-----", lengthName)
        next();
    },
    saveBackground(req, res, next) {
        let storages = multer.diskStorage({
            //设置上传后文件路径
            destination: function(req, file, cb) {
                cb(null, __dirname + CONFIG.bg)
            },
            //给上传文件重命名，获取添加后缀名
            filename: function(req, file, cb) {
                var fileFormat = (file.originalname).split(".");
                cb(null, "bg" + lengthName + "." + fileFormat[fileFormat.length - 1]);
            }
        });
        //添加配置文件到muler对象。
        let uploads = multer({
            storage: storages
        });
        //console.log("-------upload2--------", upload)
        return uploads;
    },
    saveImage() {
        let storages = multer.diskStorage({
            //设置上传后文件路径
            destination: function(req, file, cb) {
                cb(null, __dirname + CONFIG.source)
            },
            //给上传文件重命名，获取添加后缀名
            filename: function(req, file, cb) {
                var fileFormat = (file.originalname).split(".");
                cb(null, "source" + lengthName + "." + fileFormat[fileFormat.length - 1]);
            }
        });
        //添加配置文件到muler对象。
        let uploads = multer({
            storage: storages
        });
        //console.log("-------upload2--------", upload)
        return uploads;
    },
    saveBorder() {
        let storages = multer.diskStorage({
            //设置上传后文件路径
            destination: function(req, file, cb) {
                cb(null, __dirname + CONFIG.border)
            },
            //给上传文件重命名，获取添加后缀名
            filename: function(req, file, cb) {
                var fileFormat = (file.originalname).split(".");
                cb(null, "border" + lengthName + "." + fileFormat[fileFormat.length - 1]);
            }
        });
        //添加配置文件到muler对象。
        let uploads = multer({
            storage: storages
        });
        return uploads;
    }
}