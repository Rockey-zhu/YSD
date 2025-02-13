import { Component } from "react";
import "./css/01class.css"; //webpack 支持的

class State extends Component {
  //   state = {
  //     text: "收藏",
  //   };

  constructor() {
    super();
    this.state = {
      text: "收藏",
      listArr: ["1", "2"],
    };
  }
  render() {
    let listArr = this.state.listArr.map((item, index) => (
      <li key={index}>
        {item}
        <button
          onClick={() => {
            this.onClickDel(item, index);
          }}
        >
          删除
        </button>
      </li>
    ));
    return (
      <div>
        <br></br>
        <h2>state状态</h2>
        <button
          onClick={() => {
            this.setState({
              text: "取消",
            });
          }}
        >
          {this.state.text}
        </button>
        <button
          onClick={() => {
            this.handleAdd();
          }}
        >
          新增
        </button>
        <div>
          <ul>{ listArr }</ul>
        </div>
      </div>
    );
  }

  handleAdd() {
    let randoms = Math.random() * 10;
    // this.state.listArr.push(randoms);  //不提倡这么写
    let newList = this.state.listArr.slice(); //slice() 可以浅拷贝
    newList.push(randoms);
    this.setState({
      listArr: newList,
    });
  }

  onClickDel(item, index) {
    let newList = this.state.listArr.slice();
    newList.splice(index, 1);
    this.setState({
      listArr: newList,
    });
  }
}

export default State;
