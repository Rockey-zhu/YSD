<template>
  <div class="create">
    <div>
      <h1>新建物品</h1>
    </div>

    <div class="coreStyle">
      <span style="margin-right: 80px">名称：</span>
      <Input v-model="itemName" placeholder="请输入分类名" style="width: 30%" />
    </div>
    <div class="coreStyle">
      <span style="margin-right: 50px">物品图片：</span>
      <Upload
        :action="$http.defaults.baseURL + '/upload'"
        :on-success="getUploadURL"
        :headers= getAuthHeaders()
        type="drag"
        style="width: 200px; margin-left: 120px"
      >
        <div style="padding: 20px 0">
          <img
            :src="itemicon === '' ? nullIcon : itemicon"
            style="height: 75px; width: 75px"
          />
          <p>上传图片</p>
        </div>
      </Upload>
    </div>
    <div class="btnStyle">
      <Button type="primary" @click="save" native-type="submit">保存</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: "",
      nullIcon:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606132313283&di=573714c8d34054fc4050dc0e03d4d75b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F00%2F96%2F90%2F6356f30ef3527b7.jpg",
      itemicon: "",
      createObject: {},
      ListData: [],
      selectClassly: "", //选中的分类
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    //获取上传图的url
    getUploadURL(res) {
      this.itemicon = res.url;
    },
    //保存
    async save() {
      if (this.itemName === "" || this.itemName == undefined) {
        this.$Message.error("请输入名称！");
      } else {
        this.createObject.name = this.itemName;
        this.createObject.icon = this.itemicon;
        //console.log("this.createObject",this.createObject)
        await this.$http.post("rest/items", this.createObject);
        this.$router.push("/home/items/itemsList");
        this.$Message.success("保存成功！");
      }
    },
    ///获取分类数据
    async fetch() {},
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