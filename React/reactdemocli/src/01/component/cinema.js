import { Component } from "react";
import axios from "axios";
import BetterScroll from "@better-scroll/core";
export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      List: [],
      backList: [],
      current: 0,
    };
    axios({
      url: "http://81.68.222.174:3000/v1/web/api/rest/file_table/Search?count=false&query=CustomType:JS&sortby=Ctime&order=desc&limit=10&offset=1&t=1673407657015",
    }).then((res) => {
      this.setState({
        List: res.data.data,
        backList: res.data.data,
      },
      () => {
        new BetterScroll(`.BetterScrollClass`);
      });
    });
  }
  render() {
    return (
      <div>
        <input onInput={this.handleInput}></input>
        <div style={{ height: `60px`, overflow: "hidden" }}  className="BetterScrollClass">
          <ul>
            {this.state.List.map((item, index) => (
              <li key={item.Name + index}>{item.Name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  handleInput = (event) => {
    // 模糊查询
    let newList = this.state.backList.filter((item) =>
      item.Name.toUpperCase().includes(event.target.value)
    );
    this.setState(
      {
        List: newList,
      }
    );
  };
}

// let event =[ {
//   id:"sales",
//   width:10,
//   height:12，
// }]

// function height&Widthchange(event){
//   // 获取页面高度  和 宽度  window.client
//   let windth
//   let height
//   envet.map(item =>{
//     //-----
//     let dom =  document.getelememtbyId(item.id)
//     dom.width = width * item.width * 0.01
//     dom.height = width * item.height * 0.01
//   })
// }

// //监听事件
// listen(height())
