<template>
  <div>
    <div id="pdfDom" class="pdfDom">
      <slide-verify
        :l="40"
        :r="6"
        :w="350"
        :h="170"
        :imgs="picArray"
        :show="false"
        slider-text="向右滑动完成验证"
        ref="slideverify"
        @success="onSuccess"
      ></slide-verify>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picArray: [require("@/assets/logo.png")],
    };
  },
  methods: {
    onSuccess() {},
  },
};
</script>

<style></style>
