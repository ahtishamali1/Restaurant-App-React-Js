import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  login(){
      console.warn("login",this.state)
     
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if(resp.length > 0){
console.warn(this.props.history.push('list'))
        }
        else
        {
alert("Please check username or password")
        }

        
      });
    });
  }
  render() {
    return (
      <React.Fragment>
          <div>
        <input
          type="text"
          name="user"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }} placeholder="Username....."
        />
</div>
<div>
        <input
          type="password"
          name="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }} placeholder="Password....."
        />
        </div>
        <Button onClick={()=>{this.login()}}>Login</Button>
        
      </React.Fragment>
    );
  }
}
