module.exports = {
    //静态文件目录
    // 文件上传目录
    apiVerionPrefix:"/v1",
    XPoweredBy:"keyroads.com",
    name: 'zz',
    port: process.env.Port || 3000,
    url: "https://keyportaldev.krclouds.com/",
    /** mysql settings */
    mysql: {
        client: 'mysql',
        connection: {
            host: process.env.MYSQL_HOST || '81.68.222.174',
            port: process.env.MYSQL_PORT || 3306,
            user: process.env.MYSQL_USER || 'ryderData',
            //本机测试密码123456       Keyroads1
            // password: process.env.NODE_ENV==="development" ? 'Keyroads1' : 'Keyroads1',
            password: process.argv[process.argv.length -1] === `dev` ? '123456' : 'irJjYwk7p5e23rDG',
            database: process.env.MYSQL_DBNAME || 'ryderdata'
        },
        pool: { min: 1, max: 5 },
        acquireConnectionTimeout: 300000,
        log: {
            warn(message) {},
            error(message) {
                console.error(message)
            },
            deprecate(message) {},
            debug(message) {},
        },
        debug: true
    },
    accesslogToFile:true,
    //uploads/keydata/cover/yyyy/mm/dd/xxxx.jpg
    //uploads/keydata/bg/yyyy/mm/dd/xxxx.jpg
    //uploads/keydata/border/yyyy/mm/dd/xxxx.jpg
    //uploads/keydata/source/yyyy/mm/dd/xxxx.jpg
    upload:process.env.Uploads || '/../../upload/keydata/0/',
    //上传文件路径 --- cover--大屏封面
    uploads: process.env.Uploads || '/../html/upload/keydata/cover/',
    cover:process.env.Uploads || '/../html/upload/keydata/cover/',
    //图片存储路径
    bg: process.env.Bg || '/../html/upload/keydata/bg/',
    banner: process.env.Source || '/../html/upload/keydata/banner/',
    source: process.env.Source || '/../html/upload/keydata/source/',
    border: process.env.Border || '/../html/upload/keydata/border/',

    // 大屏压缩包文件路径
    uploadsZipFile:process.env.Border || '/../../../../html/upload/keydata/zipFile/',
    //接口返回图片路径
    fileBg: process.env.FileBg || '/upload/keydata/bg/',
    fileBanner:process.env.FileBanner || '/img/banner/',
    fileSource: process.env.FileSource || '/img/source/',
    fileBorder: process.env.FileBorder || '/img/border/',
    
    //文件夹生成路径
    floadersPath:process.env.FloadersPath || "./../../html/upload/keydata/cover/",
}