import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SingleProject extends Component {
    constructor (props){
        super(props)
        this.state={
            project:{}
            }
        }

    

    componentDidMount(){
        // acceso al proyecto que se quiere comprobar
        axios.get("").then(response=>{
            const projectId= this.props.match.params.projectId
            const project = response.data.filter(project=>{
                return project._id === projectId
            })[0];
            this.setState({project:project})
        })
    }


    render (){
    return(
        <div className='project'>
            <Link to ='/'>Back</Link>
            <h2>Single Proeject</h2>
            <div>
                <img src={this.state.project.imageurl} alt='Img bir'/>
                <h1>{this.state.project.name}</h1>
                <p>{this.state.project.description}</p>
                <p>Dreamer: {this.state.project.dreamer}</p>
                <p>Maker/s: {this.state.project.maker}</p>
            </div>
        </div>
    )
    }
}

export default SingleProject;

