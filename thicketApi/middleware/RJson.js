const  eutil=require("eutil")
module.exports =function (req, res, next) {
    res.RJson=(d)=>{
        // console.log("RJson",d,d.length)
        if(eutil.isArray(d)){
            if(d.length==0){
                res.json({  "code": 2000, "msg": "success",  "result": d})
            }
            if(d.length==1){
                if(eutil.isNumber(d[0])){
                    res.json({  "code": d[0], "msg": "success",  "result": {}})
                }else  if(eutil.isString(d[0])){
                    res.json({  "code": 2000, "msg": d[0],  "result": {}})
                }else{
                    res.json({  "code": 2000, "msg": "success",  "result": d})
                } 
            }
            if(d.length==2){
                if(eutil.isNumber(d[0])){
                    res.json({  "code": d[0], "msg": d[1],  "result": {}})
                }else  if(eutil.isString(d[0])){
                    res.json({  "code": 2000, "msg": d[0],  "result": d})
                }else{
                    res.json({  "code": 2000, "msg": "success",  "result": d})
                } 
            }
            if(d.length==3){
                if(eutil.isNumber(d[0])){
                    res.json({  "code": d[0], "msg": d[1],  "result":d[2]})
                }else  if(eutil.isString(d[0])){
                    res.json({  "code": 2000, "msg": d[0],  "result": d})
                }else{
                    res.json({  "code": 2000, "msg": "success",  "result": d})
                } 
            }else{
                res.json({  "code": 2000, "msg": "success",  "result": d})
            }
        }else{
            res.json(d)
        }   
    }
   next();
  };
  