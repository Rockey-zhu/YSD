<template>
  <div class="home">
    <vxe-toolbar>
      <template #buttons>
        <vxe-button icon="fa fa-plus" @click="insertEvent()" id="x1"
          >新增</vxe-button
        >
        <vxe-button @click="exportDataEvent">默认导出</vxe-button>
        <vxe-button @click="exportSelectEvent">导出选中</vxe-button>
        <vxe-button @click="openExportEvent">高级导出</vxe-button>
        <vxe-button @click="printEvent">打印</vxe-button>
        <vxe-button @click="printSelectEvent">打印选中</vxe-button>
        <vxe-button @click="printEvent2">高级打印</vxe-button>
        <Button @click="openHelp" id="help2">打开帮助</Button>
      </template>
    </vxe-toolbar>
    <vxe-grid
      ref="xGrid2"
      :loading="loading"
      v-bind="gridOptions2"
      :print-config="gridOptions2.tablePrint"
      :edit-config="{ trigger: 'dblclick', mode: 'row' }"
      :height="200"
    >
      <template #selectYear="{ row }">
        <div>{{ row.address }}</div>
        <div>
          <Input
            v-model="value"
            placeholder="Enter something..."
            style="width: 100px"
          />
          <div>ces</div>
        </div>
      </template>
      <template #operate="{ row }">
        <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
        <vxe-button @click="removeRowEvent(row)">删除</vxe-button>
      </template>
    </vxe-grid>
    <help ref="helpchild"></help>
  </div>
</template>

<script>
import Sortable from "sortablejs";
import help from "./help";
import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
// import steps from '../../guide.js'

export default {
  components: { help },
  data() {
    return {
      driver: null,
      cityList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      loading: false,
      arrs: [
        {
          title: "TAGS",
          kind: "years",
        },
        {
          title: "FIND",
          kind: "years",
        },
        {
          title: "QVR",
          kind: "years",
        },
        {
          title: "EMP",
          kind: "years2",
        },
        {
          title: "EMP2",
          kind: "years",
        },
        {
          title: "EMP3",
          kind: "years",
        },
      ],
      arrShow: [],
      colorStyle: "#ccc",
      colorStyleTrigger: "#888",
      isClick: false,
      iconClass: false,
      
      lastEvent:{},
      gridOptions2: {
        border: true,
        columnKey: true,
        class: "sortable-column-demo",
        scrollX: {
          enabled: false,
        },
        footerMethod: this.footerMethod,
        toolbarConfig: {
          custom: true,
        },

        columns: [
          { type: "checkbox", width: 60, fixed: "left" },
          {
            title: "years",
            width: 200,
            align: "center",
            slots: {
              default: "selectYear",
              // header: this.renderFunction,
            },
          },
          {
            field: "role",
            title: "Role",
            minWidth: 220,
            slots: {
              header: this.renderFunction,
            },
          },
          {
            field: "sex",
            title: "sex",

            sortBy: this.sortNameMethod2,
            sortable: true,
            minWidth: 100,
            editRender: {
              name: "$select",
              options: [
                { label: "女", value: "0" },
                { label: "男", value: "1" },
              ],
              events: {
                change: this.sexChangeEvent,
              },
            },
          },
          { field: "age", title: "Age", minWidth: 150 },
          { field: "date3", title: "Date", minWidth: 200 },
          { field: "yyds", title: "yyds", minWidth: 200 },
          {
            field: "address",
            title: "Address",
            minWidth: 200,
            showOverflow: true,
          },
          {
            title: "操作",
            width: 200,
            slots: { default: "operate" },
            fixed: "right",
          },
        ],
        data: [
          {
            id: 10001,
            name: "Test1",
            nickname: "T1",
            role: "Develop",
            sex: "Man",
            age: 28,
            address: "Shenzhen",
          },
          {
            id: 10002,
            name: "Test2",
            nickname: "T2",
            role: "Test",
            sex: "Women",
            age: 22,
            address: "Guangzhou",
          },
          {
            id: 10003,
            name: "Test3",
            nickname: "T3",
            role: "PM",
            sex: "Man",
            age: 32,
            address: "Shanghai",
          },
          {
            id: 10004,
            name: "Test4",
            nickname: "T4",
            role: "Designer",
            sex: "Women",
            age: 23,
            address: "Shenzhen",
          },
          {
            id: 10005,
            name: "Test5",
            nickname: "T5",
            role: "Develop",
            sex: "Women",
            age: 30,
            address: "Shanghai",
          },
        ],
        tablePrint: {
          // 自定义打印的样式示例
          style: `
                .vxe-table {
                  color: #000000; // 修改表格默认颜色
                  font-size: 12px; // 修改表格默认字体大小
                  font-family: "Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu; // 修改表格默认字体
                }
                .vxe-table,
                .vxe-table thead th,
                .vxe-table tbody td,
                .vxe-table tfoot td  {
                  border-color: #000000; // 修改表格边框颜色
                }
                .vxe-table thead th {
                  color: green; // 修改表头字体颜色
                  font-size: 14px; // 修改表头默认字体大小
                }
                .vxe-table tfoot td {
                  color: red; // 修改表尾字体颜色
                }
                `,
        },
      },
    };
  },
  created() {
    this.columnDrop2();
  },
  beforeDestroy() {
    if (this.sortable2) {
      this.sortable2.destroy();
    }
  },
  methods: {
    // ----------render需要的函数--------------
    cllickItemSearch(events) {
      console.log(events);
    },
    changePages(event) {
      console.log("_event__", event);
    },
    searchTitle(title, event) {
      console.log("__ title ____", title);
      console.log("__ event ____", event);
    },
    clickGetTagData(title) {
      console.log("_触发__", title);
      this.iconClass = true;
      let findarrs = [];
      this.arrs.map((ele) => {
        if (ele.kind == title) {
          findarrs.push(ele);
        }
      });
      this.arrShow = findarrs;
    },
    renderFunction(params, h) {
      // let colorsTag = false;
      return [
        h(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          },
          [
            h(
              "div",
              {
                style: {
                  fontWeight: "bold",
                },
              },
              params.column.title
            ),
            h(
              "Poptip",
              {
                props: {
                  trigger: "click",
                  placement: "bottom",
                  transfer: true,
                },
                style: {
                  paddingLeft: "10px",
                },
                on: {
                  "on-popper-hide": () => {
                  },
                },
              },
              [
                h("Icon", {
                  props: {
                    type: "ios-funnel",
                    size: "18",
                  },

                  style: {
                    float: "right",
                    cursor: "pointer",
                  },
                  on: {
                    click: () => {
                      this.clickGetTagData(params.column.title);
                    },
                  },
                  class: {
                    tagHover:true,
                  },
                }),
                h(
                  "div",
                  {
                    slot: "content",

                    props: {
                      class: "api",
                    },
                  },
                  [
                    h("Input", {
                      props: {
                        search: true,
                        enterButton: true,
                        size: "small",
                      },
                      on: {
                        "on-search": (event) => {
                          this.searchTitle(params.column.title, event);
                        },
                        // input:(event)=>{
                        //   this.searchTitle(params.column.title,event)
                        // },
                      },
                    }),
                    h(
                      "ul",
                  
                      this.arrShow.map((item) =>
                        h(
                          "li",
                          {
                            style: {
                              padding: "4px",
                              cursor: "pointer",
                            },
                            class: {
                              liClass: true,
                            },
                            on: {
                              click: () => {
                                this.cllickItemSearch(item.title);
                              },
                            },
                          },
                          item.title
                        )
                      )
                    ),
                    // 分页
                    //可以自定义组件 ，需要是全局组件

                    h("Page", {
                      props: {
                        total: 100,
                        size: "small",
                      },
                      on: {
                        "on-change": (event) => {
                          this.changePages(event);
                        },
                      },
                    }),
                  ]
                ),
              ]
            ),
            // 排序 desc asc
            h(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                },
              },
              [
                h("div", {
                  // props: {
                  //   type: "md-arrow-dropup",
                  //   size: "18",
                  //   color: "#aaa",
                  // },
                  class: {
                    // clickColor: this.iconClass,
                  },
                  style: {
                    cursor: "pointer",
                    borderStyle: "solid",
                    borderWidth: "0px 6px 6px 6px",
                    borderColor: "  transparent  transparent #aaa transparent ",
                    width: "0px",
                    height: "0px",
                    marginBottom: "3px",
                  },
                  on: {
                    click: (event) => {
                      if(this.lastEvent.path != undefined && this.lastEvent.rowName != params.column.title){//如果上一步操作的event不为空，则将其样式做修改
                      console.log("__this.lastEvent _",this.lastEvent)
                        if(this.lastEvent.directionArrow == "bottom"){//上箭头
                          this.lastEvent.path[0].style.borderTopColor ="rgb(170,170,170)";
                        }else{//下箭头
                          this.lastEvent.path[0].style.borderBottomColor ="rgb(170,170,170)";
                        }
                      }
                      //同列时上下切换
                      else if(this.lastEvent.rowName == params.column.title && this.lastEvent.directionArrow == "bottom"){
                        this.lastEvent.path[0].style.borderTopColor ="rgb(170,170,170)";
                      }
                      this.lastEvent = event;//保存此步操作的envent
                      this.lastEvent.directionArrow = "top";
                      this.lastEvent.rowName = params.column.title;
                      if(event.path[0].style.borderBottomColor == "rgb(170, 170, 170)"){
                        event.path[0].style.borderBottomColor = "rgb(102, 102, 102)";
                      }else{
                        event.path[0].style.borderBottomColor ="rgb(170,170,170)";
                      }
                    },
                  },
                }),
                h("div", {
                  style: {
                    cursor: "pointer",
                    borderStyle: "solid",
                    borderWidth: "6px 6px 0px 6px",
                    borderColor: " #aaa transparent  transparent  transparent ",
                    width: "0px",
                    height: "0px",
                    marginBottom: "3px",
                  },
                  on: {
                    click: (event) => {  
                      console.log("__this.lastEvent _",this.lastEvent);
                      //如果上一步操作的event不为空且不与当前相同，则将其样式做修改
                      if(this.lastEvent.path != undefined && this.lastEvent.rowName != params.column.title){
                        if(this.lastEvent.directionArrow == "bottom"){//上箭头
                          this.lastEvent.path[0].style.borderTopColor = "rgb(170,170,170)";
                        }else{//下箭头
                          this.lastEvent.path[0].style.borderBottomColor = "rgb(170,170,170)";
                        }
                      }
                      //同列时上下切换
                      else if(this.lastEvent.rowName == params.column.title && this.lastEvent.directionArrow == "top"){
                        this.lastEvent.path[0].style.borderBottomColor = "rgb(170,170,170)";
                      }
                      this.lastEvent = event;//保存此步操作的envent
                      this.lastEvent.directionArrow = "bottom";//保存此步骤的操作类型
                      this.lastEvent.rowName = params.column.title;
                      //判断是否需要修改按钮颜色
                      if(event.path[0].style.borderTopColor == "rgb(170, 170, 170)"){
                        event.path[0].style.borderTopColor = "rgb(102, 102, 102)";
                      }else{
                        event.path[0].style.borderTopColor ="rgb(170,170,170)";
                      }
                      // this.clickGetTagData(params.column.title);
                    },
                  },
                }),
              ]
            ),
          ]
        ),
      ];
    },
    //------------------------------------------
    openHelp() {
      this.$refs.helpchild.openHelp();
    },
    meanNum(list, field) {
      let count = 0;
      list.forEach((item) => {
        count += Number(item[field]);
      });
      return count / list.length;
    },
    sumNum(list, field) {
      let count = 0;
      list.forEach((item) => {
        count += Number(item[field]);
      });
      return count;
    },
    footerMethod({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "平均";
          }
          if (["age", "sex"].includes(column.property)) {
            return this.meanNum(data, column.property);
          }
          return null;
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "和值";
          }
          if (["age", "sex"].includes(column.property)) {
            return this.sumNum(data, column.property);
          }
          return null;
        }),
      ];
    },
    columnDrop2() {
      this.$nextTick(() => {
        const $table = this.$refs.xGrid2;
        this.sortable2 = Sortable.create(
          $table.$el.querySelector(
            ".body--wrapper>.vxe-table--header .vxe-header--row"
          ),
          {
            handle: ".vxe-header--column:not(.col--fixed)",
            onEnd: ({ item, newIndex, oldIndex }) => {
              const { fullColumn, tableColumn } = $table.getTableColumn();
              const targetThElem = item;
              const wrapperElem = targetThElem.parentNode;
              const newColumn = fullColumn[newIndex];
              if (newColumn.fixed) {
                // 错误的移动
                if (newIndex > oldIndex) {
                  wrapperElem.insertBefore(
                    targetThElem,
                    wrapperElem.children[oldIndex]
                  );
                } else {
                  wrapperElem.insertBefore(
                    wrapperElem.children[oldIndex],
                    targetThElem
                  );
                }
                return this.$XModal.message({
                  content: "固定列不允许拖动！",
                  status: "error",
                });
              }
              // 转换真实索引
              const oldColumnIndex = $table.getColumnIndex(
                tableColumn[oldIndex]
              );
              const newColumnIndex = $table.getColumnIndex(
                tableColumn[newIndex]
              );
              // 移动到目标列
              const currRow = fullColumn.splice(oldColumnIndex, 1)[0];
              fullColumn.splice(newColumnIndex, 0, currRow);
              $table.loadColumn(fullColumn);
            },
          }
        );
      });
    },

    //---------------编辑触发函数-----------------
    nameChangeEvent({ column, row }) {
      console.log(`${column.title} 触发 input 事件`);
      console.log("--row-", row);
    },
    roleChangeEvent({ column }) {
      console.log(`${column.title} 触发 input 事件`);
    },
    ageFocusEvent({ column }) {
      console.log(`${column.title} 触发 focus 事件`);
    },
    sexChangeEvent({ column }) {
      console.log(`${column.title} 触发 change 事件`);
    },
    dateChangeEvent({ column }) {
      console.log(`${column.title} 触发 change 事件`);
    },

    //-----------------导出函数-----------------------
    exportDataEvent() {
      this.$refs.xGrid2.exportData({ type: "csv" });
    },
    exportSelectEvent() {
      this.$refs.xGrid2.exportData({
        data: this.$refs.xGrid2.getCheckboxRecords(),
      });
    },
    openExportEvent() {
      this.$refs.xGrid2.openExport();
    },

    //----------------打印---------------------------
    printEvent() {
      this.$refs.xGrid2.print();
    },
    printSelectEvent() {
      this.$refs.xGrid2.print({
        data: this.$refs.xGrid2.getCheckboxRecords(),
      });
    },
    printEvent2() {
      this.$refs.xGrid2.openPrint();
    },

    //-----------编辑row-------------------------------
    editRowEvent(row) {
      const $grid = this.$refs.xGrid2;
      $grid.setActiveRow(row);
    },
    saveRowEvent() {
      console.log("---------------");
      const $grid = this.$refs.xGrid2;
      $grid.clearActived().then(() => {
        this.gridOptions.loading = true;
        setTimeout(() => {
          this.gridOptions.loading = false;
        }, 300);
      });
    },
    removeRowEvent(row) {
      const $grid = this.$refs.xGrid2;
      $grid.remove(row);
    },
    //---------------新增----------------
    async insertEvent(row) {
      const $table = this.$refs.xGrid2;
      const record = {
        sex: "1",
        date12: "2021-01-01",
      };
      const { row: newRow } = await $table.insertAt(record, row);
      await $table.setActiveCell(newRow, "sex");
    },
    //-----------------排序---------------
    sortNameMethod2({ row, column }) {
      console.log("-------x------", column.order);
      // 按名称长度进行排序
      return row.name.length;
    },
  },
  create(){
        // this.gridOptions2.columns[1].slots.header = this.renderFunction

  },
  mounted() {
    this.gridOptions2.columns[1].slots.header = this.renderFunction
    this.driver = new Driver({
      doneBtnText: "完成", //结束按钮的文字
      stageBackground: "#ffffff", //突出显示元素的背景颜色
      nextBtnText: "下一步", //下一步按钮的文字
      prevBtnText: "上一步", //上一步按钮的文字
      closeBtnText: "关闭", //关闭按钮的文字
      // onHighlightStarted:(Element)=> {},//元素即将突出显示时调用
      // onHighlighted:(Element)=> {},//元素完全突出显示时调用
      // onDeselected:(Element)=> {},//取消选择元素时调用
      // onReset:(Element)=> {},//当要清除叠加时调用
      // onNext:(Element)=> {},//在任何步骤中移动到下一步时调用
      // onPrevious:(Element)=> {},//在任何步骤中移动到上一步时调用
    });
    // this.driver = new Driver()
  },
};
</script>

<style>
.clickColor {
  color: red;
}
.tagHover{
  color: #aaa;
}
.tagHover:hover{
  color: #666;
}
.liClass:hover {
  background: #e9e9e9;
}
</style>
