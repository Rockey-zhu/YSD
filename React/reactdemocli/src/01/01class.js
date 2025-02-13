import { Component } from "react";
import "./css/01class.css"; //webpack 支持的

class Test extends Component {
  render() {
    var style1 = {
      background: "red",
    };
    return (
      <div style={style1}>
        class 组件
        {
          // 注释
        }
        <div style={{ background: "yellow" }} className="active">
          222
        </div>
      </div>
    );
  }
}

export default Test;
