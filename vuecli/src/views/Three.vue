<template>
  <div>
    <!-- <div class="slideshow-container">
        <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="../../public/img/1.jpg" style="width:100%">
            <div class="text">文本 1</div>
        </div>
        
        <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="../../public/img/test.jpg" style="width:100%">
            <div class="text">文本 2</div>
        </div>
        
        <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="../../public/img/1.jpg" style="width:100%">
            <div class="text">文本 3</div>
        </div>
        
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
        </div>
        <br>
        
        <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span> 
        <span class="dot" onclick="currentSlide(2)"></span> 
        <span class="dot" onclick="currentSlide(3)"></span> 
        </div> -->
    <div>message: {{ message }}</div>
    <div>在页面内倒序，效率低</div>
    <div>{{ message.split("").reverse().join("") }}</div>
    <br />
    <div>computed内操作</div>
    <div>倒序： {{ reversedMessage }}----{{ noew }}</div>
    <div>{{ reversedMessage1() }}</div>

    <Button @click="handleToXiaoyan">校验</Button>
  </div>
</template>

<script>
import { isValidCron } from "cron-validator";

export default {
  data() {
    return {
      slideIndex: 1,
      message: "hello world",
      quesition: "",
      //showxiaoyan:""
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
    noew() {
      return Date.now(); //不会持续刷新，只会在进入页面时刷新，因为computed有缓存机制
    },
  },
  watch: {
    //如果question发生改变这个函数就会执行
    quesition() {},
  },
  props: {},
  methods: {
    reversedMessage1() {
      return this.message.split("").reverse().join("");
    },
    handleToXiaoyan() {
      let corns = "1 * * * * *"
      if (
        isValidCron(corns, {
          seconds: true,
          alias: true,
          allowBlankDay: true,
          allowSevenAsSunday: true,
        })
      ) {
        alert(corns);
      } else {
        console.log("error");
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
}

/* 幻灯片容器 */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* 下一张 & 上一张 按钮 */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* 定位 "下一张" 按钮靠右 */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* 标题文本 */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* 数字文本 (1/3 等) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* 标记符号 */
.dot {
  cursor: pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* 淡出动画 */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>