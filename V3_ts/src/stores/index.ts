import { defineStore } from 'pinia'
import { getAPIList } from "../api/index"
import type { Data, AreaTree, Child, ChinaAdd, ChinaTotal, StatisGradeCityDetail, Today2, Total2 } from "./type"

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    list: <Data>{}, //所有数据
    allProvince: <AreaTree[]>[], //所有省份数组
    provinceAllCity: <Child[]>[],//单个省内的城市信息数组
    today2: <Today2>{},
    total2: <Total2>{},
    chinaAdd: <ChinaAdd>{},
    chinaTotal: <ChinaTotal>{},
    cityDetail: <StatisGradeCityDetail>{},
    nowCityAddToday: <Number>0,
    counter:0,
  }),
  getters: {
    doubleCount: (state:any) => state.counter * 2
  },
  actions: {
    async getList() {
      // const result = await getAPIList()
      await getAPIList().then(res => {
        console.log("getList___", res);
        this.list = res;
        this.allProvince = res.diseaseh5Shelf.areaTree[0];
        this.chinaAdd = res.diseaseh5Shelf.chinaAdd;
        this.chinaTotal = res.diseaseh5Shelf.chinaTotal;
        this.cityDetail = res.statisGradeCityDetail.slice(0, 10);

        // 默认右侧数据 - 上海
        this.provinceAllCity = res.diseaseh5Shelf.areaTree[0].children[3];
        this.today2 = res.diseaseh5Shelf.areaTree[0].children[3].today;
        this.total2 = res.diseaseh5Shelf.areaTree[0].children[3].total;
        console.log("_today2_", this.today2);
        for (let i = 0; i < this.provinceAllCity.children.length; i++) {
          this.nowCityAddToday = this.nowCityAddToday + this.provinceAllCity.children[i].today.confirm
        }
      })

    },
    async increment() {
      this.counter ++
    }
  }
})
