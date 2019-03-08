import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Projectservice from './Project-service'
import EditProject from './EditProject';
import ReactPlayer from 'react-player'
import './Projects.css'

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
          {  
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
            {/* <h1>GGGGGGGGGG</h1> */}
            {/* <img src={project.imageurl} alt ="Img"></img> */}
            <p>Hola estes es un proyecto en detalle</p>
            {/* <p>{project.description}</p> */}
            <p>Name of the project: {project.title}</p>
            {/* <p>Description: {project.description}</p> */}
            <div className='video'>
            <ReactPlayer
                url={project.video}
                className='react-player'
               // playing='true'
                width='20%'
                height='5%'
            />
            </div>
            <Link
                    to={`/project/${project._id}`}
                    key={project._id} >Ver Proyecto<li key={idx}><div><span>{project.name}</span></div></li>
            </Link>
            
        </div>
        })}
    
        </div>

    )}}
    export default Projects;


