### API 文档规范 [restful 规范](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
## HTTP 动词

在允许的情况下，API 为每个动作使用适当的 HTTP 动词。

| 动词 | 描述 |
|:----:|----|
| HEAD | 可以针对任何资源发出HTTP头信息。 |
| GET | 用于获取一个资源 |
| POST |用于创建一个资源 |
| PATCH | 用于更新部分资源，PATCH 可以接受一个或者多个来更新某个资源。 |
| PUT | 用于整体替换、创建或者使用集合，对于没有 body 的 PUT 请求，请确保请求头 `Content-Length` 设置为零。 |
| DELETE | 用于删除一个资源。 |

```
        GET（SELECT）：从服务器取出资源（一项或多项）。
        POST（CREATE）：在服务器新建一个资源。
        PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
        PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
        DELETE（DELETE）：从服务器删除资源。
```
- http 返回值规定  [状态吗详细使用列表](./返回值状态码查询列表)
   - 小于1000 预留给系统http 状态码使用
   -  开发

### 规范
```
//-1  服务器繁忙（CPU  内存） 
//2000  成功 normal
//   规定以1 0 开头的提示都是监控程序所用的错误
//   以 2   开头的提示都是成功
//   以 3   开头的 业务中的逻辑错误比如 redis mongodb 错误
//   以 4   用户输入错误(需要提示给用户) 对外的
//   以 5   开头的都是 服务器内部错误 这类错误可能主要内存溢出或者比较棘手的
//   以 6  开头的都是提示给用户看的

//eg:
    //2000   normal
    //3000   prompt 业务中的逻辑错误比如 redis mongodb 错误
    //4000  7000 prompt 用户输入错误(需要提示给用户) 对外的
    //5000  9000 system 服务器内部错误 （内部日志记录）
```

## API定义
``` 
http: { source: 'path' || 'body' || 'query'  'formData'  'form'
http 200  固定返回值 格式   必须包含 code msg result
 returns:[
      {arg: 'code', type: 'number', required: true},
      {arg: 'msg', type: 'string', required: true},
      {arg: 'result', type: 'array', required: true} 
    ]
 {
    description: '更新用户信息 [未完成]',
    http: { path: '/setProfile/:Uid', verb: 'patch' },
    returns:[
      {arg: 'code', type: 'number', required: true},
      {arg: 'msg', type: 'string', required: true},
      {arg: 'result', type: 'array', required: true}
    ],
    accepts: [
      { arg: 'authid', type: 'string',default:"authid",description:" ",required: true, http: { source: 'path' } }
    ]
  }

```

- http 200 开发返回值 

```
一般情况下正确返回值
{
  "code": 2000,
  "msg": "getHeadline api ",
  "result": {
    "starId": "-1"
  }
}

```
- 非http 200 系统错误

```
debug dev stagging
{
  "error": {
    "statusCode": 500,
    "name": "Error",
    "message": "ssss",
    "stack": "XXXX"
  }
}
prod 

{
  "error": {
    "statusCode": 500,
    "message": "Internal Server Error"
  }
}


```



#### token 说明

- guest token   appid
- user token    tid uid
- user admin token tid uid


### API Forward  relay deliver
- Method Get post put
- Headers
- Url
- Qs
- Body

- 批量删除用户
