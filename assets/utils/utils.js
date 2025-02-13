export default {
  // 数组去重
  uniqueArr: function (arr) {
    return [...new Set(arr)];
  },

  // 从url获取参数并转为对象
  getParameters: function (URL) {
    return JSON.parse(
      `{"${decodeURI(URL.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')}"}`
    );
  },

  // 检查对象是否为空   空:true
  isEmpty: function (obj) {
    return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
  },

  // 反转字符串
  reverse: function (str) {
    return str.split("").reverse().join("");
  },

  // 随机16进制
  randomHexColor: function () {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")}`;
  },

  // 检测元素是否处于焦点
  elementIsInFocus: function (el) {
    return el === document.activeElement;
  },

  // 检查设备类型
  judgeDeviceType: function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "PC";
  },

  // 文字复制到剪贴板
  copyText: function (text) {
    return navigator.clipboard.writeText(text);
  },

  // 获取选定的文本
  getSelectedText: function () {
    return window.getSelection().toString();
  },

  // 查询某天是否为工作日
  isWeekday: function (data) {
    return date.getDay() % 6 !== 0;
  },

  // 转换华氏/摄氏
  fahrenheitToCelsius: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },

  // 将摄氏温度转华氏温度
  celsiusToFahrenheit: function (celsius) {
    return (celsius * 9) / 5 + 32;
  },

  // 两日期之间相差的天数
  dayDiff: function (date1, date2) {
    return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
  },

  // 将 RGB 转换为十六进制
  rgbToHex: function (r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },

  // 计算数组平均值
  average: function (arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
  },
  // ip 校验
  /**
   * 校验数组中是否有错误格式IP，有返回true
   * @param {Array} arrs
   * @returns 如果IP格式错误，返回 true；否则返回false
   */
  IpVerificationArr: function (arrs) {
    let pattern =
      /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if (arrs.length != "") {
      let isFindErr = arrs.some((ele) => {
        if (!pattern.test(ele)) {
          return true;
        }
      });
      return isFindErr;
    } else {
      return false;
    }
  },
  // 休眠
  promiseSleep:function(ms){
    let temp = new Promise((reslove) => {
      setTimeout(reslove,ms)
    });
    return temp;
  },

};
