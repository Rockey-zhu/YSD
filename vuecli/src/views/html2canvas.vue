<template>
  <div >
    <div @click="getPdf()">打印PDF</div>
    <div id="pdfDom" class="pdfDom">
      <div style="height:595px;width: 595px;background: red; align-items: center;margin: auto;">111</div>
    </div>
  </div>
</template>

<script>
import printJS from "print-js";
import html2Canvas from "html2Canvas";
export default {
  data() {
    return {
      htmlTitle: "pdf文件名",
    };
  },
  methods: {
    goPrint() {
      this.isPrint = true;
      html2Canvas(this.$refs.print, {
        allowTaint: true,
        taintTest: false,
        useCORS: true,
        dpi: window.devicePixelRatio * 4,
        scale: 4,
      }).then((canvas) => {
        const url = canvas.toDataURL();
        printJS({
          printable: url, // 要打印的id
          type: "image",
          style: "@page{size:auto;margin: 0cm 1cm 0cm 1cm;}", //去除页眉页脚
        });
        this.isPrint = false;
      });
    },
  },
};
</script>

<style></style>
