<template>
  <div class="box">
    <div class="screen_header">
      <div class="letf_header">
        <i class="iconfont">&#xe6f3;</i>
        <span> 9℃</span>
        <span>多云 13~16℃ 东北风1级</span>
        <span>AQI: 40</span>
        <div>优</div>
      </div>
      <div class="center_header">
        <dv-decoration5 :dur="2" class="center_header_de" />
        <div class="center_header_title">全国供排水运行</div>
      </div>
      <div class="right_header">
        <div>2022-01-01</div>
        <div>星期一</div>
        <div>{{ nowTime }}</div>
      </div>
    </div>
    <div class="screen_content">
      <div class="left_content">
        <dv-border-box-11 title="管理指挥体系" :title-width="200">
          <div dv-bg class="dv_content">
            <div class="person_information">
              <div class="card_title">区信息</div>
              <div class="persion_info_content">
                <div class="persion_info_head">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                  </svg>
                  <div>
                    <div>值班主任</div>
                    <div class="NameColor">李一</div>
                  </div>
                </div>
                <div class="persion_info_post">
                  <div>
                    <span>城运中心指挥长</span>
                    <span class="NameColor">王二</span>
                  </div>
                  <div>
                    <span>应急联动值班长</span>
                    <span class="NameColor">张三</span>
                  </div>
                  <div>
                    <span>平台运行值班长</span>
                    <span class="NameColor">李四</span>
                  </div>
                  <div>
                    <span>联席指挥召集人</span>
                    <span class="NameColor">王五</span>
                  </div>
                </div>
                <dv-decoration-2 :reverse="true" style="width: 5px; height: 80px" />
                <div class="persion_info_number">
                  <div>
                    <span>值班人员</span>
                    <span class="numberColor">36人</span>
                  </div>
                  <div>
                    <span>信息员</span>
                    <span class="numberColor">16人</span>
                  </div>
                  <div>
                    <span>监督员</span>
                    <span class="numberColor">16人</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="splitLine" />
            <div class="sce_management">
              <div class="card_title">场景管理</div>
              <div class="sce_management_content">
                <div style="flex: 1" class="ideFontSize">日常管理场景</div>
                <div class="splitLineRow" />
                <div style="flex: 2">
                  <div class="ideFontSize" style="">专项场景管理</div>
                  <div class="splitLine" style="margin: 10px auto" />
                  <div style="display: flex; justify-content: space-evenly">
                    <div>有序</div>
                    <div>/</div>
                    <div>安全</div>
                    <div>/</div>
                    <div>干净</div>
                  </div>
                </div>
                <div class="splitLineRow" />
                <div style="flex: 1" class="ideFontSize">应急管理场景</div>
              </div>
            </div>
            <div class="splitLine" />
            <div class="microplatform">
              <div class="card_title">微平台</div>
              <div class="microplatform_content">
                <div style="display: flex; align-items: center">
                  <div style="color: #fff; font-size: 18px; padding-right: 15px">
                    工作站
                  </div>
                  <div style="padding-right: 5px; font-size: 20px" class="numberColor">
                    1231
                  </div>
                  <div>个</div>
                </div>
                <div style="display: flex; align-items: center">
                  <svg class="icon" aria-hidden="true" style="padding-right: 15px">
                    <use xlink:href="#icon-weixin"></use>
                  </svg>
                  <div style="padding-right: 5px; font-size: 20px" class="numberColor">
                    2333
                  </div>
                  <div>人</div>
                </div>
              </div>
            </div>
            <div class="splitLine" />
            <div>
              <div class="card_title">街镇人员信息</div>
              <div id="streentInfoCon" class="streentInfoConClass"></div>
            </div>
          </div>
        </dv-border-box-11>
      </div>
      <div class="center_content">
        <div class="center_content_map" id="china">1</div>
        
      </div>
      <div class="right_content">
        <div class="right_top">
          <dv-border-box-11 title="水压数据监测" :title-width="200">
            <div dv-bg class="dv_content">
              <div class="WaterGageTitleCard">
                <div>北村水厂</div>
                <div style="display: flex">
                  <div class="numberColor">200&nbsp;&nbsp;</div>
                  <div>KPa</div>
                </div>
              </div>
              <div class="WaterGageTitleCard">
                <div>南村水厂</div>
                <div style="display: flex">
                  <div class="numberColor">200&nbsp;&nbsp;</div>
                  <div>KPa</div>
                </div>
              </div>
              <div class="WaterGageTitleCard">
                <div>东村水厂</div>
                <div style="display: flex">
                  <div class="numberColor">200&nbsp;&nbsp;</div>
                  <div>KPa</div>
                </div>
              </div>
              <div class="WaterGageTitleCard">
                <div>西村水厂</div>
                <div style="display: flex">
                  <div class="numberColor">200&nbsp;&nbsp;</div>
                  <div>KPa</div>
                </div>
              </div>
              <div class="WaterGageTitleCard">
                <div>中村水厂</div>
                <div style="display: flex">
                  <div class="numberColor">200&nbsp;&nbsp;</div>
                  <div>KPa</div>
                </div>
              </div>
              <div class="WaterGageTitleCard">
                <div>上村水厂</div>
                <div style="display: flex">
                  <div class="numberColor">200&nbsp;&nbsp;</div>
                  <div>KPa</div>
                </div>
              </div>
              <div class="WaterGageTitleCard">
                <div>下村水厂</div>
                <div style="display: flex">
                  <div class="numberColor">200&nbsp;&nbsp;</div>
                  <div>KPa</div>
                </div>
              </div>
            </div>
          </dv-border-box-11>
        </div>
        <div class="right_center">
          <div demo-bg>
            <dv-border-box-8 :dur="3">
              <div dv-bg class="dv_content">
                <div class="card_title">污水处理流量(当前)</div>
                <div>XXX污水厂</div>
                <div class="numberColor">50000</div>
                <div>m³</div>
              </div>
            </dv-border-box-8>
          </div>
        </div>
        <div class="right_bootom">
          <dv-border-box-11 title="水厂运行情况" :title-width="200">
            <div dv-bg class="dv_content">
              <div class="right_card">
                <div class="right_title">航头水厂</div>
                <div class="right_img">
                  <img src="../../assets/img/water/1.jpeg" style="width: 150px" />
                </div>
                <div class="right_fontcontent">
                  <div  class="content_list">
                    <div>出厂压力</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">260</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>流量</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">200</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>当天累计</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">210</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>浊度</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">0.03</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>余氯</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">0.03</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right_card">
                <div class="right_title">航头水厂</div>
                <div class="right_img">
                  <img src="../../assets/img/water/2.jpeg" style="width: 150px" />
                </div>
                <div class="right_fontcontent">
                  <div  class="content_list">
                    <div>出厂压力</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">260</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>流量</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">200</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>当天累计</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">210</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>浊度</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">0.03</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>余氯</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">0.03</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right_card">
                <div class="right_title">航头水厂</div>
                <div class="right_img">
                  <img src="../../assets/img/water/3.jpeg" style="width: 150px" />
                </div>
                <div class="right_fontcontent">
                  <div class="content_list">
                    <div>出厂压力</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">260</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>流量</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">200</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>当天累计</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">210</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>浊度</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">0.03</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                  <div  class="content_list">
                    <div>余氯</div>
                    <div style="display: flex">
                      <div class="numberColor number_right">0.03</div>
                      <div>m³/s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dv-border-box-11>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, reactive, ref } from "vue";
import { onMounted } from "vue";
import * as echarts from "echarts";
import "@/assets/map.js";
import { useCounterStore } from "@/stores/index";
let stores = useCounterStore();

// 为地图赋值以及地图生成
function initCenterChart() {
  console.log("__stores.allProvince._",stores.allProvince)
  const data = []
  let option = {
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "90%",
      itemStyle: {
        //normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E" // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD" // 50% 处的颜色
            }
          ],
          global: true // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5
        //},
      },
      emphasis: {
        areaColor: "#0f5d9d"
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            //normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9"
            }
            //}
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12
          }
        }
      ]
    },
    series: [
      {
        type: "map",
        // selectedMode: "multiple",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "90%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 16
        },
        itemStyle: {
          //normal: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8
          //},
        },
        emphasis: {
          //区域
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff"
          }
        },
        data: data
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        symbol: "pin",
        symbolSize: [45, 45],
        label: {
          //normal: {
          show: true,
          color: "#fff",
          formatter(value: any) {
            return value.data.value[2];
          }
          //}
        },
        itemStyle: {
          //normal: {
          color: "#D2691E" //标志颜色
          //}
        },
        data: data
      }
    ]
  };

  const charts = echarts.init(document.querySelector(`#china`) as HTMLElement);
  charts.setOption(option);
  charts.on("click", (e: any) => {
    stores.provinceAllCity = e.data;
    stores.total2 = e.data.total;
    stores.today2 = e.data.today;
    for(let i = 0 ; i < stores.provinceAllCity.children.length ; i++){
      if(i == 0) stores.nowCityAddToday = 0;
      else{
        stores.nowCityAddToday = stores.nowCityAddToday + stores.provinceAllCity.children[i].today.confirm
      }
      
    }
    console.log(stores.nowCityAddToday)
  });
}
let nowTime = ref("");
function getTime() {
  let date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  nowTime.value = hour + ":" + minute + ":" + second;
  // console.log("__nowTime_",nowTime);
}

// 定时器刷新当前时间
setInterval(() => {
  getTime();
}, 1000);

// 柱状图
function initCategory() {
  let tdata = [120, 200, 150, 80, 70, 110, 130];
  let lineData = ["街道一", "街道二", "街道三", "小镇1", "小镇2", "小镇3", "小镇4"];
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
      name: "人", //刻度
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
  const charts = echarts.init(document.querySelector(`#streentInfoCon`) as HTMLElement);
  charts.setOption(option);
}
onMounted(async () => {
  // 初始化获取当前时间
  getTime();
  initCategory();
  // 为地图赋值以及地图生成
  initCenterChart();
});
</script>

<style lang="less" scoped>
.box {
  background-image: linear-gradient(to bottom, #1f7993, #0b2d50);
  height: 100%;
  color: #67affa;
  .screen_header {
    height: 10vh;
    color: #37c5d4;
    display: flex;
    align-items: flex-end;
    .letf_header {
      display: flex;
      flex: 1;
      font-size: 18px;
      padding-left: 20px;
      align-items: end;
      i {
        font-size: 24px;
        color: #fff;
      }
      span {
        padding: 0 10px;
      }
      span:nth-child(2) {
        font-size: 26px;
        // color:red;
      }
      div {
        border: 1px solid #1edfac;
        border-radius: 8px;
        padding: 0 5px;
        background: #1e8194;
      }
    }
    .center_header {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .center_header_de {
        width: 300px;
        height: 40px;
      }
      .center_header_title {
        font-size: 22px;
        font-weight: 600;
      }
    }
    .right_header {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      padding-right: 20px;
      font-size: 18px;
      div {
        padding: 0 10px;
      }
    }
  }
  .screen_content {
    display: flex;
    // height:80vh;
    .left_content {
      height: calc(80vh + 40px);
      margin: 10px;
      flex: 2;
      .dv_content {
        padding-top: 60px;
        padding-left: 10px;
        .person_information {
          .persion_info_content {
            display: flex;
            .persion_info_head {
              display: flex;
              border: 2px solid #3e86bc;
              width: 140px;
              height: 80px;
              margin: 0 10px;
              text-align: center;
              justify-content: center;
              align-items: center;
              padding: 0 10px;
              color: #fff;
            }
            .persion_info_post {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              padding: 0 10px;
              span {
                padding: 0 5px;
              }
            }
            .persion_info_number {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              flex-wrap: wrap;
              div {
                display: flex;
                justify-content: space-between;
                span {
                  padding: 0 5px;
                }
              }
            }
          }
        }
        .sce_management {
          .sce_management_content {
            margin-top: 10px;
            height: 80px;
            background: linear-gradient(
              to top,
              rgba(18, 82, 147, 0) 0%,
              rgba(18, 82, 147, 0.6) 40%,
              rgba(18, 82, 147, 1) 100%
            );
            width: 98%;
            display: flex;
            justify-content: space-around;
            text-align: center;
            align-items: center;
          }
        }
        .microplatform {
          .microplatform_content {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding-top: 20px;
          }
        }
        .streentInfoConClass {
          width: 100%;
          height: 240px;
        }
      }
    }
    .center_content {
      flex: 3;
      margin: 10px;
      .center_content_map {
        width: 100%;
        height: 90vh;
      }
      .center_content_detail {
        margin: 20px 0;
        height: 20vh;
        .detail_content {
          height: 20vh;
        }
      }
    }
    .right_content {
      flex: 2;
      margin: 10px;
      .right_top {
        height: 30vh;
        .dv_content {
          // height: 30vh;
          padding-top: 60px;
          padding-left: 10px;
          display: flex;
          justify-content: space-between;
          padding-left: 15px;
          padding-right: 15px;
          flex-wrap: wrap;
          .WaterGageTitleCard {
            display: flex;
            margin-bottom: 12px;
            justify-content: space-between;
            height: 40px;
            width: 38%;
            line-height: 40px;
            padding: 0 20px;
            color: #fff;
            background-image: linear-gradient(to left, #1f55af, #8386f31c);
          }
        }
      }
      .right_center {
        height: 8vh;
        margin: 10px 0;
        .dv_content {
          height: 6vh;
          text-align: center;
          align-items: center;
          display: flex;
          margin: 0 10px;
          justify-content: space-between;
        }
      }
      .right_bootom {
        .dv_content {
          height: 37vh;
          padding-top: 60px;
          padding-left: 10px;
          padding-right: 15px;
          display: flex;
          justify-content: space-between;
          .right_card {
            padding: 10px;
            .right_title {
              text-align: center;
              padding-bottom: 10px;
              font-size: 18px;
            }
            .right_img {
              width: 150px;
              height:100px;
              img {
                width: 150px;
                height:100px;
              }
            }
            .right_fontcontent {
              font-size: 17px;
              .number_right {
                padding-right: 5px;
              }
              .content_list{
                display: flex; 
                justify-content: space-between;
                padding-top:5px;
              }
            }
          }
        }
      }
    }
  }
}

.card_title {
  height: 40px;
  width: 160px;
  font-size: 18px;
  line-height: 40px;
  padding: 0 20px;
  color: #fff;
  background-image: linear-gradient(to right, #1c56b7, transparent);
}
.splitLine {
  height: 2px;
  width: 80%;
  background: linear-gradient(
    to right,
    rgba(0, 216, 247, 0) 0%,
    rgba(0, 175, 237, 1) 50%,
    rgba(0, 216, 247, 0) 100%
  );
  margin: 20px auto;
}
.splitLineRow {
  height: 80%;
  width: 2px;
  background: linear-gradient(
    to top,
    rgba(0, 216, 247, 0) 0%,
    rgba(0, 175, 237, 1) 50%,
    rgba(0, 216, 247, 0) 100%
  );
  margin: auto 10px;
}
.ideFontSize {
  font-size: 17px;
}
.NameColor {
  color: #ffe05c;
}
.numberColor {
  color: #37c5d4;
}
</style>
