<template>
<div class="main">
  <div class="about">
    <div
      v-for="(item, index) in startsCount"
      :key="index"
      class="star"
      ref="star"
    ></div>

    <!-- <h1>点我:{{$store.state.num}}</h1>
    <h1>点我:{{num}}</h1>
    <h1>点我：{{$store.getters.getNum}}</h1>

    <h1>{{total}} </h1> -->
    <!-- <div>
      <textarea v-model="text" placeholder="输入......"></textarea>
      <p>输入的内容是：{{text}}</p>
      <a href="../../static/1.html">11</a>
      
      <a href="https://bis.ab-inbev.cn/BIPortalReportCenter/#/pbiReportOutside?ReportId=275&ReportName=Pre%20S%26L&AccessPointTypeId=6&isShowBackBtn=0" target="_top">跳转至bis登陆界面</a>
      <iframe src="../../static/1.html"></iframe>
    </div> -->
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // total:this.$store.state.total,
      // text:''
      startsCount: 800, //星星数量
      distance: 800, //间距
    };
  },
  components: {},
  computed: {
    // num(){
    //   return this.$store.state.num
    // },
  },
  mounted() {
    let starArr = this.$refs.star;
    starArr.forEach((item) => {
      let speed = 0.2 + Math.random() * 1;
      let thisDistance = this.distance + Math.random() * 300;
      item.style.transformOrigin = `0 0 ${thisDistance}px`;
      item.style.transform = `
        translate3d(0,0,-${thisDistance}px)
        rotateY(${Math.random() * 360}deg)
        rotateX(${Math.random() * -50}deg)
        scale(${speed},${speed})`;
    });
  },
};
</script>

<style lang="less">
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
.main{
  background: radial-gradient(200% 100% at bottom center , #f7f7b5,#e96f9e);
  background: radial-gradient(200% 100% at top center , #1b2947 10%,#75517d 40%,#e96f92 65%,#f7f7b5);
  background-attachment: fixed;
  width:100vm;
  height:90vh;
}
.about {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
  bottom: 0;
}

.star {
  width: 1px;
  height: 2px;
   background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border: 1px solid  linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);
  border-radius: 40px;
}
</style>