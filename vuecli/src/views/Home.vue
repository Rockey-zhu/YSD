<template>
  <div class="home">
    <div>
      <div style="font-size: large" id="titleTop">{{ title }}</div>
    </div>
    <br />
    <button @click="onclick1">点击切换</button>
    <div>{{ reportTime }}</div>
    <ces>
      <div slot="ces">1111111</div>
    </ces>
    <div style="height:100px">
      <vue-neditor-wrap
        style=""
          v-model="context"
          :config="myConfig"
          :destroy="false"
        ></vue-neditor-wrap>
    </div>
  </div>
</template>

<script>
import ces from "../components/ceshi";


export default {
  components: {
    ces,
  },
  data() {
    return {
      english: "english",
      chinese: "",
      title: "十秒后自动刷新",
      fourLevelData: this.$store.state.fourLevelData,
      fourLevelDataStr: [],
      reportTime: 10,
      ref: "hello",
      context: "",
      
    };
  },
  computed:{
    myConfig() {
      return {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: "/api/web/upload/ueditor",
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/Neditor/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: window.innerWidth <= 1366 ? 100 : 90,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 关闭自动保存
        enableAutoSave: false,
        // 是否启用元素路径，默认是显示
        elementPathEnabled: false,
        //是否开启初始化时即全屏，默认关闭
        // fullscreen:true,
        // {Number} [默认值：10000] //允许的最大字符数
        maximumWords: 2400,
        // scaleEnabled: true,
        // minFrameWidth: 400,
        // minFrameHeight: 80,
        toolbars: [
          [
            "fullscreen", // 全屏
            "source", //源代码
            // "|",
            // "undo", // 撤销
            // "redo", // 重做
            // "|",
            "bold", //加粗
            "italic", //斜体
            "underline", // 下划线
            // "fontborder", //字符边框
            // "strikethrough", //删除线
            // "superscript", // 上标
            // "subscript", // 下标
            // "removeformat", //清除格式
            // "formatmatch", //格式刷
            // "autotypeset", //自动排版
            // "blockquote", // 引用
            // "pasteplain", // 纯文本模式
            "|",
            "forecolor", //字体颜色
            "backcolor", //背景色
            "insertorderedlist", // 有序列表
            "insertunorderedlist", // 无序列表
            // "selectall", //全选
            // "cleardoc", //清空文档
            // "|",
            // "rowspacingtop",//段前距
            // "rowspacingbottom", // 段后距
            "lineheight", //行间距
            "|",
            // "customstyle", //自定义标题
            // "paragraph", // 段落格式
            "fontfamily", // 字体
            "fontsize", //字号
            "|",
            // "directionalityltr", //从左向右输入
            // "directionalityrtl", //从右向左输入
            "indent", //首行缩进
            "|",
            "justifyleft", //居左对齐
            "justifycenter", //居中对齐
            "justifyright", //具有对齐
            "justifyjustify", //两端对齐
            "|",
            // "touppercase", // 字母大写
            // "tolowercase", //字母小写
            // "|",
            // "link", //超链接
            // "unlink", //取消连接
            // "anchor", //锚点
            // "|",
            // "imagenone", //默认
            // "imageleft", // 左浮动
            // "imageright", // 右浮动
            // "imagecenter", // 居中
            // "|",
            // "simpleupload", // 单图上传
            // "insertimage", //多图上传
            // "emotion",// 表情
            // "scrawl", // 涂鸦
            // "insertvideo", //视频
            // "music", //音乐
            // "attachment", //附件
            // "map", // 百度地图
            // "gmap", // 谷歌地图
            // "insertframe", // 插入iframe
            // "insertcode", // 代码语言
            // "webapp", // 百度应用
            // "pagebreak", //分页
            "template", // 模板
            // "background", // 背景
            // "|",
            // "horizontal", // 分割线
            // "date", // 日期
            // "time", // 时间
            // "spechars", // 特殊字符
            // "snapscreen", // 截图
            // "wordimage", // 图片转存
            "|",
            "inserttable", // 插入表格
            "deletetable", // 删除表格
            "insertparagraphbeforetable", // 表格前插入行
            "insertrow", // 前插入行
            "deleterow", // 删除行
            "insertcol", // 前插入列
            "deletecol", // 删除列
            "mergecells", // 合并多个单元格
            "mergeright", //右合并单元格
            "mergedown", // 下合并单元格
            "splittocells", // 完全拆分单元格
            "splittorows", // 拆分成行
            "splittocols", // 拆分成列
            "charts", // 图表
            "|",
            // "print", // 打印
            "preview" // 预览
            // "searchreplace", // 查询替换
            // "drafts", // 从草稿箱加载
            // "help" // 帮助
          ]
        ],
        fontfamily: [
          { label: "Calibri", name: "Calibri", val: "Calibri" },
          { label: "", name: "andaleMono", val: "andale mono" },
          { label: "", name: "arial", val: "arial, helvetica,sans-serif" },
          { label: "", name: "arialBlack", val: "arial black,avant garde" },
          { label: "", name: "comicSansMs", val: "comic sans ms" },
          { label: "", name: "impact", val: "impact,chicago" },
          { label: "", name: "timesNewRoman", val: "times new roman" },
          { label: "", name: "songti", val: "宋体,SimSun" },
          { label: "", name: "kaiti", val: "楷体,楷体_GB2312, SimKai" },
          { label: "", name: "yahei", val: "微软雅黑,Microsoft YaHei" },
          { label: "", name: "heiti", val: "黑体, SimHei" },
          { label: "", name: "lishu", val: "隶书, SimLi" }
        ]
      };
    },
  },
  methods: {
    onclick1() {
      let i = parseInt(Math.random() * 3652);
      this.title = this.fourLevelDataStr[i];
      //console.log(this.title);
      //this.english = this.title[0];
      //this.chinese = this.title[1];
      let text = document.getElementById("titleTop").innerHTML;
      console.log(text);
    },
    //   ceshi1(){
    //       let appdata =require('../components/icon-iview')
    //       appdata.forEach(element => {
    //           element.title = element.title.trim();
    //           console.log("ele---",element)
    //       });
    //       //console.log("-------appdata---------",appdata);
    //   }
  },
  mounted() {
    //将字符串根据换行符转换成数组
    this.fourLevelDataStr = this.fourLevelData.split(/[(\r\n)\r\n]+/);
    //数组去空值
    this.fourLevelDataStr = this.fourLevelDataStr.filter((s) => {
      return s && s.trim();
    });

    //提示时间每秒减一
    setInterval(() => {
      this.reportTime -= 1;
    }, 1000);
    //console.log("arr1",this.fourLevelDataStr)
    //每10秒刷新一次界面数据
    setInterval(() => {
      //调用点击事件
      this.onclick1();
      this.reportTime = 10;
    }, 10000);
    //this.ceshi1();
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  border: 0px;
}
.home {
  background-color: #cccc;
}
</style>