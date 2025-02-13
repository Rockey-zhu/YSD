<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      v-anime="animeImg"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import anime from 'animejs/lib/anime.es.js';

// @Options({
//   components: {},
// })
export default {
  data() {
    return {
      animeImg: {
        targets: ".dir-normal",
        translateY: 100,  //X轴位移
        easing: "easeInOutQuad",//时间曲线
        duration: 1000,//耗时
        loop:true,//动画循环次数---true无限；  --- number次数
        direction: 'alternate',//方向
      },
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  img {
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
  }
}
</style>
