import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Makers extends Component{
    constructor()
    {
        super()
        this.state={
            maker:[]
        }
    }
    componentDidMount(){
        //Introducir ahí MAKERS
    axios.get("").then(response=>    {
        this.setState({maker:response.data})
    })
}

render()
{
    return(
        <div className="Maker">
        <Link to='/'>Home</Link>
        {this.state.maker.map((maker,idx)=>
        {
            return <div key={idx}>
            <img src={maker.imageurl} alt ="Img"></img>
            <Link to ={`/makers/${maker._id}`}><h1>{maker.name}</h1></Link>
            <p>{maker.description}</p>
            <p>Created by : {maker.contributed_by}</p>
        
        </div>
        })}
    
        </div>

    )}}
    export default Makers;