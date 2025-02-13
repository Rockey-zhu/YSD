// 需求：有一个服务，可以依据请求的接口返回相应的数据

import express  from 'express'
import {DataStore} from "./data"

const app = express();
// 路由
app.get("/",(req,res)=>{
    // req 请求  ;res相应
    // res.end('hello2');
    res.json(DataStore.list)
})

app.listen(8081,()=>{
    console.log("已经启动")
})