<template>
  <loadingBar></loadingBar>
  <div class="homeBg">
    <router-view></router-view>
    <el-row class="header">
      <el-col :span="3" class="headerTitle">Learning Demo</el-col>
      <el-col :span="14" class="listArea">
        <div class="list">
          <el-dropdown>
            <span class="el-dropdown-link"> 大屏 </span>
            <template #dropdown>
              <el-dropdown-menu class="dropMenu">
                <el-dropdown-item @click="handleToOpenScreen1"
                  >疫情大屏展示</el-dropdown-item
                >
                <el-dropdown-item>3D大屏展示</el-dropdown-item>
                <el-dropdown-item @click="handleToOpenEchars"
                  >Echarts</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>

        <div class="list" @click="handleToOpenScreen2">V3</div>
        <div class="list">
          <el-dropdown>
            <span class="el-dropdown-link"> 图形 </span>
            <template #dropdown>
              <el-dropdown-menu class="dropMenu">
                <el-dropdown-item @click="handleToOpenScreen1"
                  >WebGL相关</el-dropdown-item
                >
                <el-dropdown-item>ThreeJs</el-dropdown-item>
                <el-dropdown-item @click="handleToOpenEchars"
                  >导入建模</el-dropdown-item
                >
                <el-dropdown-item @click="JumperRouter('lazeLoading')"
                  >懒加载</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="list">文章</div>
        <div class="list">加入群聊</div>
      </el-col>
      <el-col :span="7" class="userArea">
        <div style="margin-right: 20px">外观</div>
        <div style="margin-right: 20px">你好，User</div>
        <div style="line-height: 95px">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huiyuan"></use>
          </svg>
        </div>
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span="12" class="topLeft"> 用户中心 </el-col>
      <el-col :span="12" class="topRight">
        <el-button type="info">每日签到</el-button>
      </el-col>
    </el-row>
    <el-row style="isplay: flex; justify-content: center">
      <!-- <el-col :span="1"></el-col> -->
      <el-col :span="5" v-for="(item, index) in cardsItems" :key="index">
        <card
          :bgcolor="item.bgcolor"
          :title="item.title"
          :contents="item.contents"
          :icon="item.icon"
          :footContent="item.footContent"
        ></card>
      </el-col>
      <!-- <el-col :span="1"></el-col> -->
    </el-row>
    <el-row style="isplay: flex; justify-content: center">
      <el-col :span="1"></el-col>
      <el-col :span="12">
        <div class="Maincontent">
          <div class="M_header">
            <div>
              <svg class="M_icon" aria-hidden="true">
                <use xlink:href="#icon-weibiaoti-2-01"></use>
              </svg>
              素材与资料下载
            </div>
            <div><el-button type="primary" @click="handleToViewMoreDataPreview()">更多</el-button></div>
          </div>
          <div class="M_DifKind">
            <div
              v-for="(value, key) in customShowList.value"
              :class="[
                'M_small_card',
                { M_small_card_active: activeNum == key },
              ]"
              @click="handleToChangeCustom(value, key)"
              :key="key"
            >
              <div><i class="iconfont icon-windows M_icon" /></div>
              <div class="M_Name">{{ value.title }}</div>
            </div>
            <!-- <div class="M_small_card">
              <div><i class="iconfont icon-android M_icon" /></div>
              <div class="M_Name">Android</div>
            </div>
            <div class="M_small_card">
              <div><i class="iconfont icon-macos M_icon" /></div>
              <div class="M_Name">Mac OS</div>
            </div>
            <div class="M_small_card">
              <div><i class="iconfont icon-macos M_icon" /></div>
              <div class="M_Name">Iphone OS</div>
            </div> -->
          </div>
          <div class="borders"></div>

          <div style="height: 29vh; overflow: hidden; overflow-y: scroll">
            <div
              class="M_contents M_list"
              v-for="(item, index) in downLoadList"
              :key="index"
            >
              <listCard
                style="margin-bottom: 10px"
                :Type="item.Type"
                :title="item.Name"
                :level="item.Level"
                :downloadUrl="item.Url"
              ></listCard>
            </div>
            <div v-if="downLoadList.length === 0" class="NoData">暂无数据</div>
          </div>
        </div>
      </el-col>
      <el-col :span="8" style="display: flex; flex-direction: column">
        <div class="Maincontent" style="height: ">
          <div class="M_header">
            <svg class="M_icon" aria-hidden="true">
              <use xlink:href="#icon-weibiaoti-2-21"></use>
            </svg>
            订阅地址
          </div>
          <div class="M_contents">
            <el-tag
              v-for="item in learningList"
              :key="item.label"
              :type="RadminTagType()"
              effect="dark"
              class="el_tags"
              @click="clickOpenTag(item.url)"
            >
              {{ item.label }}
            </el-tag>
          </div>
          <div class="M_foot">查看更多</div>
        </div>
        <div class="Maincontent flex-fill">
          <div class="M_header">
            <svg class="M_icon" aria-hidden="true">
              <use xlink:href="#icon-weibiaoti-2-21"></use>
            </svg>
            下载排行
          </div>
          <div class="remarks_text">近期资料下载量排行统计</div>
          <div id="DownloadStatisticsId" class="DownloadStatisticsId M_contents Nothing"></div>
          <!-- <div class="M_contents Nothing">暂无记录</div> -->
        </div>
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { toRefs, reactive } from "vue";
import typesJson from "@/assets/JSON/tagList.json";
import card from "@/components/card.vue";
import listCard from "@/components/listCard.vue";
import loadingBar from "@/components/loadingbar.vue";
import { onMounted, } from "vue";
import { storeToRefs } from "pinia";
import { useCustomStore } from "@/stores/custom";
import { useFileListStore } from "@/stores/fileList";
import { downloadRankStore } from "@/stores/downloadRank";
import * as echarts from "echarts";

const customStore = useCustomStore();
const FileListStore = useFileListStore();
const DownLoadStore = downloadRankStore();
const router = useRouter();
// 跳转
function JumperRouter(names:string){
  router.push({
    name: names,
  });
}
function handleToOpenScreen1() {
  router.push({
    name: "plague",
  });
}
function handleToOpenEchars() {
  router.push({
    name: "echarsLeaning",
  });
}
function handleToLazingLoad() {
  router.push({
    name: "echarsLeaning",
  });
}
function handleToOpenScreen2() {
  router.push({
    path: "/view",
  });
}

let cardsItems = reactive([
  {
    bgcolor: "#242526",
    icon: "#icon-biji",
    title: "43天",
    contents: "会员时长",
    footContent: "Pro会员:2022-09-06 到期",
  },
  {
    bgcolor: "#242526",
    icon: "#icon-xiazai",
    title: "1.16TB",
    contents: "剩余流量",
    footContent: "下次充值：未购买套餐",
  },
  {
    bgcolor: "#242526",
    icon: "#icon-huore",
    title: "0/无限制",
    contents: "在线设备",
    footContent: "上次使用:09-06 20:23:22",
  },
  {
    bgcolor: "#242526",
    icon: "#icon-mima",
    title: "$0.00",
    contents: "剩余流量",
    footContent: "累计金额:$0.00",
  },
]);
// 素材
const downLoadList = storeToRefs(FileListStore).ListData;

// 素材资料下载
let customShowList = reactive({ value: [] });
let activeNum = ref(0);
function getLoadingList() {
  customStore.searchCustomList().then((res: any) => {
    if (res.code === 2000) {
      customShowList.value = res.data.slice(0, 4);
      FileListStore.updateState({
        searchValue: res.data[0].title,
      });
      FileListStore.searchList();
    }
  });
}
function handleToChangeCustom(value: any, key: number) {
  activeNum.value = key;
  FileListStore.updateState({
    searchValue: value.title,
  });
  FileListStore.searchList();
}

// 订阅地址
let learningList = reactive(typesJson);
let tagTypeArr = ["success", "info", "warning", "danger"];
function RadminTagType() {
  return tagTypeArr[Math.floor(Math.random() * 4)];
}
function clickOpenTag(url: string) {
  window.open(url);
}

// 查看更多
function handleToViewMoreDataPreview(){
  console.log("___chufa_")
  router.push({
    name: "dataPreview",
  });
}

// 下载排行柱状图
function initCategory() {
  let tdata = DownLoadStore.$state.ListLineOption;
  let lineData = DownLoadStore.$state.selectionList;
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        //鼠标移入提示框
        type: "cross",
        label: {
          //坐标轴高亮
          show: true,
          backgroundColor: "rgba(18,82,147,0.8)",
          color: "#ffe05c",
          borderColor: "rgba(18,82,147,0.6)",
          shadowColor: "rgba(0,0,0,0)",
          shadowOffsetY: 0,
        },
      },
    },
    xAxis: {
      type: "category",
      data: lineData,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#fff",
          width: 0,
          type: "solid",
        },
      },
    },
    yAxis: {
      name: "次", //刻度
      type: "value",
      position: "left",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#fff",
          width: 0,
          type: "solid",
        },
      },
    },
    series: [
      {
        data: tdata,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };
  const charts = echarts.init(document.querySelector(`#DownloadStatisticsId`) as HTMLElement);
  charts.setOption(option);
}
// created 和 beforeCreate 不需要写，直接卸载函数里即可

onMounted(async () => {
  // 初始下载列表
  getLoadingList();
  DownLoadStore.searchCustomList().then(()=>{
    initCategory();
  })

  

});
</script>
<style lang="less" scoped>
body {
  background: #18191a;
}
.homeBg {
  background: #18191a;
  color: #fff;
  height: 100%;
  width: 100%;
}
.header {
  background: #242526;
  min-height: 80px;
  .headerTitle {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    text-shadow: -5px 5px 5px #d2d2d2;
  }
  .listArea {
    display: flex;
    .list {
      margin: 0 26px;
      font-size: 16px;
      font-weight: 800;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #d2d2d2;
      .el-dropdown-link {
        color: #d2d2d2;
        font-size: 16px;
      }
    }
  }
  .userArea {
    display: flex;
    line-height: 80px;
    justify-content: flex-end;
    padding: 0 20px;
    font-size: 15px;
    font-weight: 800;
  }
}
.top {
  margin: 30px 0;
  .topLeft {
    padding-left: 4vw;
    font-size: 24px;
  }
  .topRight {
    display: flex;
    padding-right: 20px;
    justify-content: flex-end;
  }
}
.Maincontent {
  margin: 20px;
  margin-top: 10px;
  background: #242526;
  border-radius: 10px;
  padding: 20px;
  .M_header {
    color: #6c91f5;
    font-weight: 800;
    font-size: 20px;
    display: flex;
    justify-content: space-between;

    .M_icon {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
  .M_DifKind {
    margin-top: 30px;
    display: flex;

    .M_small_card {
      margin: 5px;
      width: 12vw;
      height: 12vh;
      border: 2px solid #2d2e2f;
      border-radius: 8px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;
      .M_icon {
        font-size: 36px;
        padding-bottom: 10px;
      }
      .M_Name {
        font-size: 16px;
        margin-top: 15px;
      }
    }
    .M_small_card:hover {
      background: #434343;
      opacity: 0.8;
      transition: all 0.5s;
    }
    .M_small_card_active {
      background: #434343;
    }
  }
  .borders {
    border: 2px dashed #2d2e2f;
    width: 100%;
    margin: 20px 0;
  }
  .M_contents {
    margin: 10px 0;
    .el_tags {
      margin: 5px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.5s;
    }
    .el_tags:hover {
      background: #434343;
      opacity: 0.8;
      transition: all 0.5s;
    }
  }
  .M_foot {
    color: #767785;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: right;
    padding-right: 10px;
  }
  .M_list {
    padding: 0 20px;
  }
}
.flex-fill {
  flex: 1;
}

.remarks_text {
  font-size: 14px;
  color: #767785;
  margin: 10px 0;
}
.Nothing {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: calc(100% - 100px);
}
</style>
<style type="text/css">
.icon {
  width: 2em;
  height: 2em;
  fill: currentColor;
  overflow: hidden;
}
.el-popper.is-light {
  border: 1px solid #242526;
  background: #242526;
}
.el-dropdown-menu__item {
  color: #d2d2d2;
}
.dropMenu {
  background: #242526;
}
.NoData {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24px;
  color: #c1c1c1;
}
.DownloadStatisticsId{
  width: 100%;
  height: 220px!important;
}
</style>
<style>
/*里面的代码可以根据自己需求去进行更改*/
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 4px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #2d2e2f;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(182, 95, 95, 0.1);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: #18191a;
}
</style>
