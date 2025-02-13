## 需要全局安装才行
**报错：'nodemon' 不是内部或外部命令，也不是可运行的程序**
解决方案：
```javascript
  npm install nodemon -g
```



### how to run 
```
dev -> test -> prod 

```
### swagger  https://editor.swagger.io/



## 连接myql错误
https://blog.csdn.net/qq_28004379/article/details/84652593


## 运行
npm install

本机运行
npm run dev

正式\测试环境 ->  正常通过 .bat 文件运行  （pm2）
npm run server

## 管理员账号
admin 123456

### savefile
 <!-- const multer = require("multer"); //导入multer中间件
         const { v4: uuidv4 } = require("uuid");
         let mydata = new Date();
         let saveDay = mydata.getFullYear().toString() + (mydata.getMonth() + 1).toString() + mydata.getDate().toString();
         //const upload = multer({ dest: __dirname + '/../../uploads/' + saveDay })

     let storage = multer.diskStorage({
       //设置上传后文件路径，uploads文件夹会自动创建。
         destination: function(req, file, cb) {
             cb(null, __dirname + '/../../../public/uploads/' + saveDay)
         },
         //给上传文件重命名，获取添加后缀名
         filename: function(req, file, cb) {
             var fileFormat = (file.originalname).split(".");
             cb(null, file.fieldname + '-' +  uuidv4() + "." + fileFormat[fileFormat.length - 1]);
         }
     });
     //添加配置文件到muler对象。
     let upload = multer({
         storage: storage
     }); -->

### 数据库命及对应内容
tb_core_data_login:登录用户表
tb_core_data_visual:大屏缩略图表
tb_core_data_visual_category:分类表
tb_core_data_visual_config:内容表，点击打开大屏后内容存储的地方
tb_core_data_visual_map:地图表
tb_core_data_image:图片表 ； 存放 bg,border,cover,source; type 1.bg ;2.banner; 3.border; 4.source;


### 数据库使用相关
① select * from table limit n; 取数据库前n条数据
② select * from table limit n,m; 跳过数据库前n条数据，取之后的m条数据
③ select * from table limit n offset m;跳过数据库前m条数据，取之后的n条数据

offset跳过  limit 取几条
### pm2常用命令
```
$ pm2 start app.js # 启动app.js应用程序

$ pm2 start app.js -i 4        # cluster mode 模式启动4个app.js的应用实例

4个应用程序会自动进行负载均衡

$ pm2 start app.js --name="api" # 启动应用程序并命名为 "api"

$ pm2 start app.js --watch      # 当文件变化时自动重启应用

$ pm2 start script.sh          # 启动 bash 脚本

$ pm2 list                      # 列表 PM2 启动的所有的应用程序

$ pm2 monit                    # 显示每个应用程序的CPU和内存占用情况

$ pm2 show [app-name]          # 显示应用程序的所有信息

$ pm2 logs                      # 显示所有应用程序的日志

$ pm2 logs [app-name]          # 显示指定应用程序的日志

$ pm2 flush                       # 清空所有日志文件

$ pm2 stop all                  # 停止所有的应用程序

$ pm2 stop 0                    # 停止 id为 0的指定应用程序

$ pm2 restart all              # 重启所有应用

$ pm2 reload all                # 重启 cluster mode下的所有应用

$ pm2 gracefulReload all        # Graceful reload all apps in cluster mode

$ pm2 delete all                # 关闭并删除所有应用

$ pm2 delete 0                  # 删除指定应用 id 0

$ pm2 scale api 10              # 把名字叫api的应用扩展到10个实例

$ pm2 reset [app-name]          # 重置重启数量

$ pm2 startup                  # 创建开机自启动命令

$ pm2 save                      # 保存当前应用列表

$ pm2 resurrect                # 重新加载保存的应用列表

$ pm2 update                    # Save processes, kill PM2 and restore processes

$ pm2 generate                  # Generate a sample json configuration file

pm2文档地址：http://pm2.keymetrics.io/docs/usage/quick-start/
```

### get post delete put
```
1、POST /url 创建  
2、DELETE /url/xxx 删除 
3、PUT /url/xxx 更新
4、GET /url/xxx 查看
```


### 接口文档
```
目前使用的是 apifox
https://www.apifox.cn/
```



### bunyan 使用
```

https://blog.csdn.net/qi_dabin/article/details/81061524?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.pc_relevant_default&spm=1001.2101.3001.4242.1&utm_relevant_index=3

```


### 状态码
200 （成功） 服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。 
201 （已创建） 请求成功并且服务器创建了新的资源。
202 （已接受） 服务器已接受请求，但尚未处理。 
203 （非授权信息） 服务器已成功处理了请求，但返回的信息可能来自另一来源。 
204 （无内容） 服务器成功处理了请求，但没有返回任何内容。 
205 （重置内容） 服务器成功处理了请求，但没有返回任何内容。 
206 （部分内容） 服务器成功处理了部分 GET 请求。

300 （多种选择） 针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择。 
301 （永久移动） 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。 
302 （临时移动） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。 
303 （查看其他位置） 请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。 
304 （未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。 
305 （使用代理） 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理。 
307 （临时重定向） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。

>400 （错误请求） 服务器不理解请求的语法。 
401 （未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。 
403 （禁止） 服务器拒绝请求。 
404 （未找到） 服务器找不到请求的网页。 
405 （方法禁用） 禁用请求中指定的方法。 
406 （不接受） 无法使用请求的内容特性响应请求的网页。 
407 （需要代理授权） 此状态代码与 
408 （请求超时） 服务器等候请求时发生超时。 
409 （冲突） 服务器在完成请求时发生冲突。 服务器必须在响应中包含有关冲突的信息。 
410 （已删除） 如果请求的资源已永久删除，服务器就会返回此响应。 
411 （需要有效长度） 服务器不接受不含有效内容长度标头字段的请求。 
412 （未满足前提条件） 服务器未满足请求者在请求中设置的其中一个前提条件。 
413 （请求实体过大） 服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。 
414 （请求的 URI 过长） 请求的 URI（通常为网址）过长，服务器无法处理。 
415 （不支持的媒体类型） 请求的格式不受请求页面的支持。 
416 （请求范围不符合要求） 如果页面无法提供请求的范围，则服务器会返回此状态代码。 
417 （未满足期望值） 服务器未满足"期望"请求标头字段的要求。

500 （服务器内部错误） 服务器遇到错误，无法完成请求。 
501 （尚未实施） 服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。 
502 （错误网关） 服务器作为网关或代理，从上游服务器收到无效响应。 
503 （服务不可用） 服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。 
504 （网关超时） 服务器作为网关或代理，但是没有及时从上游服务器收到请求。 
505 （HTTP 版本不受支持） 服务器不支持请求中所用的 HTTP 协议版本。



### 使用的依赖包
```

压缩文件 ：archiver
npm install archiver --save
git  https://github.com/archiverjs/node-archiver
官网 https://www.archiverjs.com/docs/quickstart


```