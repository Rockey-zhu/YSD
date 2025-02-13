const config=require("../../config")
module.exports = app => {
    const express = require("express")
    const router = express.Router({
        mergeParams: true //合并url参数不然app.use的参数在后续代码中无法获取
    })

    //接口书写

    //rest前缀
    // app.use('/web/api/rest/:tableName', async(req, res, next) => {
    //     //中间件
    //     //将从url获取的:resource用inflection转换成大写单词
    //     req.Model = require(`../../controller/crud`); //req.model挂载这个model
    //     next();
    // }, router)
    //----- 通用接口 ------
    app.get('/web/api/rest/:tableName/Search',async (req,res)=>{
        const {Search} = require("../../controller/crud/index");
        Search(req,res);
    })
    app.post('/web/api/rest/:tableName/Add',async(req,res)=>{
        const {Add} = require("../../controller/crud/index");
        Add(req,res);
    })
    app.get('/web/api/rest/:tableName/Get',async(req,res)=>{
        const {Get} = require("../../controller/crud/index");
        Get(req,res);
    })
    app.delete('/web/api/rest/:tableName/Delete',async(req,res)=>{
        const {Del} = require("../../controller/crud/index");
        Del(req,res);
    })
    app.put('/web/api/rest/:tableName/UpData',async(req,res)=>{
        const {UpData} = require("../../controller/crud/index");
        UpData(req,res);
    })
    // ---------- 普通上传接口 ----------
    const saveFiles = require("../../controller/savefile/savefile")
    app.post(config.apiVerionPrefix+"/web/api/put-file",
        saveFiles.buildExists,
        saveFiles.savefile().single('file'),
        saveFiles.postPutFile)


    // -----------------------------------------------------------------
    //About
    app.get(config.apiVerionPrefix+'/about',
         (req,res)=>{
            // res.RJson([2000]) 
            res.RJson([2000,"dddd",{"time":new Date(),"about":"Keyroads.com"}]) 
            //  res.RJson({"time":new Date(),"about":"Keyroads.com"})
         })
    //登录
    const requirLogin = require("../../controller/login/index")
    app.post(config.apiVerionPrefix+'/web/api/login/postlogin',
        requirLogin.postLogin)

    //category/list
    const requirCategory = require("../../controller/category/index");
    app.get(config.apiVerionPrefix+'/web/api/category/list',
        requirCategory.getList
    )
    app.get(config.apiVerionPrefix+'/web/api/category/copylist',
        requirCategory.getCopyList)
    app.get(config.apiVerionPrefix+'/web/api/category/detail',
        requirCategory.getDetail
    )
    app.post(config.apiVerionPrefix+'/web/api/category/save',
        requirCategory.postSave
    )
    app.put(config.apiVerionPrefix+'/web/api/category/update',
        requirCategory.postUpdate
    )
    app.delete(config.apiVerionPrefix+'/web/api/category/remove',
        requirCategory.postRemove
    )

    //   map/getList
    const requireMap = require("../../controller/map/index")
    app.get(config.apiVerionPrefix+'/web/api/map/list',
        requireMap.getList
    )

    app.get(config.apiVerionPrefix+'/web/api/map/detail',
        requireMap.getDetail
    )

    app.post(config.apiVerionPrefix+'/web/api/map/save',
        requireMap.postSave
    )

    app.post(config.apiVerionPrefix+'/web/api/map/update',
        requireMap.postUpdate
    )

    app.delete(config.apiVerionPrefix+'/web/api/map/remove',
        requireMap.postRemove
    )

    app.get(config.apiVerionPrefix+'/web/api/map/data',
        requireMap.getData)

    // visual
    const requireVisual = require("../../controller/visual/index")
    app.get(config.apiVerionPrefix+'/web/api/visual/list',
        requireVisual.getList)
    
    app.get(config.apiVerionPrefix+'/web/api/visual/detail',
        requireVisual.getDetail)

    app.post(config.apiVerionPrefix+"/web/api/visual/save",
        requireVisual.postSave)

    app.post(config.apiVerionPrefix+"/web/api/visual/update",
        requireVisual.postUpdate)

    app.delete(config.apiVerionPrefix+"/web/api/visual/remove",
        requireVisual.postRemove)

    app.post(config.apiVerionPrefix+"/web/api/visual/copy",
        requireVisual.postCopy)

    app.post(config.apiVerionPrefix+"/web/api/visual/put-file",
        requireVisual.buildExists,
        saveFiles.savefile().single('file'),
        requireVisual.postPutFile)

    app.post(config.apiVerionPrefix+"/web/api/visual/put-file-Image",
        saveFiles.savefileImg().single('file'),
        requireVisual.postPutFileImg)

    app.get(config.apiVerionPrefix+"/web/api/visual/getImgList",
        requireVisual.getTypeImg)   

    app.delete(config.apiVerionPrefix+"/web/api/visual/deleteImgList",
        requireVisual.deleteTypeImg)

    app.get(config.apiVerionPrefix+'/web/api/visual/downloadscreen',
        requireVisual.downloadFloaders,
        requireVisual.getDetail
    )


    // zip
    const uploadZip = require("../../controller/uploadZip/uploadZip")
    app.get(config.apiVerionPrefix+'/web/api/visual/uploadzip',
    uploadZip.uplpadZip,
    )
    const decompressionZip = require("../../controller/uploadZip/decompressionZip")
    app.post(config.apiVerionPrefix+'/web/api/uploadZip/decompressionZip',
    decompressionZip.buildExists,
    saveFiles.savefileNoRename().single('file'),
    decompressionZip.decompressionZip,
    )
    // 测试

    const  test = require("../../controller/test/test");
    app.get(config.apiVerionPrefix + '/web/api/test/test',
    test.testGet,
    )

}