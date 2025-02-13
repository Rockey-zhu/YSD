// code参数返回列表
module.exports = function (req,res, code,message = '',data = {}){
    new Promise(reslove =>{
        let codeModule = {
            code:code,
            data:data,
            msg:message,
            success:false,
        }
        if(code == 2000){
            codeModule.success = true;
        }else if(code == 4001){
            codeModule.msg = `error`;
        }else if(code == 2004){
            codeModule.msg = `<No found data>`;
        }else if(code === 4012){
			codeModule.msg = message;
		}
        reslove(codeModule)
    }).then((v)=>{
        // console.log("_res__",v);
        req.log.info(v)
        res.send(v);
        return v
    })

}