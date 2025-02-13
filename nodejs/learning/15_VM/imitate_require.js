// 加载外部模块 再该文件下使用数据的源码实现

const fs = require("fs");
const path = require("path")
const vm = require("vm");

// -------文件定位 和 判断文件是否存在-------
function Modules(id) {
    this.id = id;
    this.exports = {};
}

Modules._resolveFilename = function(filename) {
    // 使用 path 将 filename 转为绝对路径
    let absPath = path.resolve(__dirname, filename)

    // 判空 和  判断是否为字符串 (不写了)
    if (fs.existsSync(absPath)) {
        console.log(absPath);
        return absPath;
    } else {
        // 文件定位
        let suufix = Object.keys(Modules._extensions)
        for (let i = 0; i < suufix.length; i++) {
            let newPath = absPath + suufix[i]
            if (fs.existsSync(newPath)) {
                console.log(newPath)
                return newPath;
            }
        }
        throw new Error(filename + "文件不存在")
    }

}


// 后缀补正
Modules._extensions = {
    '.js' (modules) {
        // 读取 
        let content = fs.readFileSync(modules.id,'utf-8');

        // 包装
        content = Modules.wrapper[0] + content + Modules.wrapper[1]

        // VM
        let compileFn = vm.runInThisContext(content)

        // 准备参数值
        let exports = modules.exports
        let dirname = path.dirname(module.id)
        let filename = modules.id
        // 调用
        compileFn.call(exports,exports,myRequire,modules,filename,dirname)
    },
    '.json' (modules) {}
}

Modules.wrapper = [
    "(function(exports,require,module,__filename,__dirname) {",
    "})"
]

Modules.prototype.load =  function() {
    let extname = path.extname(this.id)
    console.log(extname);

    Modules._extensions[extname](this)
}

// 缓存优先
Modules._cache = {}

function myRequire(filename) {
    //  1.对路径处理：获取绝对路径
    let mPath = Modules._resolveFilename(filename);

    // 2.缓存优先
    let cacheModules = Modules._cache[mPath] 
    if(cacheModules) return cacheModules.exports;

    // 3.创建空对象加载目标模块
    let module = new Modules(mPath)
    
    // 4.缓存加载过的模块
    Modules._cache[mPath] = module;

    // 5.执行加载
    module.load();

    // 6.返回数据
    return module.exports;
}

// 调用
let obj = myRequire('./v')

console.log(obj);