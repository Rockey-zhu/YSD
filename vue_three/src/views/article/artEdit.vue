<template>
  <div class="create">
    <div>
      <h1>{{ articleId ? "编辑" : "新建" }}文章</h1>
    </div>
    <div class="coreStyle">
      <span style="margin-right: 80px">内容：</span>
       <Input v-model="title" type="textarea" :rows="4" placeholder="Enter something..." />
    </div>
    <div class="coreStyle">
      <span style="margin-right: 80px">图片</span>
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
    </div>
    <div class="btnStyle">
      <Button type="primary" @click="save" native-type="submit" :loading="btnloading">
        <span v-if="!btnloading">发布</span>
        <span v-else>Loading...</span>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import {postNewArt} from "@/api/articles";
export default {
  data() {
    return {
      defaultList: [],
      imgName: "",
      createObject: {},
      ListData: [],
      uploadList: [],
      selectClasslies: "", //选中的分类
      articleId: "",
      textarea:'',
      imgList:[],
      title:'',
      user_id:0,
      btnloading:false
    };
  },
  computed:{
    userId() {
      return this.$store.state.login.user;
    },
  },
  components: {},
  created() {
    this.fetchCategories();
    this.fetch();
  },
  methods: {
    ...mapActions(["getArtData"]),
    ...mapMutations(["setArticle"]),
    //刷新列表
    selectData() {
      this.setArticle({
        isselect: true,
      });
      this.getArtData();
    },
    //保存
    save() {
        if(this.imgList.length === 0) {
        this.imgList=''
        }else{
            this.imgList=this.imgList.toString();
        }
        this.user_id =this.userId.id;
        //console.log("---this.user_id--",this.userId)
        postNewArt({
            user_id:this.user_id,
            title:this.title,
            imgList:this.imgList,
            create_time:new Date().Format("yyyy-MM-dd hh:mm:ss")
        }).then((res)=>{
          console.log("-res-",res)
            if(res.data.code === 200){
              this.btnloading = true;
              setTimeout(() => {
                this.btnloading = false;
                this.$Message.info("保存成功!");
                this.handleClean();
              }, 1000);
              //this.selectData();
            }else{
              this.$Message.error("操作失败!");
            }
        })
    },
    ///获取分类数据
    fetchCategories() {},
    //清空表单内容
    handleClean(){
      this.title ='';
      this.uploadList =[];
    },
    //编辑时获取信息
    fetch() {},
    //图片上传
    getUploadURL(res) {
      this.uploadList.push(this.$httpUrl + res.data.url);
      this.imgList.push( res.data.url);
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
  },
};
</script>

<style scoped lang="less">
.create {
  margin: 50px 0 0 30px;
  .coreStyle {
    margin: 20px 0;
  }
  .btnStyle {
    margin: 20px 120px;
  }
}
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>