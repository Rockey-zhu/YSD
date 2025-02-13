import { defineStore } from "pinia";
import adminAPI from "../api/adminAPI";
interface UpdateObj {
  isselect?: boolean;
  ListAllData?: any;
  ListData?: any;
  selectionList?: any;
  dataCount?: number;
  pageSize?: number;
  pageCurrent?: number;
  tableLoading?:boolean,
  ListtData?:any;
  ListLineOption?:any;
}
export const downloadRankStore = defineStore({
  id: "downloadRank",
  state: () => ({
    isselect: false,
    ListAllData: [],
    ListData: [],
    ListtData:[],
    ListLineOption:[],
    selectionList: [], // 当前选择的结果
    dataCount: 0, // 总条数
    pageSize: 10, // 每页显示多少条
    pageCurrent: 1, // 当前显示第几页
    pageShowsizer: true,
    pageShowTotal: true,
    pageShowElevator: true,
    pageSizeOpts: [5, 10, 20, 30, 40],
    orderby: "desc",
    sortby: "Visits",
    searchValue: "",
    searchKey: "Name",
    tableLoading: false,
  }),
  getters: {},
  actions: {
    searchCustomList(){
        this.updateState({
          tableLoading:false,
        })
        adminAPI.Search(
          `file_table`,
          true,
          [],
          [this.sortby],
          [this.orderby],
          (this.pageCurrent - 1) * this.pageSize,
          this.pageCurrent * this.pageSize,
          [],
          []
        ).then((d:any) =>{
          if (d.data.code === 2000 && d.data.data) {
            this.updateState({
              dataCount: d.data.data.count,
              tableLoading: true,
            });
          }
        })

        return adminAPI
        .Search(
          `file_table`,
          false,
          [],
          [this.sortby],
          [this.orderby],
          this.pageSize,
          this.pageCurrent,
          [],
          []
        )
        .then((d:any) => {
          if (d.data.code === 2000 && d.data.data) {
            // d.data.data[0].selected = true;
            let nameDataArr:any = [];
            let VisitsArr:any = [];
             d.data.data.forEach((element:any) => {
              nameDataArr.push(element.Name);
              VisitsArr.push(element.Visits)
            });
            this.updateState({
              ListtData: nameDataArr,
              ListLineOption:VisitsArr,
              tableLoading: true,
            });
            return d.data;
          }
        });
    },
    updateState(obj: UpdateObj) {
      if (obj.isselect != undefined) this.isselect = obj.isselect;
      if (obj.ListAllData != undefined) this.ListAllData = obj.ListAllData;
      if (obj.ListData != undefined) this.ListData = obj.ListData;
      if (obj.selectionList != undefined) this.selectionList = obj.selectionList;
      if (obj.dataCount != undefined) this.dataCount = obj.dataCount;
      if (obj.pageSize != undefined) this.pageSize = obj.pageSize;
      if (obj.pageCurrent != undefined) this.pageCurrent = obj.pageCurrent;
      if (obj.tableLoading != undefined) this.tableLoading = obj.tableLoading;
      if (obj.ListtData != undefined) this.ListtData = obj.ListtData;
      if (obj.ListLineOption != undefined) this.ListLineOption = obj.ListLineOption;
    },
  },
});
