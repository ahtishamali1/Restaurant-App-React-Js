import React, { Component } from "react";
import { Button,Container,Card } from "react-bootstrap";
import NavbarMenu from './NavbarMenu'
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  login(){
      //console.warn("login",this.state)
     
    fetch("http://localhost:4000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        //console.warn("resp", resp);
        if(resp.length > 0){
          localStorage.setItem('login',JSON.stringify(resp))
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
        <Container>
         <NavbarMenu />
         <div className="d-inline-block text-center">
         <Card  style={{ width: '25rem' }}>
           <Card.Body>
          <div>
        <input
          type="text" className=" form-control mt-3"
          name="user"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }} placeholder="Username....."
        />
</div>
<div>
        <input
          type="password"
          className="form-control mt-3"
          name="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }} placeholder="Password....."
        />
        </div>
        <Button className="btn btn-success px-5 py-2 mt-3" onClick={()=>{this.login()}}>Login</Button>
        </Card.Body>
        </Card>
        </div>
        </Container>
      </React.Fragment>
    );
  }
}
