import React, { Component } from "react";

class ActiveBind extends Component {
  state = {
    isShow: true,
  };
  a = 100;
  myref = React.createRef();
  render() {
    return (
      <div>
        <br></br>
        <h2>事件绑定</h2>
        <input ref={this.myref} defaultValue="初始值"></input>

        {/* 不推荐 */}
        <button onClick={this.addFunction.bind(this)}>add</button>
        {/* 推荐 */}
        <button onClick={this.addFunction1}>add1</button>
        {/* 非常推荐 */}
        <button
          onClick={() => {
            this.addFunction2(); //推荐写法
          }}
        >
          add2
        </button>
        <button
          onClick={() => {
            this.handleDel();
          }}
        >
          清空
        </button>

        <br></br>
        <div style={{ marginTop: "10px" }}>
          <h4>条件渲染</h4>
          <button
            onClick={() => {
              this.setState({ isShow: !this.state.isShow });
            }}
          >
            隐藏
          </button>
        </div>
        {this.state.isShow ? <div>显示</div> : ""}
      </div>
    );
  }
  addFunction() {
    // console.log("__1_",this)  无bind ，undefind
    console.log("__1_", this);
  }
  addFunction1 = () => {
    console.log("___", this);
  };
  addFunction2() {
    console.log("__2_", this);
    // console.log("__2_",this.refs.mytext.value)
    console.log("__2_", this.myref.current.value);
  }

  handleDel() {
    this.myref.current.value = "";
  }
}

export default ActiveBind;
