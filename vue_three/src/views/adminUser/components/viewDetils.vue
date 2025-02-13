<template>
  <div>
    <Row class="RowStyle">
      <i-col span="8" style="line-height: 25px">用户名</i-col>
      <i-col span="14">
        <Input
          v-model="formItem.username"
          placeholder="Enter something..."
          style="width: 30vh"
        />
      </i-col>
    </Row>
    <Row class="RowStyle">
      <i-col span="8" style="line-height: 25px">密码</i-col>
      <i-col span="14">
        <Input
          v-model="formItem.password"
          placeholder="Enter something..."
          style="width: 30vh"
          type="password"
        />
      </i-col>
    </Row>
    <Row class="RowStyle">
      <i-col span="8" style="line-height: 25px">头像</i-col>
      <i-col span="14">
        <Upload
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="width:120px;height:100px"
        >
          <div style="padding: 20px 0">
            <Icon
              type="ios-cloud-upload"
              size="40"
              style="color: #3399ff"
            ></Icon>
            <p>上传</p>
          </div>
        </Upload>
      </i-col>
    </Row>
    <Row class="RowStyle">
      <i-col span="8" style="line-height: 25px">联系方式</i-col>
      <i-col span="14">
        <Input
          v-model="formItem.telephone"
          placeholder="Enter something..."
          style="width: 30vh"
          type="password"
        />
      </i-col>
    </Row>
    <Row class="RowStyle">
      <i-col span="8" style="line-height: 25px">是否是管理员</i-col>
      <i-col span="14">
        <i-switch v-model="isadmin" @on-change="change" />
      </i-col>
    </Row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    formItem: Object,
  },
  data() {
    return {
      isadmin: false,
    };
  },
  computed: {},
  methods: {
    change(status) {
      this.$Message.info(status ? "是" : "否");
    },
  },
  mounted(){
  }
};
</script>

<style lang="less" scoped>
.RowStyle {
  margin: 20px;
}
.viewDetails {
  .detail-item {
    height: 36px;
    line-height: 36px;
    display: block;
    width: 240px;
    padding: 0px 8px;
    // border: 1px solid #d9d9d9;
    font-size: 12px;
    border-radius: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // color: red;
  }
  .report-img {
    height: 80px;
    max-width: 130px;
  }
  .detail-desc {
    min-height: 36px;
    width: 240px;
    padding: 0px 8px;
    // border: 1px solid #d9d9d9;
    font-size: 12px;
    border-radius: 3px;
    word-wrap: break-word;
    word-break: normal;
  }
}
</style>
