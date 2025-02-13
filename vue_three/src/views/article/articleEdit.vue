<template>
  <div class="create">
    <div>
      <h1>{{ articleId ? "编辑" : "新建" }}富文本</h1>
    </div>
    <div class="coreStyle">
      <span style="margin-right: 50px">上级分类：</span>
      <Select v-model="createObject.categories" style="width: 200px" multiple>
        <Option v-for="item in ListData" :value="item._id" :key="item._id">{{
          item.name
        }}</Option>
      </Select>
    </div>
    <div class="coreStyle">
      <span style="margin-right: 80px">标题：</span>
      <Input
        v-model="createObject.name"
        placeholder="请输入标题"
        style="width: 30%"
      />
    </div>
    <div class="coreStyle">
      <span style="margin-right: 80px">内容：</span>
      <div style="width: 65%">
        <vue-editor
          useCustomImageHandler
          @image-added="handleImageAdded"
          v-model="createObject.content"
        ></vue-editor>
      </div>
    </div>
    <div class="btnStyle">
      <Button type="primary" @click="save" native-type="submit">保存</Button>
    </div>
  </div>
</template>

<script>
//引入富文本框
import { VueEditor } from "vue2-editor";

export default {
  data() {
    return {
      createObject: {},
      ListData: [],
      selectClasslies: "", //选中的分类
      articleId: "",
    };
  },
  components: {
    VueEditor,
  },
  created() {
    this.fetchCategories();
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
        await this.$http.put(
          `rest/article/${this.articleId}`,
          this.createObject
        );
        //刷新列表
        this.$router.push("/home/article/articleList");
        this.$Message.success("修改成功！");
      } else {
        await this.$http.post("rest/article", this.createObject);
        this.$router.push("/home/article/articleList");
        this.$Message.success("保存成功！");
      }
    },
    ///获取分类数据
    async fetchCategories() {
      let res = await this.$http.get("rest/categories");
      this.ListData = res.data;
      console.log("ListData", this.ListData);
    },

    //编辑时获取信息
    async fetch() {
      this.articleId = this.$route.query.id;
      console.log("this.articleId", this.articleId);
      if (this.articleId === undefined) {
        return 0;
      } else {
        const res = await this.$http.get(`rest/article/${this.articleId}`);
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

      const res = await this.$http.post('upload',formData);
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