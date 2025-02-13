var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

//中间件
/*
	什么是中间件
	通俗讲：中间件 就是 匹配路由之前或者匹配路由完成做的一系列操作
*/
app.use(async(ctx, next) => {
    //如何在所有页面进入的时候打印日期呢？ 用中间件
    console.log(new Date());

    await next() //next()让路由继续向下执行

    console.log("这是一个中间件3");
})

app.use(async(ctx, next) => {
    console.log("这是一个中间件1");

    await next();

    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = "这是一个404页面"
    }

    console.log("这是一个中间件2");

})

//配置路由
//ctx context  上下文 ，包含了reques 和 reponse等信息
router.get('/', async(ctx) => {
    ctx.body = '首页'; //返回数据
}).get('/news', async(ctx) => {

    //获取get传值
    //从ctx中读取get传值
    console.log(ctx.query); //  { id: '001', name: 'ysd' }  获取的是对象  用的较多
    console.log(ctx.querystring); //id=001&&name=ysd  获取到字符串
    //通过request获取get传值
    console.log(ctx.request.url)

    ctx.body = "新闻业";


}).get('/app/:aid/:bid', async(ctx) => { //动态路由:aid/:bid/:.... 
    //获取动态路由的传值
    console.log(ctx.params); //{ aid: '11' }


    ctx.body = "app"

})



app
    .use(router.routes()) //启动路由
    .use(router.allowedMethods()); //可以配置也可以不配置 
/*
	router.allowedMethods()作用，这是官方文档推荐的方法
	我们可以看到router.allowedMethods()用在了路由匹配 router.routes（）之后
	所以在当所有的路由中间件最后调用
	此时根据ctx.status设置response响应头
*/


//koa写法
// app.use(async(ctx) => {

//     ctx.body = "你好, koa2.x"
// })



app.listen(3000);