<template>
  <div class="create">
    <div>
      <h1>广告列表</h1>
    </div>
    <div>
      <Table
        border
        :columns="columns"
        :data="ListData"
      ></Table>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      Id: "", //存储ID
      classlyName: "", //分类名
      submintModa: false, //编辑弹框显示
      columns: [
        {
          title: "Id",
          key: "_id",
          align: "center",
          width: 250,
        },
        {
          title: "上级分类",
          key:"categories",
          align: "center",
          width: 250,
        },
        {
          title: "分类名称",
          key: "name",
          align: "center",
        },
        {
          title: "编辑",
          key: "edit",
          align: "center",
          fixed: "right",
          width: 200,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  style: {
                    marginRight: "10px",
                  },
                  on: {
                    click: () => {
                      this.edit(params.index);
                    },
                  },
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ],
      ListData: [], //获取列表信息
      classlyNameObject: {},
      careData:[]
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    //获取数据
    async fetch() {
      let res = await this.$http.get("rest/ads");
      this.ListData = res.data;
      //处理ListData内的categories字段
      this.ListData.forEach(element =>{
        let classlyName = [];
        if(element.categories){
          element.categories.forEach(data =>{
            classlyName.push(data.name);
          })
        }
        console.log("this.className",classlyName)
        element.categories = classlyName;
      })
      console.log("ListData", this.ListData);
    },
    //显示编辑
    edit(index) {
       console.log("index", index);
      console.log("11", this.ListData[index]); //获取到对象数组，进行下一步的操作
      this.$router.push({
        name:'adlEdit',
        query:{id:this.ListData[index]._id}
      })
    },
    //删除
    async remove(index) {
      //获取Id --->  删除接口 --> Id 查找
      this.$Modal.confirm({
        title: "是否删除？",
        onOk: () => {
          this.Id = this.ListData[index]._id;
          this.$http.delete(`rest/ads/${this.Id}`).then(() => {
            //刷新列表
            this.fetch().then(() => {
              this.$Message.success("删除成功！");
            });
          });
        },
        onCancel: () => {
          this.$Message.info("取消");
        },
      });
    },

    handleCancel() {
      this.$Message.info("cancel");
    },
  },
};
</script>

<style scoped lang="less">
.create {
  margin: 50px 30px 0 30px;
}
.RowStyle {
  margin: 20px;
}
</style>