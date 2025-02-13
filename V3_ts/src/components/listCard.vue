<template>
  <div class="listCard">
    <div class="L_left">
      <div class="L_Img">
        <!-- <img :src="bgUrl"/> -->
        <i class="el-icon-picture" v-if="Type === 0"></i>
        <i class="el-icon-tickets" v-else-if="Type === 1"></i>
        <i class="el-icon-message-solid" v-else-if="Type === 2"></i>
        <i class="el-icon-film" v-else-if="Type === 3"></i>
        <i class="el-icon-files" v-else-if="Type === 4"></i>
        <i class="el-icon-box" v-else-if="Type === 5"></i>
      </div>
      <div class="L_Name">
        <div class="L_title">{{ title }}</div>
        <div class="L_level">{{ level }}</div>
      </div>
    </div>
    <div class="L_right">
      <el-button type="primary" @click="DownLoadFile()">下载</el-button>
      <el-button type="primary" @click="fileReview()">预览</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Vue from "vue";
import { toRefs, defineProps } from "vue";
import adminAPI from "../api/adminAPI";

const props = defineProps({
  //子组件接收父组件传递过来的值
  Type: {
    // 0图片；1文件；2mp3; 3mp4; 4.压缩包;5.安装包
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "",
  },
  level: {
    type: String,
    default: "",
  },
  downloadUrl: {
    type: String,
    default: "",
  },
});
const { bgUrl, title, level, downloadUrl } = toRefs(props);

function DownLoadFile() {
  console.log("_downloadUrl__", downloadUrl.value);
  adminAPI.downflie({
    url:downloadUrl.value,
    title:title.value,
  })
  // window.open(downloadUrl.value);
}
function fileReview(){
  // window.open(`https://view.officeapps.live.com/op/view.aspx?src=${downloadUrl.value}`);
  window.open(`${downloadUrl.value}`);

};


</script>

<style lang="less" scoped>
.listCard {
  display: flex;
  justify-content: space-between;
  .L_left {
    display: flex;
    .L_Img {
      background: #3a3b3c;
      border-radius: 8px;
      height: 4rem;
      width: 4rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        width: 60%;
        // height: 60%;
        font-size: 28px;
        color: white;
      }
    }
    .L_Name {
      margin-left: 20px;
      .L_title {
        color: #6b97e8;
        font-size: 18px;
        font-weight: 600;
      }
      .L_level {
        color: #a6b1c2;
      }
    }
  }
  .L_right {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
}
</style>
