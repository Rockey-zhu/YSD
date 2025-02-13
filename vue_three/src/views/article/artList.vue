<template>
  <div class="create">
    <div>
      <h1>文本列表</h1>
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

    <!-- 编辑弹框 -->
    <Modal
      v-model="submintModa"
      :title="isEdit ? '编辑' : '新增'"
      @on-ok="handleSave"
      @on-cancel="handleCancel"
    >
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px">文章内容</i-col>
        <i-col span="14">
          <Input
            v-model="adminUserObject.title"
            type="textarea"
            :rows="4"
            placeholder="Enter something..."
          />
        </i-col>
      </Row>
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px">使用图片</i-col>
        <i-col span="14">
          <div
            class="demo-upload-list"
            v-for="(item, index) in uploadList"
            :key="index"
          >
            <img :src="item" />
            <div class="demo-upload-list-cover">
              <Icon
                type="ios-trash-outline"
                @click.native="handleRemove(item)"
              ></Icon>
            </div>
          </div>
          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="getUploadURL"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            multiple
            type="drag"
            :action="$http.defaults.baseURL + '/yunyiUpload/put-file'"
            style="display: inline-block; width: 58px"
          >
            <div style="width: 58px; height: 58px; line-height: 58px">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
        </i-col>
      </Row>
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px" >开启编辑：</i-col>
        <i-col span="14">
          <i-switch v-model="disabled" />
        </i-col>
      </Row>
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px">是否分享社区</i-col>
        <i-col span="14">
          <i-switch v-model="shawToComment" :disabled="disabled"/>
        </i-col>
      </Row>
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px" >是否分享好友</i-col>
        <i-col span="14">
          <i-switch v-model="shawToFriends" :disabled="disabled"/>
        </i-col>
      </Row>
    </Modal>
  </div>
</template>

<script>
import {
  getArt,
  postNewArt,
  postUpdataArt,
  postRemoveArt,
  postPublish
} from "@/api/articles";
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
      upImgList:[],//存储为拼接的图片名
      disabled:true,
    };
  },
  created() {
    //this.fetch();
  },
  computed: {
    ListData() {
      return this.$store.state.article.ListData;
    },
    pageCurrent() {
      return this.$store.state.article.pageCurrent;
    },
    pageSize() {
      return this.$store.state.article.pageSize;
    },
    pageSizeOpts() {
      return this.$store.state.article.pageSizeOpts;
    },
    dataCount() {
      return this.$store.state.article.dataCount;
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
          title: "文章内容",
          key: "title",
          align: "center",
          width: 160,
        },
        {
          title: "使用图片",
          key: "imgList",
          align: "center",
          width: 160,
        },
        {
          title: "是否分享社区",
          key: "isshaw_comment",
          align: "center",
          width: 160,
        },
        {
          title: "是否分享好友",
          key: "isshaw_friends",
          align: "center",
          width: 160,
        },
        {
          title: "更新时间",
          key: "updata_time",
          align: "center",
          width: 160,
        },
        {
          title: "创建时间",
          key: "create_time",
          align: "center",
          width: 160,
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
                  style: {
                    marginRight: "10px",
                  },
                  on: {
                    click: () => {
                      this.remove(params.row.id);
                    },
                  },
                },
                "删除"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small",
                  },
                  on: {
                    click: () => {
                      this.release(params.row);
                    },
                  },
                },
                "发布"
              ),
            ]);
          },
        },
      ];
    },
  },
  methods: {
    ...mapActions(["getArtData"]),
    ...mapMutations(["setArticle"]),
    //获取数据
    fetch() {
      this.setArticle({
        isselect: false,
      });
      this.getArtData();
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
      this.setArticle({
        isselect: true,
      });
      this.getArtData();
    },

    //显示编辑
    edit(index) {
      
      console.log("index", index);
      //console.log("11", this.ListData[index]); //获取到对象数组，进行下一步的操作
      //通过id查找 ---> 获取相关数据  ----> 编辑弹框 ---> 将数据渲染到编辑弹框
      this.isEdit = true;
      this.submintModa = true;
      this.adminUserObject = this.deepClone(this.ListData[index]);
      this.uploadList=[];//初始化图片显示数组
      this.upImgList= this.ListData[index].imgList || [];//初始化图片上传数组
      console.log("----this.ListData[index]----", this.ListData[index]);
      //分享社区和好友
      if (this.adminUserObject.isshaw_comment === 1) {
        this.shawToComment = true;
      } else {
        this.shawToComment = false;
      }
      if (this.adminUserObject.isshaw_friends === 1) {
        this.shawToFriends = true;
      } else {
        this.shawToFriends = false;
      }
      //图片数据处理
      if (this.adminUserObject.imgList.length > 0) {
        this.adminUserObject.imgList = this.adminUserObject.imgList.split(",");
        this.adminUserObject.imgList.forEach((element) => {
          this.uploadList.push(this.$httpUrl + element);
        });
      }
    },
    //删除
    remove(index) {
      //获取Id --->  删除接口 --> Id 查找
      console.log("---this.adminUserObject.id---", index);
      this.$Modal.confirm({
        title: "是否删除？",
        onOk: () => {
          postRemoveArt({ id: index }).then(() => {
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
    release(index){
      console.log("---index--",index)
      postPublish({
        cloud_id:index.id,
        user_id:index.user_id, 
        title:index.title, 
        imgList:index.imgList, 
        create_time:new Date().Format("yyyy-MM-dd hh:mm:ss")
      }).then((res)=>{
        console.log("--res---",res)
        if(res.data.code === 200){
          this.selectData();
          this.$Message.info("发布成功！");
        }else{
          this.$Message.info("发布失败！");
        }
      })
    },
    //取消
    handleCancel() {
      this.$Message.info("cancel");
    },

    //弹框保存按钮
    handleSave() {
      //通过接口保存数据 ----> name
      //编辑
      //imgList处理
      console.log("------this.upImgList.toString()------",this.upImgList.toString())
      postUpdataArt({
        id: this.adminUserObject.id,
        title: this.adminUserObject.title,
        isshaw_comment: this.shawToComment ? 1 : 0,
        isshaw_friends: this.shawToFriends ? 1 : 0,
        imgList:this.upImgList.toString(),
        updata_time:new Date().Format("yyyy-MM-dd hh:mm:ss"),
      }).then(() => {
        //刷新列表
        this.selectData();
        this.$Message.info("保存成功！");
      });
    },
    //图片上传
    getUploadURL(res) {
      this.uploadList.push(this.$httpUrl + res.data.url);
      if(this.upImgList.constructor === String){
        this.upImgList =this.upImgList.split(',')
        this.upImgList.push(res.data.url);
      }
      else{
        this.upImgList.push(res.data.url);
      }
      console.log("-----this.upImgList-----",this.upImgList);
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
      this.setArticle({
        pageCurrent: current,
      });
      this.fetch();
    },
    changePageSize(pageSize) {
      this.setArticle({
        pageSize: pageSize,
      });
      this.fetch();
    },
  },
  mounted() {
    this.selectData();
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