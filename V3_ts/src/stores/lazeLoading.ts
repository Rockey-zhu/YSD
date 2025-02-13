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
  searchValue?:string,
}
export const lazeLoadingStore = defineStore({
  id: "LazeLoading",
  state: () => ({
    isselect: false,
    ListAllData: [],
    ListData: [],
    selectionList: [], // 当前选择的结果
    dataCount: 0, // 总条数
    pageSize: 20, // 每页显示多少条
    pageCurrent: 1, // 当前显示第几页
    pageShowsizer: true,
    pageShowTotal: true,
    pageShowElevator: true,
    pageSizeOpts: [5, 10, 20, 30, 40],
    orderby: "desc",
    sortby: "Ctime",
    searchValue: "懒加载演示",
    searchKey: "CustomType",
    tableLoading: false,
  }),
  getters: {},
  actions: {
    searchList(){
        this.updateState({
          tableLoading:false,
        })
        let queryList = [];
        if (this.searchValue != "") {
          queryList.push({
            key: this.searchKey,
            value: this.searchValue,
          });
        }
        adminAPI.Search(
          `file_table`,
          true,
          queryList,
          [this.sortby],
          [this.orderby],
          this.pageSize,
          this.pageCurrent,
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
          queryList,
          [this.sortby],
          [this.orderby],
          this.pageSize,
          this.pageCurrent,
          [],
          []
        )
        .then((d:any) => {
          if (d.data.code === 2000 && d.data.data) {
            this.updateState({
              ListData: d.data.data,
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
      if (obj.searchValue != undefined) this.searchValue = obj.searchValue;
    },
  },
});
