<template>
  <div class="create">
    <div>
      <h1>审核列表</h1>
    </div>
    <div>
      <Table border :columns="columns" :data="ListData"></Table>
    </div>
    <Page
      :total="dataCount"
      :current="pageCurrent || 1"
      :page-size="pageSize"
      :page-size-opts="pageSizeOpts"
      show-total
      show-elevator
      show-sizer
      @on-change="changePageCurrent"
      @on-page-size-change="changePageSize"
      style="padding: 10px 0; display: flex; justify-content: center"
    ></Page>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import {postRemoveCheck,postNewCommunity} from '@/api/community'
//import viewDetails from './components/viewDetils'
export default {
  components: {},
  data() {
    return {
      Id: "", //存储ID
      classlyName: "", //分类名
      submintModa: false, //编辑弹框显示
      isEdit: false, //是否是编辑
      classlyNameObject: {},
      careData: [],
      adminUserObject: {},
      adminicon: "",
      avatarUrl: "",
      shawToFriends: false,
      shawToComment: false,
      uploadList: [],
      defaultList: [],
    };
  },
  created() {
    //this.fetch();
  },
  computed: {
    ListData() {
      return this.$store.state.check.ListData;
    },
    pageCurrent() {
      return this.$store.state.check.pageCurrent;
    },
    pageSize() {
      return this.$store.state.check.pageSize;
    },
    pageSizeOpts() {
      return this.$store.state.check.pageSizeOpts;
    },
    dataCount() {
      return this.$store.state.check.dataCount;
    },
    columns() {
      return [
        {
          title: "Id",
          key: "id",
          align: "center",
          width: 160,
        },
        {
          title: "用户id",
          key: "user_id",
          align: "center",
          width: 160,
        },
        {
          title: "云文本id",
          key: "comment_id",
          align: "center",
          width: 160,
        },
        {
          title: "文章内容",
          key: "title",
          align: "center",
          width: 160,
        },
        {
          title: "使用图片",
          key: "imgList",
          align: "center",
          width: 400,
          render: (h, params) => {
            let imgList = params.row.imgList.split(",");
            let uploads = [];
            if (imgList.length > 0 && imgList[0] != "") {
              imgList.forEach((element) => {
                uploads.push(this.$httpUrl + element);
              });
            }
            return h(
              "div",
              uploads.map((item) => {
                return h("Avatar", {
              props: {
                icon: "ios-person",
                shape: "square",
                size: "large",
                src: item
              },
              style:{
                marginRight: "10px",
              }
            });
              })
            );
          },
        },
        {
          title: "上传时间",
          key: "create_time",
          align: "center",
          width: 200,
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
                      this.handleSave(params.row);
                    },
                  },
                },
                "通过"
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
                      this.remove(params.row);
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ];
    },
  },
  methods: {
    ...mapActions(["getCheckData"]),
    ...mapMutations(["setCheck"]),
    //获取数据
    fetch() {
      this.setCheck({
        isselect: false,
      });
      this.getCheckData();
    },
    //深拷贝函数
    deepClone(target) {
      // 定义一个变量
      let result;
      // 如果当前需要深拷贝的是一个对象的话
      if (typeof target === "object") {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
          result = []; // 将result赋值为一个数组，并且执行遍历
          for (let i in target) {
            // 递归克隆数组中的每一项
            result.push(this.deepClone(target[i]));
          }
          // 判断如果当前的值是null的话；直接赋值为null
        } else if (target === null) {
          result = null;
          // 判断如果当前的值是一个RegExp对象的话，直接赋值
        } else if (target.constructor === RegExp) {
          result = target;
        } else {
          // 否则是普通对象，直接for in循环，递归赋值对象的所有值
          result = {};
          for (let i in target) {
            result[i] = this.deepClone(target[i]);
          }
        }
      } else {
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
        result = target;
      }
      // 返回最终结果
      return result;
    },
    //刷新列表
    selectData() {
      this.setCheck({
        isselect: true,
      });
      this.getCheckData();
    },
    //删除
    remove(index) {
      //获取Id --->  删除接口 --> Id 查找
      console.log("---this.adminUserObject.id---", index);
      this.$Modal.confirm({
        title: "是否拒绝？",
        onOk: () => {
          postRemoveCheck({ id: index.id, comment_id:index.comment_id}).then(() => {
            //刷新列表
            this.selectData();
            this.$Message.success("删除成功！");
          });
        },
        onCancel: () => {
          this.$Message.info("取消");
        },
      });
    },
    //取消
    handleCancel() {
      this.$Message.info("cancel");
    },

    //弹框保存按钮
    handleSave(index) {
      //通过接口保存数据 ----> name
      //编辑
  console.log("----index--",index)
      postNewCommunity({
        id: index.id,
        cloud_id: index.cloud_id,
        user_id: index.user_id,
        title: index.title,
        imgList:index.imgList,
        create_time:new Date().Format("yyyy-MM-dd hh:mm:ss"),
      }).then(() => {
        //刷新列表
        this.selectData();
        this.$Message.info("保存成功！");
      });
    },
    //图片上传
    getUploadURL(res) {
      this.uploadList.push(this.$httpUrl + res.data.url);
      this.imgList.push(res.data.url);
    },
    //删除图片
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    //图片大小超出
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M.",
      });
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png.",
      });
    },
    changePageCurrent(current) {
      this.setCheck({
        pageCurrent: current,
      });
      this.fetch();
    },
    changePageSize(pageSize) {
      this.setCheck({
        pageSize: pageSize,
      });
      this.fetch();
    },
  },
  mounted() {
    this.selectData();
    //console.log("---ListData--",this.ListData)
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