
<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Sider
        ref="side1"
        :style="{ height: '100vh' }"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
      <div style="display:flex;color:white;size:32px;justify-content:center;margin:5px;font-weight:bold">
        <img src="../assets/logo.png" style="height: 25px;margin: 0 10px 0 0;"/>
        云 忆
        </div>
        <Menu
          active-name="1-1"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
        >
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>分类管理</span>
            </template>
            <router-link to="/home/categories/createEdit">
              <MenuItem name="1-1">
                <Icon type="ios-navigate"></Icon>
                <span style="color: #fff">新建分类</span>
              </MenuItem>
            </router-link>
            <router-link to="/home/categories/createList">
              <MenuItem name="1-2">
                <Icon type="ios-navigate"></Icon>
                <span style="color: #fff">分类列表</span>
              </MenuItem>
            </router-link>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>物品管理</span>
            </template>
            <router-link to="/home/items/itemsEdit">
              <MenuItem name="2-1">
                <Icon type="ios-navigate"></Icon>
                <span>新建物品</span>
              </MenuItem>
            </router-link>
            <router-link to="/home/items/itemsList">
              <MenuItem name="2-2">
                <Icon type="ios-navigate"></Icon>
                <span>物品列表</span>
              </MenuItem>
            </router-link>
          </Submenu>
          <!-- <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>英雄管理</span>
                        </template>
                        <router-link to="/home/heroes/heroesEdit">
                        <MenuItem name="3-1">
                            <Icon type="ios-navigate"></Icon>
                            <span>新建英雄</span>
                        </MenuItem>
                        </router-link>
                        <router-link to="/home/heroes/heroesList">
                        <MenuItem name="3-2">
                            <Icon type="ios-navigate"></Icon>
                            <span>英雄列表</span>
                        </MenuItem>
                        </router-link>
                    </Submenu> -->
          <Submenu name="4">
            <router-link to="/home/article/artEdit">
              <MenuItem name="4-3">
                <Icon type="ios-navigate"></Icon>
                <span>文本编辑</span>
              </MenuItem>
            </router-link>
            <router-link to="/home/article/artList">
              <MenuItem name="4-4">
                <Icon type="ios-navigate"></Icon>
                <span>文本列表</span>
              </MenuItem>
            </router-link>
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>文章管理</span>
            </template>
            <router-link to="/home/article/articleEdit">
              <MenuItem name="4-1">
                <Icon type="ios-navigate"></Icon>
                <span>新建富文本文章</span>
              </MenuItem>
            </router-link>
            <router-link to="/home/article/articleList">
              <MenuItem name="4-2">
                <Icon type="ios-navigate"></Icon>
                <span>富文本文章列表</span>
              </MenuItem>
            </router-link>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>社区管理</span>
            </template>
            <router-link to="/home/community/community">
              <router-link to="/home/community/check">
                <MenuItem name="5-1">
                  <Icon type="ios-search"></Icon>
                  <span>上传审核</span>
                </MenuItem>
              </router-link>
              <MenuItem name="5-2">
                <Icon type="ios-navigate"></Icon>
                <span>社区列表</span>
              </MenuItem>
            </router-link>
          </Submenu>
          <Submenu name="16">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>广告管理</span>
            </template>
            <router-link to="/home/adl/adlEdit">
              <MenuItem name="16-1">
                <Icon type="ios-navigate"></Icon>
                <span>新建广告</span>
              </MenuItem>
            </router-link>
            <router-link to="/home/adl/adlList">
              <MenuItem name="16-2">
                <Icon type="ios-navigate"></Icon>
                <span>广告列表</span>
              </MenuItem>
            </router-link>
          </Submenu>
          <router-link to="/home/adminUser/adminUser">
            <MenuItem name="6-1">
              <Icon type="ios-search"></Icon>
              <span>角色管理</span>
            </MenuItem>
          </router-link>
          <Submenu name="8">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>3D</span>
            </template>
            <router-link to="/home/3D/three">
              <MenuItem name="8-1">
                <Icon type="ios-navigate"></Icon>
                <span>three</span>
              </MenuItem>
            </router-link>

          </Submenu>
          <!-- <MenuItem name="4-21">
            <Icon type="ios-search"></Icon>
            <span>分类列表</span>
          </MenuItem> -->
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{ padding: 0 }" class="layout-header-bar">
          <Row>
            <Col span="1">
              <Icon
                @click.native="collapsedSider"
                :class="rotateIcon"
                :style="{ margin: '0 20px' }"
                type="md-menu"
                size="24"
              ></Icon>
            </Col>
            <Col span="19">&nbsp;</Col>
            <Col span="3">
              <Avatar :src='avatar' />
              <span style="margin: 0 10px">{{user.nickName}}</span>
            </Col>
            <Col span="1">
              <Button type="error" shape="circle" icon="md-power" @click="handleToPower"></Button>
            </Col>
          </Row>
        </Header>
        <Content
          :style="{ margin: '20px', background: '#fff', minHeight: '500px' }"
        >
          <router-view />
        </Content>
      </Layout>
    </Layout>
     <Modal
        v-model="power"
        @on-ok="handleOk"
        width="10"
        @on-cancel="handleCancel">
        <p>是否退出？</p>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      isCollapsed: false,
      avatar:'',
      power:false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    user() {
      return this.$store.state.login.user;
    },
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    wheresAvatar(){
      if(this.user.avatarUrl){
        this.avatar = this.$httpUrl + this.user.avatarUrl
      }else{
        this.avatar = this.$httpUrl + "/uploads/logo/logo.png"
      }
    },
    handleToPower(){
      this.power = true;
    },
    handleOk () {
      this.$Message.info('退出成功！');
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
    handleCancel () {
      this.$Message.info('取消');
    }
  },
  mounted() {
    this.wheresAvatar();
  },
};
</script>