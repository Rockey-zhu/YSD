<template>
  <div class="create">
    <div>
      <h1>社区列表</h1>
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
import { postRemoveCommunity, postUpdateCommunity } from "@/api/community";
import { mapActions, mapState, mapMutations } from "vuex";
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
      return this.$store.state.community.ListData;
    },
    pageCurrent() {
      return this.$store.state.community.pageCurrent;
    },
    pageSize() {
      return this.$store.state.community.pageSize;
    },
    pageSizeOpts() {
      return this.$store.state.community.pageSizeOpts;
    },
    dataCount() {
      return this.$store.state.community.dataCount;
    },
    limit() {
      return this.$store.state.community.limit;
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
          title: "云端文本id",
          key: "cloud_id",
          align: "center",
          width: 160,
        },
        {
          title: "评论id",
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
          minWidth: 160,
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
                    src: item,
                  },
                  style: {
                    marginRight: "10px",
                  },
                });
              })
            );
          },
        },
        {
          title: "收藏数",
          key: "likeNum",
          align: "center",
          width: 60,
        },
        {
          title: "评论数",
          key: "commentNum",
          align: "center",
          width: 60,
        },
        {
          title: "更新时间",
          key: "updata_time",
          align: "center",
          width: 200,
        },
        {
          title: "创建时间",
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
                      this.release(params.row);
                    },
                  },
                },
                "同步数据"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  style: {
                    marginRight: "10px",
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
    ...mapActions(["getCommunityData"]),
    ...mapMutations(["setCommunity"]),
    //获取数据
    fetch() {
      this.setCommunity({
        isselect: false,
      });
      this.getCommunityData();
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
      this.setCommunity({
        isselect: true,
      });
      this.getCommunityData();
    },

    //删除
    remove(index) {
      //获取Id --->  删除接口 --> Id 查找
      console.log("---this.adminUserObject.id---", index);
      this.$Modal.confirm({
        title: "是否删除？",
        onOk: () => {
          postRemoveCommunity({
            id: index.cloud_id,
            comment_id: 0,
          }).then(() => {
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
    //发布
    release(index) {
      console.log("---index--", index);
      postUpdateCommunity({
        cloud_id: index.cloud_id,
        id: index.id,
        updata_time:new Date().Format("yyyy-MM-dd hh:mm:ss")
      }).then((res) => {
        console.log("--res---", res);
        if (res.data.code === 200) {
          this.selectData();
          this.$Message.info("发布成功！");
        } else {
          this.$Message.info("发布失败！");
        }
      });
    },
    //取消
    handleCancel() {
      this.$Message.info("cancel");
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
      if (this.dataCount > this.limit) {
        this.setCommunity({
          pageCurrent: current,
          limit: this.limit + 10,
        });
        this.selectData();
      }else{
        this.setCommunity({
          pageCurrent: current,
        });
        this.selectData();
      }
    },
    changePageSize(pageSize) {
      this.setCommunity({
        pageSize: pageSize,
      });
      this.fetch();
    },
  },
  mounted() {
    this.selectData();
    //console.log("---ListData--", new Date().Format("yyyy-MM-dd hh:mm:ss"));
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