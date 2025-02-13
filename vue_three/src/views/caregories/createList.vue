<template>
  <div class="create">
    <div>
      <h1>分类列表</h1>
    </div>
    <div>
      <Table border :columns="columns" :data="ListData"></Table>
      <Page
        :total="pageSize"
        show-sizer
        style="display: flex;margin-top: 60px;justify-content: center;align-items：flex-end"
      />
    </div>

    <!-- 编辑弹框 -->
    <Modal
      v-model="submintModa"
      title="编辑"
      @on-ok="handleSave"
      @on-cancel="handleCancel"
    >
      <Row class="RowStyle">
        <i-col span="8" style="">Id</i-col>
        <i-col span="14">{{ Id }}</i-col>
      </Row>
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px">分类名称</i-col>
        <i-col span="14">
          <Input
            v-model="classlyName"
            placeholder="Enter something..."
            style="width: 20vh"
          />
        </i-col>
      </Row>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Id: "", //存储ID
      classlyName: "", //分类名
      submintModa: false, //编辑弹框显示
      pageSize: 0,
      columns: [
        {
          title: "Id",
          key: "_id",
          align: "center",
          width: 250,
        },
        {
          title: "上级分类",
          key: "parent",
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
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    //获取分类数据
    async fetch() {
      let res = await this.$http.get("rest/categories");
      this.ListData = res.data;
      //因为iview的table的key只能获取字段，而无法获取对象属性，需要处理一下数据
      console.log("--------element------",this.ListData)
      this.ListData.forEach((element) => {
        if (element.parent) {
          element.parent = element.parent.name; //将对象属性name赋给对象parent
        }
      });
      //给pagesize赋值
      this.pageSize = this.ListData.length;
      console.log("ListData", this.ListData);
    },
    //显示编辑
    edit(index) {
      console.log("index", index);
      console.log("11", this.ListData[index]); //获取到对象数组，进行下一步的操作
      //通过id查找 ---> 获取相关数据  ----> 编辑弹框 ---> 将数据渲染到编辑弹框
      this.submintModa = true;
      this.Id = this.ListData[index]._id;
      this.classlyName = this.ListData[index].name;
    },
    //删除
    async remove(index) {
      //获取Id --->  删除接口 --> Id 查找
      this.$Modal.confirm({
        title: "是否删除？",
        onOk: () => {
          this.Id = this.ListData[index]._id;
          this.$http.delete(`rest/categories/${this.Id}`).then(() => {
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
    async handleSave() {
      //通过接口保存数据 ----> name
      this.classlyNameObject.name = this.classlyName;
      await this.$http.put(
        `rest/categories/${this.Id}`,
        this.classlyNameObject
      );
      //刷新列表
      await this.fetch();
      this.$Message.info("save");
    },
  },
};
</script>

<style scoped lang="less">
.create {
  margin: 50px 0 0 30px;
}
.RowStyle {
  margin: 20px;
}
</style>