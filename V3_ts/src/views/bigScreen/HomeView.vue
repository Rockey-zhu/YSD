<template>
  <div class="box" :style="{background:`url(${bg})`}">
    <div class="left">
      <div class="top">
        <div class="list">
          <div class="listBox">
            <div>较上日{{stores.chinaAdd.localConfirmH5>0?"+":""}}{{stores.chinaAdd.localConfirmH5}}</div>
            <div class="contents">{{stores.chinaTotal.localConfirm}}</div>
            <div>本土现有确诊</div>
          </div>
          <div class="listBox">
            <div>较上日{{stores.chinaAdd.nowConfirm>0?"+":""}}{{stores.chinaAdd.nowConfirm}}</div>
            <div class="contents">{{stores.chinaTotal.nowConfirm}}</div>
            <div>现有确诊</div>
          </div>
          <div class="listBox">
            <div>较上日{{stores.chinaAdd.confirm>0?"+":""}}{{stores.chinaAdd.confirm}}</div>
            <div class="contents">{{stores.chinaTotal.confirm}}</div>
            <div>累计确诊</div>
          </div>
        </div>
        <div class="list">
          <div class="listBox">
            <div>较上日{{stores.chinaAdd.noInfect>0?"+":""}}{{stores.chinaAdd.noInfect}}</div>
            <div class="contents">{{stores.chinaTotal.noInfect}}</div>
            <div>无症状感染者</div>
          </div>
          <div class="listBox">
            <div>较上日{{stores.chinaAdd.importedCase>0?"+":""}}{{stores.chinaAdd.importedCase}}</div>
            <div class="contents">{{stores.chinaTotal.importedCase}}</div>
            <div>境外输入</div>
          </div>
          <div class="listBox">
            <div>较上日{{stores.chinaAdd.dead>0?"+":""}}{{stores.chinaAdd.dead }}</div>
            <div class="contents">{{stores.chinaTotal.dead}}</div>
            <div>累计死亡</div>
          </div>
        </div>
      </div>
      <div class="contnets">
        <div class="pieClass" id="pie"></div>
      </div>
      <div class="foot">
        <div class="lineClass" id="line"></div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="center" id="china"></div>
    <div class="right">
      <!-- 当前区域数据 -->
      <div class="nowContent">
        <div class="list">
          
          <div class="listBox">
            <div>较上日+{{stores.nowCityAddToday}}</div>
            <div class="contents">{{stores.total2.nowConfirm}}</div>
            <div>现有确诊</div>
          </div>
          <div class="listBox">
            <div>较上日{{stores.today2.wzz_add>0?"+":""}}{{stores.today2.wzz_add}}</div>
            <div class="contents">{{stores.total2.wzz}}</div>
            <div>无症状</div>
          </div>
          <div class="listBox">
            <div>较上日{{stores.today2.confirm>0?"+":""}}{{stores.today2.confirm}}</div>
            <div class="contents">{{stores.total2.confirm}}</div>
            <div>累计确诊</div>
          </div>
        </div> 
      </div>
      <el-table :data="stores.provinceAllCity.children" class="elTable" max-height="85vh">
        <el-table-column prop="name" label="地区" sortable width="100" align="center" />
        <el-table-column prop="today.confirm" label="新增确诊" align="center" />
        <el-table-column prop="total.confirm" label="累计确证" align="center" />
        <el-table-column prop="total.heal" label="治愈" width="60" align="center" />
        <el-table-column prop="total.dead" label="死亡" width="60" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg from "@/assets/img/star.jpg";
import { useCounterStore } from "@/stores/index";
import { geoCoordMap } from "@/assets/geoMap";
import { onMounted } from "vue";
import * as echarts from "echarts";
import "@/assets/map.js";
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

let stores = useCounterStore();
let nowCityAddToday = 0;
// 为地图赋值以及地图生成
function initCenterChart() {
  const data = stores.allProvince.children.map(pro => {
    return {
      name: pro.name,
      value: geoCoordMap[pro.name].concat(pro.total.nowConfirm),
      today: pro.today,
      total: pro.total,
      children: pro.children
    };
  });
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

// 饼图
function initPie(){
  let pieData = stores.cityDetail.map(v =>{
   return{
     name:v.city,
     value:v.nowConfirm,
   }
  });
   let option = {
    tooltip: {
      trigger: 'item'
    },
    series: [{
      name: '现有确诊',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 6,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      },
      // labelLine: {
      //   show: true
      // },
      data: pieData
    }]
  };
  const charts = echarts.init(document.querySelector(`#pie`) as HTMLElement);
  charts.setOption(option);
}
// 折线图
function initLine(){
  let tdData = stores.cityDetail.map(v=>v.city);
  let lineData = stores.cityDetail.map(v =>{
   return{
     name:v.city,
     value:v.nowConfirm,
   }
 })
  let option = {
    xAxis: {
      type: 'category',
      data: tdData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: lineData,
        type: 'line',
        smooth: true
      }
    ]
  };
  const charts = echarts.init(document.querySelector(`#line`) as HTMLElement);
  charts.setOption(option);
}
onMounted(async () => {
  // 获取数据
  await stores.getList();
  console.log("_onMounted__", stores.provinceAllCity);

  // 为地图赋值以及地图生成
  initCenterChart();
  // 饼图
  initPie();

  // 折线图
  initLine()
});
</script>

<style lang="less">
.box {
  display: flex;
  justify-content: space-between;
  height: 100%;
  .left {
    width: 405px;
    .top {
      margin: 10px;
      .list {
        display: flex;
        .listBox {
          width: 135px;
          height: 110px;
          background: #0c3653;
          border: 1px solid #222;
          text-align: center;
          font-size: 16px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          background: rgba(51, 86, 225, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          margin: 2px;
          .contents {
            font-size: 20px;
            color: #0a7ecf;
          }
        }
      }
    }
    .contnets {
      margin: 10px;
      background: rgba(51, 86, 225, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      .pieClass {
        height: 350px;
        padding: 0 5px;
      }
    }
    .foot {
      margin: 10px;
      background: rgba(51, 86, 225, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      .lineClass {
        height: 300px;
      }
    }
  }
  .center {
    flex: 1;
  }
  .right {
    width: 405px;
    padding: 0 10px;
    color: #fff;
    .nowContent {
      .list {
        margin-top: 5px;
        display: flex;
        .listBox {
          width: 135px;
          height: 110px;
          background: #0c3653;
          border: 1px solid #222;
          text-align: center;
          font-size: 16px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          background: rgba(26, 59, 189, 0.35);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          margin: 2px;
          .contents {
            font-size: 20px;
            color: #ed3d15;
          }
        }
      }
    }
    .elTable {
      width: 100%;
      margin-top: 10px;
      color: #e8e8e8;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 10px;
      opacity: 0.85;
    }
  }
}
.el-table--enable-row-transition .el-table__body td.el-table__cell {
  background: rgba(51, 86, 225, 0.45) !important;
}
.el-table tr {
  background-color: #04080ceb !important;
}
.el-table th.el-table__cell {
  background-color: rgba(51, 86, 225, 0.55) !important;
  color: #e8e8e8;
}

.el-scrollbar {
  background-color: #3e3d3d !important;
  color: #e8e8e8;
}
</style>