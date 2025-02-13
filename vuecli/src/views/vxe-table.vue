<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions" @page-change="handlePageChange">
      <template #operate="{ row }">
        
        <vxe-button
          icon="fa fa-trash"
          title="删除"
          circle
          @click="removeRowEvent(row)"
        ></vxe-button>
        <vxe-button icon="fa fa-eye" title="查看" circle></vxe-button>
        <vxe-button icon="fa fa-gear" title="设置" circle></vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridOptions: {
        border: true,
        resizable: true,
        keepSource: true,
        showOverflow: true,
        height: 530,
        loading: false,
        pagerConfig: {
          total: 0,
          currentPage: 1,
          pageSize: 10,
          pageSizes: [10, 20, 50, 100, 200, 500],
        },
        editConfig: {
          // 设置触发编辑为手动模式
          trigger: "manual",
          // 设置为整行编辑模式
          mode: "row",
          // 显示修改状态和新增状态
          showStatus: true,
          // 自定义可编辑列头的图标
          icon: "fa fa-file-text-o",
        },
        columns: [
          { type: "seq", width: 60 },
          { type: "checkbox", width: 50 },
          { field: "name", title: "Name", editRender: { name: "input" } },
          {
            field: "nickname",
            title: "Nickname",
            editRender: { name: "input" },
          },
          {
            field: "sex",
            title: "Sex",
            editRender: { name: "$select", options: [] },
          },
          { field: "role", title: "Role", editRender: { name: "input" } },
          {
            field: "describe",
            title: "Describe",
            showOverflow: true,
            editRender: { name: "input" },
          },
          { title: "操作", width: 200, slots: { default: "operate" } },
        ],
        data: [{sex:"1"}],
      },
    };
  },
  methods: {
    nameChangeEvent({ column }) {
      console.log(`${column.title} 触发 input 事件`);
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

    //导出函数
    exportDataEvent() {
      this.$refs.xTable1.exportData({ type: "csv" });
    },
    exportSelectEvent() {
      this.$refs.xTable1.exportData({
        data: this.$refs.xTable1.getCheckboxRecords(),
      });
    },
    openExportEvent() {
      this.$refs.xTable1.openExport();
    },

    //打印
    printEvent() {
      this.$refs.xTable1.print();
    },
    printSelectEvent() {
      this.$refs.xTable1.print({
        data: this.$refs.xTable1.getCheckboxRecords(),
      });
    },
    printEvent2() {
      this.$refs.xTable1.openPrint();
    },

    //编辑row
    editRowEvent(row) {
      const $grid = this.$refs.xTable1;
      $grid.setActiveRow(row);
    },
    saveRowEvent() {
      console.log("---------------");
      const $grid = this.$refs.xTable1;
      $grid.clearActived().then(() => {
        this.gridOptions.loading = true;
        setTimeout(() => {
          this.gridOptions.loading = false;
        }, 300);
      });
    },
    removeRowEvent(row) {
      const $grid = this.$refs.xTable1;
      $grid.remove(row);
    },
  },
};
</script>