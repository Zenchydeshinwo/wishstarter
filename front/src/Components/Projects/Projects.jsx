import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Projects extends Component{
    constructor()
    {
        super()
        this.state={
            project:[]
        }
    }
    componentDidMount(){
        //Introducir ahí la direccion de la API, o el acceso a MONGO
    axios.get("").then(response=>    {
        this.setState({project:response.data})
    })
}

render()
{
    return(
        <div className="Project">
        <Link to='/'>Back</Link>
        {this.state.project.map((project,idx)=>
        {
            return <div key={idx}>
            <img src={project.imageurl} alt ="Img"></img>
            <p>{project.description}</p>
            <p>Dreamer: {project.creator}</p>
            <p>Maker/s: {project.makers}</p>
        </div>
        })}
    
        </div>

    )}}
    export default Projects;


