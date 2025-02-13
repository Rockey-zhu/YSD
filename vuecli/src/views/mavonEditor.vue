<template>
  <div id="main">
    <div id="v_container"></div>
  </div>
</template>
<script>
import { GVerify } from "../assets/code";

export default {
  data() {
    return {
      values: "",
    };
  },
  mounted() {
    this.verifyCode = new GVerify("v_container");
  },
};
</script>