const fs = require('fs');
const path = require('path');
const markeds = require('marked');
const browserSync = require('browser-sync');

/**
 * 01 读取 md 和 css 内容
 * 02 将上述读取内容替换占位符生成一个最终需要的html字符
 * 03 将上述html字符写入到指定html文件中
 * 04 监听md文档的内容变化，更新html内容
 * 05 使用browser-sync 来实时显示 html 内容
 */

//运行命令：  node md_to_html.js ../../../README.md  

let mdPath = path.join(__dirname, process.argv[2]);
let cssPath = path.resolve('github.css')
let htmlPath = mdPath.replace(path.extname(mdPath), '.html')
console.log(cssPath, '-^--<//>--^-', htmlPath);

fs.watchFile(mdPath, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        fs.readFile(mdPath, 'utf-8', (err, data) => {
            let htmlStr = markeds.marked(data);
            // console.log(htmlStr)
            fs.readFile(cssPath, 'utf-8', (err, data) => {
                let retHtml = temp.replace('{{content}}' , htmlStr).replace('{{style}}',data);
                // 将上述内容写进html文件中用于展示
                fs.writeFile(htmlPath,retHtml,(err)=>{
                    console.log("生成成功")
                })
            })
        })
    }
})

const temp = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>{{style}}</style>
<body>
    <div class="markdown-body">{{content}}</div>
</body>
</html>`