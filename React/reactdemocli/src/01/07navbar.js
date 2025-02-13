import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  //传参校验
  static  propsType = {
    title: PropTypes.string, 
    demo: PropTypes.string, 
  };
//   默认值
static defaultProps ={
    title:"默认值",
    demo:"demo"
}
  render() {
    return (
      <div>
        <div>Navbar-{this.props.title}-{this.props.demo}</div>
      </div>
    );
  }
}

export default Navbar;
