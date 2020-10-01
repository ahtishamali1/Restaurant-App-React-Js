import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu'
import {Container} from "react-bootstrap"
export default class RestaurantDetail extends Component {
    render() {
        return (
            <Container>
            <div>
                 <NavbarMenu />
                 <h1>Restaurant Detail</h1> 
            </div>
            </Container>
        )
    }
}
