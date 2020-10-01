import React, { Component } from 'react'
import {Container, Jumbotron} from "react-bootstrap"
import NavbarMenu from './NavbarMenu'
export default class Home extends Component {
    render() {
        return (
                 <div>
                     <Container>
                     <NavbarMenu />
              <h1>Home</h1> 
             

              <img src="./images/undraw.png" className="img-fluid"/>
            
              </Container>
            </div>
        )
    }
}
