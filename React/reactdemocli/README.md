### react推荐试用行内样式


### 事件绑定需要注意的事件 和 面试题
```
react 并不会真正的绑定事件到具体元素上，而是通过代理的方式绑定在根节点上。通过事件冒泡触发


react 依旧支持 event 事件对象 ， 和普通浏览器的 event 方法和属性基本一致。


setState处在同步的逻辑中，  异步更新状态，更新真实dom
setState处在异步的逻辑中，  同步更新状态，同步更新真实dom

setState 接受第二个参数， 第二个参数是回调函数， 状态和dom更新完后被触发
```

### 父子通信
```
父传子：

    父组件
    <Navbar title="xxx"/>

    navbar子组件接受
    this.props.title 

子传父

 
   
```



### 好用的原生js库
```
    滚动 better-scroll
    https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md

```



做好每一件小事
能记住的事情只有现在，而不是未来。 要让未来能记住，还要有迹可循