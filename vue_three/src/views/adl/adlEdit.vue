<template>
  <div class="create">
    <div>
      <h1>{{ articleId ? "编辑" : "新建" }}广告</h1>
    </div>
    <div class="coreStyle">
      <span style="margin-right: 80px">标题：</span>
      <Input
        v-model="createObject.name"
        placeholder="请输入标题"
        style="width: 30%"
      />
    </div>
    <div>
      <Button type="primary" @click="handleAddItems" native-type="submit"
        >添加广告</Button
      >
      <Row :v-if="createObject.items">
        <i-col
          span="24"
          v-for="(item, index) in createObject.items"
          :key="index"
        >
        <div class="coreStyle">
            <span style="margin-right: 45px">跳转路由：</span>
            <Input
              v-model="item.url"
              placeholder="请输跳转地址"
              style="width: 60%"
              maxlength="100"
              type="textarea"
              :rows="1"
              show-word-limit
            />
          </div>
          <div class="coreStyle">
            <span style="margin-right: 50px">图片：</span>
            <Upload
              :action="$http.defaults.baseURL + '/upload'"
              :on-success="(res) => $set(item, 'icon', (item.image = res.url))"
              type="drag"
              style="width: 180px; margin-left: 120px"
            >
              <div style="padding: 20px 0">
                <img
                  :src="item.image ? item.image : nullIcon"
                  style="height: 90px;"
                />
                
              </div>
            </Upload>
          </div>
          <div>
            <Button
              type="error"
              size="small"
              @click="() => createObject.items.splice(index, 1)"
              >删除</Button
            >
          </div>
        </i-col>
      </Row>
    </div>
    <div class="btnStyle">
      <Button type="primary" @click="save" native-type="submit">保存</Button>
    </div>
  </div>
</template>

<script>
//引入富文本框
//import { VueEditor } from "vue2-editor";

export default {
  data() {
    return {
      createObject: {
        items:[]
      },
      ListData: [],
      articleId: "",
       nullIcon:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606132313283&di=573714c8d34054fc4050dc0e03d4d75b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F00%2F96%2F90%2F6356f30ef3527b7.jpg",
    };
  },
  components: {
    //VueEditor, 
  },
  created() {
    //this.fetchCategories();
    this.fetch();
  },
  methods: {
    //保存
    async save() {
      if (
        this.createObject.name === "" ||
        this.createObject.name == undefined
      ) {
        this.$Message.error("请输入名称！");
      } else if (this.articleId) {
        await this.$http.put(`rest/ads/${this.articleId}`, this.createObject);
        //刷新列表
        this.$router.push("/home/adl/adlList");
        this.$Message.success("修改成功！");
      } else {
        await this.$http.post("rest/ads", this.createObject);
        this.$router.push("/home/adl/adlList");
        this.$Message.success("保存成功！");
      }
    },
    ///获取分类数据
    async fetchCategories() {
      // let res = await this.$http.get("rest/categories");
      // this.ListData = res.data;
      // console.log("ListData", this.ListData);
    },

    //编辑时获取信息
    async fetch() {
      this.articleId = this.$route.query.id;
      console.log("this.articleId", this.articleId);
      if (this.articleId === undefined) {
        return 0;
      } else {
        const res = await this.$http.get(`rest/ads/${this.articleId}`);
        this.createObject = res.data;
        console.log("this.createObject", this.createObject);
      }
    },

    //富文本框上传本地文件----默认base64编码所使用的数据过大降低接口效率
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      //自定义一个表单数据(也可以提交JSON数据)
      var formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();

      //原代码
      // axios({
      //   url: "https://fakeapi.yoursite.com/images",
      //   method: "POST",
      //   data: formData
      // })
      //   .then(result => {
      //     let url = result.data.url; // Get url from response
      //     Editor.insertEmbed(cursorLocation, "image", url);
      //     resetUploader();
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    //添加广告
    handleAddItems(){
      this.createObject.items.push({});
    }
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
</style>