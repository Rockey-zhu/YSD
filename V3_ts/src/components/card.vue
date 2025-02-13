<template>
  <div :style="`background:` + bgcolor + `;`" class="cardContent">
    <div style="display: flex" class="topContent">
      <div>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="icon"></use>
        </svg>
      </div>
      <div>
        <div class="C_title">{{ title }}</div>
        <div class="C_contents">{{ contents }}</div>
      </div>
    </div>
    <div class="C_bottom">{{ footContent }}</div>
  </div>
</template>
<script setup  lang="ts">
import { toRefs, defineProps } from "vue";
const props = defineProps({
  //子组件接收父组件传递过来的值
  bgcolor: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  contents: {
    type: String,
    default: "",
  },
  footContent: {
    type: String,
    default: "",
  },
});
//使用父组件传递过来的值
const { bgcolor, title, icon, contents, footContent } = toRefs(props);
</script>

<style lang="less" scoped>
.cardContent {
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.5s;
  overflow: hidden;
  .topContent {
    margin: 10px;
  }
  .icon {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .C_title {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 800;
  }
  .C_contents {
    font-size: 14px;
    color: #767785;
  }

  .C_bottom {
    font-size: 14px;
    color: #767785;
  }
}
.cardContent:hover {
  background: #434343 !important;
  opacity: 0.8;
  transition: all 0.5s;
}
</style>