import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu'
import {Container} from "react-bootstrap"
export default class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            name: null,
            email:null,
            rating:null,
            address:null,
        } 
    }
    create(){
        fetch("http://localhost:4000/restaurant",
        {
            method: "Post",
            headers:{
                'Content-Type':'application/json'
            },
    body:JSON.stringify(this.state)}).then((result)=>{
result.json().then((resp)=>{
   // console.warn(resp)
   alert("Restaurant hs been added Successfully!")
   
})
    })
    }
    render() {
        return (
            <div>
                <Container>
                 <NavbarMenu />
                 <h1>Restaurant Create</h1> 
                 <div>
                     <input className="form-control" onChange={(event)=>{this.setState({name:event.target.value})} } placeholder="Restaurant Name"/> <br /> <br/>

                     <input className="form-control" onChange={(event)=>{this.setState({email:event.target.value})} } placeholder="Restaurant Email"/> <br /> <br/>

                     <input className="form-control" onChange={(event)=>{this.setState({rating:event.target.value})} } placeholder="Restaurant Rating"/> <br /> <br/>

                     <input className="form-control" onChange={(event)=>{this.setState({address:event.target.value})} } placeholder="Restaurant Address"/> <br /> <br/>
                     <button className="btn btn-secondary" onClick={()=>{this.create()}}>Add Restaurant</button>
                 </div>
                 </Container>
            </div>
           
        )
    }
}
