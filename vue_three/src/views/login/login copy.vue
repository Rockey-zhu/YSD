<template>
  <div class="wrap">
    <div class="container">
      <Card :bordered="false" class="cardstyle">
        <p slot="title" style="text-align: center;color:#111;font-size:21px">后台管理系统</p>

        <div style="display: flex; justify-content: cneter">
          <Input
            v-model="model.username"
            placeholder="账号"
            style="width: 300px; margin: 0 auto"
          />
        </div>
        <div style="display: flex; justify-content: cneter ">
          <Input
            v-model="model.password"
            placeholder="密码"
            style="width: 300px; margin: 0 auto;"
            type="password"
          />
        </div>
        <div style="display: flex; justify-content: cneter">
          <Button type="primary" style="width: 320px; margin: 5px auto" @click="login"
            >登&nbsp;&nbsp;&nbsp;录</Button
          >
        </div>
        <p class="change_link" style="text-align: center">
          <span class="text">忘记密码了 ?</span>
          <a href="#" class="to_login"> 点击此处 </a>
        </p>
      </Card>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{ 
      model:{}
    }
  },
  methods: {
    async login(){
      const res = await this.$http.post('login',this.model);
      localStorage.token = res.data;
      this.$router.push({name:'createEdit'});
      this.$Message.success("登陆成功");
    }
  }

};
</script>

<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.wrap {
  width: 100%;
  height: 100%;
  padding: 10% 0;
  position: fixed;
 
   background: url('../../assets/a.png') no-repeat;
   background-size: 100% 100%;
  background: -webkit-linear-gradient(to bottom right, #50a3a2, #53e3a6);
}
.opacityPage {
  background: #041656;
  opacity: 0.5;
  border-radius: 40px 4px 4px 4px;
  width: 40%;
  height: 400px;
  margin: 0 auto;
}
.cardstyle{
    width: 500px;
    background:rgba(209, 226, 240, 0.4);
    margin: 0 auto;
}
.container h1 {
  text-align: center;
  color: #ffffff;
  font-weight: 500;
}
.container input {
  border: 0;
  outline: 0;
  line-height: 24px;
  margin: 32px auto;
}

.to_login {
  color: #a7c4c9;
}
.text {
  color: #e2dfe4;
}
.wrap ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -20;
}
.wrap ul li {
  list-style-type: none;
  display: block;
  position: absolute;
  bottom: -120px;
  width: 15px;
  height: 15px;
  z-index: -8;
  border-radius: 50%;
  box-shadow: inset -30px -30px 75px rgba(0, 0, 0, 0.2),
    inset 0px 0px 5px rgba(0, 0, 0, 0.5), inset -3px -3px 5px #089cef,
    0 0 20px rgba(255, 255, 255, 0.75);
  background-image: radial-gradient(#d6e6ff, #77b5fe);
  animotion: square 25s infinite;
  -webkit-animation: square 25s infinite;
}
.wrap ul li:nth-child(1) {
  left: 0;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(2) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 15s;
  -moz-animation-duration: 15s;
  -o-animation-duration: 15s;
  -webkit-animation-duration: 11s;
}
.wrap ul li:nth-child(3) {
  left: 20%;
  width: 25px;
  height: 25px;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(4) {
  width: 50px;
  height: 50px;
  left: 30%;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  -o-animation-delay: 3s;
  animation-delay: 3s;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(5) {
  width: 60px;
  height: 60px;
  left: 40%;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(6) {
  width: 75px;
  height: 75px;
  left: 50%;
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
  -o-animation-delay: 7s;
  animation-delay: 7s;
}
.wrap ul li:nth-child(7) {
  left: 60%;
  width: 30px;
  height: 30px;
  animation-duration: 8s;
  -moz-animation-duration: 8s;
  -o-animation-duration: 8s;
  -webkit-animation-duration: 8s;
}
.wrap ul li:nth-child(8) {
  width: 90px;
  height: 90px;
  left: 70%;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  -o-animation-delay: 4s;
  animation-delay: 4s;
}
.wrap ul li:nth-child(9) {
  width: 50px;
  height: 50px;
  left: 80%;
  animation-duration: 20s;
  -moz-animation-duration: 20s;
  -o-animation-duration: 20s;
  -webkit-animation-duration: 20s;
}
.wrap ul li:nth-child(10) {
  width: 75px;
  height: 75px;
  left: 90%;
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  animation-delay: 6s;
  animation-duration: 30s;
  -moz-animation-duration: 30s;
  -o-animation-duration: 30s;
  -webkit-animation-duration: 30s;
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    bottom: 400px;
    -webkit-transform: translateY(-500);
    transform: translateY(-500);
  }
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    bottom: 400px;
    -webkit-transform: translateY(-500);
    transform: translateY(-500);
  }
}
</style>