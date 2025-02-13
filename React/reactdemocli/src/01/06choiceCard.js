import { Component } from "react";
import "./css/01class.css";
import Center from "./component/center";
import Film from "./component/film";
import Cinema from "./component/cinema";
import Navbar from "./07navbar";
class ChoiceCard extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 1,
          text: "电影",
        },
        {
          id: 2,
          text: "影院",
        },
        {
          id: 3,
          text: "我的",
        },
      ],
      current: 0,
      navbarTitle: "电影",
    };
  }

  render() {
    return (
      <div>
        <h2>选项卡</h2>
        <Navbar title={this.state.navbarTitle}></Navbar>
        <div>{this.whichCard()}</div>
        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              onClick={() => this.handleChoice(index)}
              className={this.state.current === index ? "active" : ""}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  whichCard() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;
      default:
        return null;
    }
  }
  handleChoice(index) {
    if(index === 0){
      this.setState({
        navbarTitle:"电影"
      })
    }else if(index === 1){
      this.setState({
        navbarTitle:"影院"
      })
    }else if(index  === 2){
      this.setState({
        navbarTitle:"我的"
      })
    }
    this.setState({
      current: index,
    });
  }
}

export default ChoiceCard;
