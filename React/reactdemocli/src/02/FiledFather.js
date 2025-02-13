import React, {
    Component
} from "react"


class Field extends Component {
    render() {
        return (<div>
                <label>{this.props.label}</label>
                <input type={this.props.type} value={this.props.value} onChange={
                    (evt)=>{
                        this.props.onChangeEvent(evt.target.value)
                    }
                }></input>
            </div>)

    }
}
export default class FieldFather extends Component {
    state = {
        userName:localStorage.getItem("userName") || "",
        password:localStorage.getItem("password") || "",
    }
    render() {
        return (
        <div>
            <h1> 登录页面 </h1>
            <Field label="账号" type="input" value={this.state.userName} onChangeEvent={
                (evt)=>{
                    this.setState({
                        userName:evt
                    })
                }
            }></Field>
            <Field label="密码" type="password" value={this.state.password} onChangeEvent={
                (evt)=>{
                    this.setState({
                        password:evt
                    })
                }
            }></Field>
            <button onClick={()=>{
                localStorage.setItem("userName",this.state.userName) ;
                localStorage.setItem("password",this.state.password) ;
                console.log("__获取数据_",this.state.password,this.state.userName)
            }}>登录</button>
            <button onClick={()=>{
                localStorage.setItem("userName",this.state.userName) ;
                localStorage.setItem("password",this.state.password) ;
                this.setState({
                    userName:"",
                    password:""
                })
            }}>重置</button>
        </div>
        ) 
    }
}