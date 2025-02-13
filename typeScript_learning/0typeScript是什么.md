### 初始
```
TypeScript是js的超集
为js添加了 类型系统
兼容所有js的平台
ts无法直接在js解析器中执行，需要将ts编译（转换）成js
```

### 增加内容：
```
类型 , 新增了很多新特性（装饰器...） , 有丰富的配置选项（可以编译成任意版本的js ） 
```

### 设计目标 ： 开发大型应用

### 例子
```
//typeScript
let age: number = 19

//javaScript
let age = 10
```
### 优势：
1.类型化思维
2.提高代码可读性，使维护和重构代码更加容易
3.补充了接口，枚举等大型应用开发功能
4.Vue3源码使用TS重写 
5.Angular默认支持TS；React与TS配合是大型项目首选 

### 安装命令
npm install -g typescript

typescript提供tsc命名对ts进行编译，实现TS->JS的转化

终端 ：  tsc  xxxx.ts 会生成同名的xxxx.js文件

### node如何执行ts
1.安装：npm i -g ts-node

2.使用： ts-node xxxx.ts


### tsc 编译配置选项
```
监视ts文件编译，文件改变就会自动编译
tsc xxx.ts -w 


编译所有文件 ，需要tsconfig.json文件（在此处配置）
tsc           （就会将所有的ts都编译）
tsc -w         (会监视所有的ts文件)
```


### 不理解记录
接口与泛型 须看要文档