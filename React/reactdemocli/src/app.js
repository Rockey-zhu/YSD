import { Component } from "react";
import Class01 from "./01/01class";
import Function01 from "./01/02function.js"
import ActiveBind from "./01/03activeBind"
import State from "./01/04state"
import ChoiceCard from "./01/06choiceCard"
import Vhtml from "./01/05vhtml"

import FieldFather from "./02/FiledFather"
class App extends Component {
  render() {
    return (
      <div>
        hello app
        <Class01></Class01>
        <Function01></Function01>
        <ActiveBind></ActiveBind>
        <State></State>
        <Vhtml></Vhtml>
        <ChoiceCard></ChoiceCard>
        <FieldFather> </FieldFather>
      </div>
    );
  }
}
export default App;
