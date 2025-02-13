
<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from '../../guide.js'
 
export default {
  name: "Guide",
  data () {
    return {
      driver: null
    }
  },
  methods: {
    openHelp() {
      this.driver.defineSteps(steps)
      this.driver.start()
    },
  },
    mounted() {
    this.driver = new Driver({
            doneBtnText: "完成", //结束按钮的文字
            stageBackground: "#ffffff", //突出显示元素的背景颜色
            nextBtnText: "下一步", //下一步按钮的文字
            prevBtnText: "上一步", //上一步按钮的文字
            closeBtnText: "关闭" ,//关闭按钮的文字
            // onHighlightStarted:(Element)=> {},//元素即将突出显示时调用
            // onHighlighted:(Element)=> {},//元素完全突出显示时调用
            // onDeselected:(Element)=> {},//取消选择元素时调用
            // onReset:(Element)=> {},//当要清除叠加时调用
            // onNext:(Element)=> {},//在任何步骤中移动到下一步时调用
            // onPrevious:(Element)=> {},//在任何步骤中移动到上一步时调用
        });
    // this.driver = new Driver()
  },
}
</script>
