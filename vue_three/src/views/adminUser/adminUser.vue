<template>
  <div class="create">
    <div>
      <h1>角色列表</h1>
      <Button type="primary" style="margin-bottom: 10px" @click="handleNewUser"
        >新建</Button
      >
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
        <i-col span="8" style="line-height: 25px">用户名</i-col>
        <i-col span="14">
          <Input
            v-model="adminUserObject.username"
            placeholder="Enter something..."
            style="width: 30vh"
          />
        </i-col>
      </Row>
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px">密码</i-col>
        <i-col span="14">
          <Input
            v-model="adminUserObject.password"
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
            :action="$http.defaults.baseURL + '/yunyiUpload/put-file'"
            :on-success="getUploadURL"
            :headers="getAuthHeaders()"
            type="drag"
            style="width: 200px; margin-left: 20px"
            :show-upload-list="false"
          >
            <div style="padding: 20px 0">
              <img
                :src="adminicon === '' ? '' : adminicon"
                style="height: 75px; width: 75px"
              />
              <p>上传图片</p>
            </div>
          </Upload>
          <!-- <Upload
            multiple
            type="drag"
             :action="$http.defaults.baseURL + '/yunyiUpload/put-file'"
            style="width: 120px; height: 100px"
          >
            <div style="padding: 20px 0">
              <Icon
                type="ios-cloud-upload"
                size="40"
                style="color: #3399ff"
              ></Icon>
              <p>上传</p>
            </div>
          </Upload> -->
        </i-col>
      </Row>
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px">联系方式</i-col>
        <i-col span="14">
          <Input
            v-model="adminUserObject.telephone"
            placeholder="Enter something..."
            style="width: 30vh"
            type="password"
          />
        </i-col>
      </Row>
      <Row class="RowStyle">
        <i-col span="8" style="line-height: 25px">是否是管理员</i-col>
        <i-col span="14">
          <!-- <i-switch v-model="isadmin" @on-change="change" /> -->
        </i-col>
      </Row>
    </Modal>
  </div>
</template>

<script>
import { getUser, postUpdata, postRemove } from "@/api/user";
import { postRegister } from "@/api/login";

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
      avatarUrl:'',
    };
  },
  created() {
    //this.fetch();
  },
  computed: {
    ListData() {
      return this.$store.state.user.ListData;
    },
    pageCurrent() {
      return this.$store.state.user.pageCurrent;
    },
    pageSize() {
      return this.$store.state.user.pageSize;
    },
    pageSizeOpts() {
      return this.$store.state.user.pageSizeOpts;
    },
    dataCount() {
      return this.$store.state.user.dataCount;
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
          title: "用户名",
          key: "username",
          align: "center",
          width: 160,
        },
        {
          title: "头像",
          key: "avatarUrl",
          align: "center",
          width: 160,
        },
        {
          title: "联系方式",
          key: "telephone",
          align: "center",
          width: 160,
        },
        {
          title: "昵称",
          key: "nickName",
          align: "center",
          width: 160,
        },
        {
          title: "收藏数",
          key: "userlikeNum",
          align: "center",
          width: 160,
        },
        {
          title: "收藏文章id",
          key: "like_comment_ids",
          align: "center",
          width: 160,
        },
        {
          title: "关注用户id",
          key: "like_user_ids",
          align: "center",
          width: 160,
        },
        {
          title: "关注好友id",
          key: "like_friend_ids",
          align: "center",
          width: 160,
        },
        {
          title: "是否是管理员",
          key: "isadmin",
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
                  on: {
                    click: () => {
                      this.remove(params.row.id);
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
    ...mapActions(["getUserData"]),
    ...mapMutations(["setUser"]),
    //获取数据
    fetch() {
      this.setUser({
        isselect: false,
      });
      this.getUserData();
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
      this.setUser({
        isselect: true,
      });
      this.getUserData();
    },
    //新建
    handleNewUser() {
      //开弹框
      this.submintModa = true;
      this.isEdit = false;
      this.adminUserObject = {};
      this.adminicon ='';
    },
    //显示编辑
    edit(index) {
      //console.log("index", index);
      //console.log("11", this.ListData[index]); //获取到对象数组，进行下一步的操作
      //通过id查找 ---> 获取相关数据  ----> 编辑弹框 ---> 将数据渲染到编辑弹框
      this.isEdit = true;
      this.submintModa = true;
      this.adminUserObject = this.deepClone(this.ListData[index]);
      console.log("----this.ListData[index]----",this.ListData[index])
      this.adminicon = this.$httpUrl +this.ListData[index].avatarUrl
    },
    //删除
    async remove(index) {
      //获取Id --->  删除接口 --> Id 查找
      console.log("---this.adminUserObject.id---", index);
      this.$Modal.confirm({
        title: "是否删除？",
        onOk: () => {
          postRemove({ id: index }).then(() => {
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
    //
    changePageCurrent(current) {
      this.setUser({
        pageCurrent: current,
      });
      console.log("pageCurrent", this.pageCurrent);
      this.fetch();
    },
    changePageSize(pageSize) {
      this.setUser({
        pageSize: pageSize,
      });
      this.fetch();
    },
    //弹框保存按钮
    handleSave() {
      //通过接口保存数据 ----> name
      if (this.isEdit) {
        //编辑
        postUpdata({
          id: this.adminUserObject.id,
          username: this.adminUserObject.username,
          password: this.adminUserObject.password,
          avatarUrl:this.avatarUrl
        }).then(() => {
          this.selectData();
          this.$Message.info("保存成功！");
        });
        //刷新列表
      } else {
        //新建
        postRegister({
          
            username: this.adminUserObject.username,
            password: this.adminUserObject.password,
            avatarUrl:this.avatarUrl
          
        }).then((res) => {
          if (res.data.code === 200) {
            this.$Message.success({
              content: "新建成功",
              type: "success",
            });
            this.setUser({
              dataCount: 0,
              pageCurrent: 1,
            });
            this.fetch();
          } else {
            this.$Message({
              content: "新建失败",
              type: "error",
            });
          }
        });
      }
    },
    //图片上传
    getUploadURL(res) {
      this.adminicon = this.$httpUrl + res.data.url;
      this.avatarUrl = res.data.url;
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