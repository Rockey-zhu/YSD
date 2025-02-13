# V3_ts

This template should help get you started developing with Vue 3 in Vite.

### 技术栈
    vue3  vite  echars element

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```


### vite
```
构建快，提高开发效率
    
```

### setup
```

组合式 API

4.1 生命周期: 没有 beforeCreate 和 create，其他生命周期要使用前面加on

4.2 setup 语法糖插件 unplugin-auto-import
    解决场景： 在组件开发中无需每次都要引入 import {ref}...


```

### 版本区别
```
obj响应区别
    vue2 ： Object.defineProperty()
    vue3 :  Proxy
    
    1.Object.defineProperty() 存在的问题
        1.必须便利对象每个属性
        2.不能监听数组的变化

    2.Proxy 无需遍历


使用渲染函数 ref
    ref ： 定义数据 简单类型

    reactive ：定义数据 复杂类型

    toRefs : 用于创建响应式对象 可用于解构
        问题: reactive 对象取出的所有属性值都是非响应式的
        解决： 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性。

    defineProps : 子组件接收父组件传值
        defineProps({ })

    computed : 用法
        1》let msgChange = computed({
                get(){
                    return msg.value.slice(1,3)
                },
                set(){
                    console.log("__我触发了_")
                    },
            })


        2》let msgChange = computed(()=>{
                return msg.value.slice(1,3)
            })


        3》let obj = reactive({
            name: "张三",
            age:18,
            str:computed(() =>{
                return obj.name.splice(1,2)
            })
        })



    watch:
        1》监听单个值
        watch(msg1,(newvalue,oldvalue) => {
            console.log("new__",newvalue, "__old__",oldvalue);
        },{
            immediate:true, // 获取初始化值
            deep:true, //深度监听 监听对象
        })

        2》多个值
        watch([arr1,arr2],(new,old)=>{
            
        })

        3》监听对象 属性
        watch(() => obj.arr , (new,old)=>{
            console.log(new,old);
        })

    watchEffect : 立即执行监听事件 简单监听事件 
        watchEffect(()=>{
            console.log(msg.value)
        }) 
```

### 路由 
```



```

### 父子组件
```

双向数据 
    父级 <children  v-model:res="res"/>

    子组件:
        const emit = defineEmits(['update:res']);
        function clickAddobj5() {
            emit("update:res","子组件修改值")
        }
    

```


### 兄弟组件传值


### iconfont 使用 
```
    iconfont url ： https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a
    存放路径 src/assets/iconfont/
    参考文章 ： https://blog.csdn.net/m0_37714008/article/details/125290697

    1.unicode
    <i class="iconfont">&#xe604;</i>
     

    2.font class
    <i class="iconfont icon-windows"/>

    3.symbol
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-huiyuan"></use>
    </svg>

```



### 优化插件  

#### 1.不用每个页面都import  
```
插件 ： unplugin-auto-import
安装 ： npm i -D unplugin-auto-import
参考文档 ： https://blog.csdn.net/qq_42611074/article/details/123036047
配置文件 ： vite.config.ts 
```

#### 2. animate.css 更优秀的交互效果库

````
安装：npm install animate.css -S
官网：https://animate.style/

````


#### 3.调接口 axios
````
基于 ajax 调用接口插件

npm install axios -S

````


#### 
```
setup位于beforeCreated之前,用于代替created 和beforeCreated
由于setup函数执行的时候项目还没有进行初始化，所以不能访问data或methods中的数据，console.log(this)显示为undefind。

```