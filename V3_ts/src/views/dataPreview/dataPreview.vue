<template>
  <div class="dataPreviewClass">
    <div class="content">
      <el-popover
        placement="top-start"
        title="Title"
        :width="200"
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button class="m-2">Hover to activate</el-button>
        </template>
      </el-popover>
    </div>
    <div class="foot">
      <div class="setting">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#icon-chilun`"></use>
        </svg>
      </div>
      <div>1</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
</script>

<style lang="less">
.dataPreviewClass {
  background-image: url("../../assets/img/clod.jpg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  .foot {
    bottom: 0;
    position: fixed;
    display: flex;
    // box-shadow: 0 2px rgba(255,255,255,.5), 0 8px 13px rgba(0,0,0,.15) inset;
    background: #e4e4e4;
    width: 100vw;
    padding: 2px 10px;
    .setting {
      cursor: pointer;
      margin-right: 10px;
    }
  }
}
</style>
