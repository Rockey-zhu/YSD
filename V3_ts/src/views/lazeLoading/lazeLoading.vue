<template>
  <div class="lazeLoading">
    <div class="top">
        <span @click="handleBack()"><i class="el-icon-arrow-left"></i>返回 </span>
    </div>
    <div class="content">
       
      <div class="card" v-for="(item, key) in lazeLoadingList">
        <img src="" lazyLoad="true" :data-src="item.Url" class="lazy_img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { lazeLoadingStore } from "@/stores/lazeLoading";
import { useRouter } from "vue-router";

const LazeLoadingStore = lazeLoadingStore();
const lazeLoadingList = storeToRefs(LazeLoadingStore).ListData;
const router = useRouter();

// 懒加载
// let imageElements = Array.prototype.slice.call(
//     document.querySelectorAll(".lazy_img")
//   );
//   let len = imageElements.length;
let imageElements: any = [];
let len = 0;
function inViewShow() {
  for (let i = 0; i < len; i++) {
    let imageElement = imageElements[i];
    const rect = imageElement.getBoundingClientRect(); // 出现在视野的时候加载图片
    if (
      rect.top < document.documentElement.clientHeight &&
      imageElement.dataset.src != ""
    ) {
      imageElement.src = imageElement.dataset.src; // 移除掉已经显示的
      imageElement.dataset.src = "";
      imageElements.splice(i, 1);
      len--;
      i--;
    }
  }
}

document.addEventListener("scroll", inViewShow);

function getList() {
  LazeLoadingStore.searchList().then((res: any) => {
    imageElements = Array.prototype.slice.call(
      document.querySelectorAll(".lazy_img")
    );
    len = imageElements.length;
    inViewShow();
  });
}
function handleBack(){
    router.back(); 
}
onMounted(async () => {
  getList();
});
</script>

<style lang="less">
.lazeLoading {
  min-height: 100vh;
  background-color: #f38181;
  overflow: hidden;
  .top{
    height: 30px;
    background-color: #95e1d3;
    font-size: 20px;
    padding: 5px;
    span{
        cursor:pointer;
    }
  }
  .content {
    height: 100%;
    width: 600px;
    margin: 20px auto;
    overflow: hidden;
    background-color: #fce38a;
    display: flex;
    flex-wrap: wrap;
    .card {
      width: 300px;
      height: auto;
      margin: 10px;
      display: flex;
      justify-content: center;
      padding: 5px;
      background-color: #eaffd0;
      border-radius: 8px;
      .lazy_img {
        height: 100px;
        width: 100px;

        background: url("../../assets/img/loading.gif") no-repeat center;
      }
    }
  }
}
</style>
