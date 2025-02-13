const config = require("./config")
const path = require('path')
const fs = require('fs');
const express = require("express")
const app = express()
//跨域模块
// const  cors = require('cors')
// app.use(cors())
// app.use(require('cors')())
console.log("__process.argv__",process.argv)
//设置跨域访问
// app.all('*', function(req, res, next) {
//     if(process.argv[process.argv.length -1] === `dev`){
//         res.header("Access-Control-Allow-Origin", "*");
//     }    
//     res.set('Access-Control-Allow-Credentials', true);
//     res.header("Access-Control-Allow-Headers", "X-Requested-With,Authorization,Accept, Content-Type");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
//     res.header("X-Powered-By", config.XPoweredBy);
//     res.header("Content-Type", "application/json;charset=utf-8");
//     if (req.method == "OPTIONS")
//         res.send(200);
//     else
//         next();
// });
// 解决跨域问题
app.all("*",function(req,res,next){
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin','*');
    // 允许的header类型
    res.header('Access-Control-Allow-Headers','content-type');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS');
    if(req.method.toLowerCase() == 'options')
        res.send(200); // 让options 尝试请求快速结束
    else
        next();
})

const uuid = require('node-uuid')
    //const logger = require("morgan") 
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const responseTime = require('response-time');
const morgan = require('morgan')
const { saveDay } = require("./lib/commentFunction");
const bunyan = require('bunyan')
const RJson = require("./middleware/RJson")
// const cors = require('koa2-cors')


const accessLogStream = fs.createWriteStream(
  path.join(__dirname, `./logs/access/${saveDay()}_access.log`),
  { flags: 'a' }
);
const log = bunyan.createLogger({
    name: 'log2file',
    streams: [{
        path: `./logs/bunyan/${saveDay()}_bunyan.log`
    }]
});
log.addStream({
    name: "myNewStream",
    stream: process.stderr,
    level: "debug"
});
//载入日志模块
if (config.accesslogToFile) {
    // 存入文件
    app.use(morgan('combined', { stream: accessLogStream }));
} else {
    app.use(morgan('dev'));
}

// bunyan日志模块
log.info("hi");
log.warn({ lang: 'fr' }, 'au revoir');
app.use(function(req, res, next) {
    req.log = log.child({ reqId: uuid() });
    next();
});


app.use(RJson);
app.use(responseTime());
app.use(cookieParser());
app.use(bodyParser.json()); //数据JSON类型
app.use(bodyParser.urlencoded({ extended: false })); //解析post请求数据

//post --> body.parser
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))




//托管静态文件，让upload里的东西可以通过/访问
console.log("____dirname__", __dirname)
    // app.use('/upload', express.static(__dirname + '/upload'))
app.use('/upload', express.static(path.join(__dirname,'/../../upload/')))
app.use('/swagger/', express.static(path.join(__dirname, 'public', 'swagger')))
    //导入路由
require('./routes/web')(app)
    //设置跨域访问


app.listen(config.port, () => {
    console.log(new Date(), "--http://localhost:" + config.port +config.apiVerionPrefix)
    console.log(new Date(), "--http://localhost:" + config.port + "/swagger/#/")
    console.log("--MYSQL_PASVUE_APP_DISABLECOMMENTSSWORD: ", process.env.NODE_ENV);
    console.log("--MYSQL_PASSWORD: ", process.env.MYSQL_PASSWORD);
    console.log("---------------------------------------------------------------------------------")
})

process.on('uncaughtException', function(err) {
    try {
        var exec = require('child_process').exec;
        console.log(err);
    } catch (e) {
        console.log(e);
    }
});

process.on('CALL_AND_RETRY_LAST Allocation failed', function(err) {
    try {
        var exec = require('child_process').exec;
        console.log(err);
    } catch (e) {
        console.log(e);
    }
});