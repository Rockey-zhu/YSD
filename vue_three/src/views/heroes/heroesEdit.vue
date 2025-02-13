<template>
  <div class="create">
    <div>
      <h1>{{ heroId ? "编辑" : "新建" }}英雄</h1>
      <div style="float: right; margin-top: -40px">
        <Button
          @click="cancal"
          native-type="submit"
          style="margin-right: 10px"
          >取消</Button
        >
        <Button type="primary" @click="save" native-type="submit">保存</Button>
      </div>
    </div>
    <Collapse accordion v-model="choiceValue">
      <Panel name="1">
        基础信息
        <div slot="content">
          <div class="coreStyle">
            <span style="margin-right: 80px">名称：</span>
            <Input
              v-model="heroObject.name"
              placeholder="请输入分类名"
              style="width: 30%"
            />
          </div>
          <div class="coreStyle">
            <span style="margin-right: 50px">英雄图片：</span>
            <Upload
              :action="$http.defaults.baseURL + '/upload'"
              :on-success="getUploadURL"
              :headers = getAuthHeaders()
              type="drag"
              style="width: 200px; margin-left: 120px"
            >
              <div style="padding: 20px 0">
                <img
                  :src="heroObject.icon === '' ? nullIcon : heroObject.icon"
                  style="height: 75px; width: 75px"
                />
                <p>上传图片</p>
              </div>
            </Upload>
          </div>
          <div class="coreStyle">
            <span style="margin-right: 80px">称号：</span>
            <Input
              v-model="heroObject.title"
              placeholder="请输入分类名"
              style="width: 30%"
            />
          </div>
          <div class="coreStyle">
            <span style="margin-right: 80px">类型：</span>
            <Select
              v-model="heroObject.categories"
              style="width: 200px"
              multiple
            >
              <Option
                v-for="item in categories"
                :value="item._id"
                :key="item._id"
                >{{ item.name }}</Option
              >
            </Select>
          </div>
          <div class="coreStyle">
            <span style="margin-right: 80px">难度：</span>
            <Rate :count="9" show-text v-model="heroObject.scores.difficult" />
          </div>
          <div class="coreStyle">
            <span style="margin-right: 80px">技能：</span>
            <Rate :count="9" show-text v-model="heroObject.scores.skills" />
          </div>
          <div class="coreStyle">
            <span style="margin-right: 80px">攻击：</span>
            <Rate :count="9" show-text v-model="heroObject.scores.attack" />
          </div>
          <div class="coreStyle">
            <span style="margin-right: 80px">生存：</span>
            <Rate :count="9" show-text v-model="heroObject.scores.survive" />
          </div>
        </div>
      </Panel>
      <Panel name="2">
        技能信息
        <div slot="content">
          <div>
            <Button type="primary" @click="handleAddSkills" native-type="submit"
              >添加技能</Button
            >
            <Row :v-if="heroObject.skills">
              <i-col
                span="12"
                v-for="(item, index) in heroObject.skills"
                :key="index"
              >
                <div class="coreStyle">
                  <span style="margin-right: 70px">技能{{ index + 1 }}：</span>
                  <Input
                    v-model="item.name"
                    placeholder="请输入技能名"
                    style="width: 40%"
                  />
                </div>
                <div class="coreStyle">
                  <span style="margin-right: 50px">技能图片：</span>
                  <Upload
                    :action="$http.defaults.baseURL + '/upload'"
                    :on-success="res => $set(item,'icon',item.icon= res.url)"
                    type="drag"
                    style="width: 180px; margin-left: 120px"
                  >
                    <div style="padding: 20px 0">
                      <img
                        :src="item.icon ? item.icon:nullIcon"
                        style="height: 50px; width: 50px;border-radius:50px"
                      />
                      <p>上传图片</p>
                    </div>
                  </Upload>
                </div>
                <div class="coreStyle">
                  <span style="margin-right: 45px">技能描述：</span>
                  <Input
                    v-model="item.description"
                    placeholder="请输入分类名"
                    style="width: 40%"
                    maxlength="100"
                    type="textarea"
                    :rows="4"
                    show-word-limit
                  />
                </div>
                <div class="coreStyle">
                  <span style="margin-right: 60px">小提示：</span>
                  <Input
                    v-model="item.types"
                    placeholder="请输入分类名"
                    style="width: 40%"
                    maxlength="50"
                    type="textarea"
                    :rows="2"
                    show-word-limit
                  />
                </div>
                <div>
                  <Button type="error" size="small" @click="()=>heroObject.skills.splice(index,1)">删除</Button>
                </div>
              </i-col>
            </Row>
          </div>
        </div>
      </Panel>
      <Panel name="3">
        其他信息
        <div slot="content">
          <div class="coreStyle">
            <span style="margin-right: 45px">顺风出装：</span>
            <Select
              v-model="heroObject.itemsFollow"
              style="width: 200px"
              multiple
            >
              <Option v-for="item in items" :value="item._id" :key="item._id">{{
                item.name
              }}</Option>
            </Select>
          </div>
          <div class="coreStyle">
            <span style="margin-right: 45px">逆风出装：</span>
            <Select
              v-model="heroObject.itemsAgainst"
              style="width: 200px"
              multiple
            >
              <Option v-for="item in items" :value="item._id" :key="item._id">{{
                item.name
              }}</Option>
            </Select>
          </div>
          <div class="coreStyle">
            <span style="margin-right: 45px">使用技巧：</span>
            <Input
              v-model="heroObject.usageTips"
              placeholder="请输入分类名"
              style="width: 40%"
              maxlength="100"
              type="textarea"
              show-word-limit
            />
          </div>
          <div class="coreStyle">
            <span style="margin-right: 45px">对抗技巧：</span>
            <Input
              v-model="heroObject.battleTips"
              placeholder="请输入分类名"
              style="width: 40%"
              maxlength="100"
              type="textarea"
              show-word-limit
            />
          </div>
          <div class="coreStyle">
            <span style="margin-right: 45px">团战思路：</span>
            <Input
              v-model="heroObject.teamTips"
              placeholder="请输入分类名"
              style="width: 40%"
              maxlength="100"
              type="textarea"
              show-word-limit
            />
          </div>
        </div>
      </Panel>
    </Collapse>
    <!-- <div class="btnStyle">
      <Button type="primary" @click="save" native-type="submit">保存</Button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      choiceValue: "1",
      categories: [],
      nullIcon:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606132313283&di=573714c8d34054fc4050dc0e03d4d75b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F00%2F96%2F90%2F6356f30ef3527b7.jpg",
      heroObject: {
        name: "",
        icon: "",
        title: "",
        categories: [],
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0,
        },
        skills: [
          {
            icon: "",
            name: "",
            description: "",
            types: "",
          },
        ],
        itemsFollow: [],
        itemsAgainst: [],
        usageTips: "",
        battleTips: "",
        teamTips: "",
      },
      ListData: [],
      selectClassly: "", //选中的分类
      items: [], //装备
      heroId: "",
    };
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
    this.fetch();
  },
  methods: {
    //获取上传图的url
    getUploadURL(res) {
      this.heroObject.icon = res.url;
    },
    //保存
    async save() {
      if (this.heroObject.name === "" || this.heroObject.name == undefined) {
        this.$Message.error("请输入名称！");
      } else if (this.heroId) {
        await this.$http.put(`rest/heroes/${this.heroId}`, this.heroObject);
        //刷新列表
        this.$router.push("/home/heroes/heroesList");
        this.$Message.success("保存成功！");
      } else {
        //console.log("this.heroObject",this.heroObject)
        await this.$http.post("rest/heroes", this.heroObject);
        this.$router.push("/home/heroes/heroesList");
        this.$Message.success("保存成功！");
      }
    },
    ///获取分类数据
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = Object.assign({}, this.categories, res.data);
      console.log("this.categories", this.categories);
    },
    //获取装备数据
    async fetchItems() {
      const res = await this.$http.get(`rest/items`);
      this.items = res.data;
      console.log("this.items", this.items);
    },

    //编辑时获取英雄信息
    async fetch() {
      this.heroId = this.$route.query.id;
      console.log("this.heroId", this.heroId);
      if (this.heroId === undefined) {
        return 0;
      } else {
        const res = await this.$http.get(`rest/heroes/${this.heroId}`);
        this.heroObject = res.data;
        console.log("this.items123", this.items);
      }
    },
    cancal() {
      this.$router.go(-1);
    },
    //添加技能
    handleAddSkills() {
      this.heroObject.skills.push({});
    },
  },
};
</script>

<style scoped lang="less">
.create {
  margin: 50px 30px 0 30px;
  .coreStyle {
    margin: 20px 0;
  }
  .btnStyle {
    margin: 20px 120px;
  }
}
</style>