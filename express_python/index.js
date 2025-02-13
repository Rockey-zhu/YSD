// request 请求 get  地址 可获得html页面的信息 
const cheerio = require("cheerio")
const request = require("request")
const fs  = require("fs")

const load = (options)=>{
    request({url:options.url},(_,response,body)=>{
        const $ = cheerio.load(body);
        $('ul.news_top li').each((index,item) => {
            const url = $(item).text()
            console.log(url)
            // request(url).pipe(fs.createWriteStream(`./img/${index}.jpg`))
        })
    })
}

load({
    // url:"https://www.iviewui.com/components/icon",  //404
    url:"https://www.sina.com.cn/",//新浪微博
    // url:"http://www.duoziwang.com/head/gexing/",    //图片网站
    page:10
})

// 爬虫 https://www.jianshu.com/p/629a81b4e013