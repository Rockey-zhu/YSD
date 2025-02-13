import axios from "axios";
import config from "@/config";
import xeutil from "xe-utils";

var request: any = axios;
interface itemObj {
  key: String;
  value: String;
}
class adminAPI {
  // 构造函数
  constructor() {}
  getApiUrl(
    prefix: String,
    count = false,
    queryList: any[],
    sortbyList: any[],
    orderList: any[],
    limit = 0,
    offset = 0,
    searchqueryList = [],
    sectionqueryList = [] // {key:"ctime":value:[0,2]}
  ) {
    let url = `${prefix}?count=${count}`;
    let query = ``,
      sortby = "",
      searchquery = "",
      order = "",
      sectionquery = "";
    console.log("___queryList_", queryList);
    if (queryList.length > 0) {
      query += queryList.reduce(
        (strsr: String, item: itemObj, index: Number) => {
          let _key = item.key.toString().trim(),
            _value = item.value.toString().trim();
          if (_key !== "") {
            if (index > 0) strsr = strsr + `,${_key}:${_value}`;
            else strsr = strsr + `${_key}:${_value}`;
          }
          console.log("__queryList__", strsr);
          return strsr;
        },
        ""
      );
    }
    if (searchqueryList.length > 0) {
      searchquery += searchqueryList.reduce(
        (strsr: String, item: itemObj, index: Number) => {
          let _key = item.key.toString().trim(),
            _value = item.value.toString().trim();
          if (_key !== "") {
            if (index > 0) strsr = strsr + `,${_key}:${_value}`;
            else strsr = strsr + `${_key}:${_value}`;
          }
          return strsr;
        },
        ""
      );
    }
    if (sectionqueryList.length > 0) {
      sectionquery += sectionqueryList.reduce(
        (strsr: String, item: itemObj, index: Number) => {
          let _key = item.key.toString().trim(),
            _value = item.value;
          if (xeutil.isArray(_value) && _value.length > 0) {
            if (_key !== "") {
              if (_value.length == 1) {
                if (index > 0) strsr = strsr + `,${_key}:${_value[0]}`;
                else strsr = strsr + `${_key}:${_value[0]}`;
              } else {
                if (index > 0) {
                  strsr = strsr + `,${_key}:${_value[0]}:${_value[1]}`;
                } else {
                  strsr = strsr + `${_key}:${_value[0]}:${_value[1]}`;
                }
              }
            }
          }
          return strsr;
        },
        ""
      );
    }
    if (sortbyList.length > 0) {
      sortby += sortbyList.reduce(
        (strsr: String, item: itemObj, index: Number) => {
          let _key = item.toString().trim();
          if (_key !== "") {
            if (index > 0) strsr = strsr + `,${_key}`;
            else strsr = strsr + `${_key}`;
          }
          return strsr;
        },
        `&sortby=`
      );
    }
    if (orderList.length > 0) {
      order += orderList.reduce(
        (strsr: String, item: itemObj, index: Number) => {
          let _key = item.toString().trim();
          if (_key !== "") {
            if (index > 0) strsr = strsr + `,${_key}`;
            else strsr = strsr + `${_key}`;
          }
          return strsr;
        },
        `&order=`
      );
    }
    if (sortby === "" && order === "") {
      sortby = "&sortby=Ctime";
      order = "&order=desc";
    }
    let searchqueryStr = "";
    if (searchquery !== "" && searchqueryList.length > 0) {
      searchqueryStr = `&searchquery=${encodeURI(searchquery)}`;
    }
    let sectionqueryStr = "";
    if (sectionquery !== "" && sectionqueryList.length > 0) {
      sectionqueryStr = `&sectionquery=${encodeURI(sectionquery)}`;
    }
    let searchqueryInStr = "";
    if (searchquery !== "" && searchqueryList.length > 0) {
      searchqueryStr = `&searchquery=${encodeURI(searchquery)}`;
    }
    url +=
      `&query=${encodeURI(query)}` +
      searchqueryStr +
      sectionqueryStr +
      searchqueryInStr +
      encodeURI(sortby) +
      encodeURI(order) +
      `&limit=${limit}&offset=${offset}&t=` +
      new Date().getTime();

    return url;
  }
  // 增 POST
  Add(TableName = "", data: any) {
    if (TableName === "" || !xeutil.isString(TableName)) {
      return Promise.reject("TableName illegal");
    } else {
      return request({
        url: config.http + `/rest/${TableName}/Add`,
        method: "post",
        data: data,
        header: {
          token: "",
        },
      });
    }
  }
  // 删
  Delete(TableName = "", Id: Number, data: any) {
    if (TableName === "" || !xeutil.isString(TableName)) {
      return Promise.reject("TableName illegal");
    } else {
      return request({
        url: config.http + `/rest/${TableName}/Delete/${Id}`,
        method: "delete",
        data: data,
        header: {
          token: "",
        },
      });
    }
  }

  // 改
  Update(TableName = "", Id: Number, data: any) {
    if (TableName === "" || !xeutil.isString(TableName)) {
      return Promise.reject("TableName illegal");
    } else {
      return request({
        url: config.http + `/rest/${TableName}/Updata/${Id}`,
        method: "put",
        data: data,
        header: {
          token: "",
        },
      });
    }
  }
  // 查
  Search(
    TableName = "",
    count = false,
    queryList: any[], //精确查找
    sortbyList: any[],
    orderList: any[],
    limit = 0, //一页多少
    offset = 0, // 第几页
    searchqueryList = [], //模糊查找
    sectionqueryList = []
  ) {
    if (TableName === "" || !xeutil.isString(TableName)) {
      return Promise.reject("TableName illegal!");
    }
    let url = this.getApiUrl(
      `/rest/${TableName}/Search`,
      count,
      queryList,
      sortbyList,
      orderList,
      limit,
      offset,
      searchqueryList,
      sectionqueryList
    );
    // console.log("__url_", url);
    return request({
      url: config.http + url,
      method: "get",
      header: {
        token: "",
      },
    });
  }

  //get通用接口 适合查一条
  // Get(
  //     TableName = "",
  //     Id = 0,
  //     queryList:any
  // ) {
  //     if (TableName === '' || !xeutil.isString(TableName)) {
  //         return Promise.reject("TableName illegal!");
  //     }
  //     let url = this.getApiUrl(
  //         `/rest/${TableName}/Search/${Id}`,
  //         queryList
  //     )
  //     return request({
  //         url: config.http + url,
  //         method: 'get',
  //         header: {
  //             token: ""
  //         },
  //     })
  // }
  //下载
  downflie(item: any) {
    const url = item.url
      const filename = item.title
      const x = new XMLHttpRequest()
      x.open('GET', url, true)
      x.responseType = 'blob'
      x.onload = () => {
        // 会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。
        const url = window.URL.createObjectURL(x.response)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        a.click()
      }
      x.send()
  }
}

export default new adminAPI();
