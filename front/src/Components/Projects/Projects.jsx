import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Projectservice from './Project-service'


class Projects extends Component{
    constructor()
    {
        super()
        this.state={
            project:[]
        }
    this.projectservice= new Projectservice()
    }
    
    componentDidMount(){
       
        //Introducir ahí la direccion de la API, o el acceso a MONGO
    this.projectservice.requestProject().then(response=>
          { console.log('ljkbsfvjbsfvlkj', response) 
        this.setState({project:response})
    })
}

render()
{
    return(
        <div className="Project">
        <Link to='/'>Home</Link>

                {this.state.project.map((project,idx)=>
        {
            return <div key={idx}>
            <h1>GGGGGGGGGG</h1>
            {/* <img src={project.imageurl} alt ="Img"></img> */}
            <p>HOLAAAA</p>
            {/* <p>{project.description}</p> */}
            <p>Dreamer: {project.title}</p>
            {/* <p>Description: {project.description}</p> */}
        </div>
        })}
    
        </div>

    )}}
    export default Projects;


