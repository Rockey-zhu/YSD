// request 请求 get  地址 可获得html页面的信息 
const cheerio = require("cheerio")
const request = require("request")
const fs  = require("fs")

const load = (options)=>{
    request({url:options.url},(_,response,body)=>{
        const $ = cheerio.load(body);
         $('ul.tm_list li').each((index,item) => {
            const url = $('img',item).attr('lz_src');
            console.log(url)
            request(`https:${url}`).pipe(fs.createWriteStream(`./img_4399/${index}.jpg`))
        })
    })
}

load({
    // url:"https://www.iviewui.com/components/icon",  //404
    url:"https://www.4399.com/",//新浪微博
    // url:"http://www.duoziwang.com/head/gexing/",    //图片网站
    page:10
})

// 爬虫 https://www.jianshu.com/p/629a81b4e013