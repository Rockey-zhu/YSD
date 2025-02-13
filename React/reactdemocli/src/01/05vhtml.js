import React, { Component } from "react";

class Test extends Component {
  state = {
    myhtml: "<h4>富文本解析<h4>",
  };
  myref = React.createRef();
  render() {
    return (
      <div>
        <h2>富文本</h2>
        <input ref={this.myref}></input>
        <button
          onClick={() => {
            this.handleToAdd();
          }}
        >
          add
        </button>
        {/* 很危险 */}
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.myhtml,
          }}
        ></div>
      </div>
    );
  }

  handleToAdd() {
    let value = this.myref.current.value;
    this.setState({
      myhtml: value,
    });
  }
}

export default Test;
