<template>
  <div class="create">
    <div>
      <h1>新建分类</h1>
    </div>
    <div class="coreStyle">
      <span style="margin-right: 50px">上级分类：</span>
      <Select v-model="selectClassly" style="width: 200px">
        <Option v-for="item in ListData" :value="item._id" :key="item._id">{{
          item.name
        }}</Option>
      </Select>
    </div>
    <div class="coreStyle">
      <span style="margin-right: 80px">名称：</span>
      <Input
        v-model="createName"
        placeholder="请输入分类名"
        style="width: 30%"
      />
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
      createName: "",
      createObject: {},
      ListData: [],
      selectClassly: "", //选中的分类
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    //保存
    async save() {
      if (this.createName === "" || this.createName == undefined) {
        this.$Message.error("请输入名称！");
      } else {
        this.createObject.name = this.createName;
        if(this.selectClassly){
          this.createObject.parent = this.selectClassly;
        }
        //console.log("this.createObject",this.createObject)
        await this.$http.post("rest/categories", this.createObject);
        this.$router.push("/home/categories/createList");
        this.$Message.success("保存成功！");
      }
    },
    ///获取分类数据
    async fetch() {
      let res = await this.$http.get("rest/categories");
      this.ListData = res.data;
      console.log("ListData", this.ListData);
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