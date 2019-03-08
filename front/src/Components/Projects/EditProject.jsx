import React, { Component } from 'react';
import Projectservice from './Project-service';

import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'



class EditProject extends Component {
  
  constructor(props){
    //console.log(this.props.key)
    super(props);
    this.state = { 
      title: '', 
      description: '',
      video:'',
      dreamer:''
        //Incluir aqui OnbejctId y maker
    };
    this.action = new Projectservice();
//Aqui invoco getEdProject algo como 
     //  getEdProject(this.props.match.params.id)
  }

  getEdProject = (numberid)=>{
  this.action.getProj(numberid)
  .then(response=>
    this.setState({
      title:response.title,
      description:response.description,
      video:response.video
    })
    .catch(error=>console.log(error))
    )    
  }

  componentDidMount () {
    // console.log('VEMOS EL ID', this.props.match.params.id)
    this.getEdProject(this.props.match.params.id)
    // console.log('Estado', this.state)

}

 
  
  //handleChange() and handleSubmit() will be added here

  handleTitleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const video = this.state.video;
    //const _id=this.props.match.params.id;

    this.action.superEditProject(this.props.match.params.id,this.state )
    .then( response => {
      this.setState({
        title: "", 
        description: "",
        video:""
    })      
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  
  render(){
    // console.log('EditProject.jsx match params id', this.props.match.params.id)
    // console.log('EditProject.jsx State',this.state)
    //console.log('STTTTTTTTTTTTATE', this.state)
    
    return(
      // more code will be added here
      <div>

          
      <Link to={'/'}>Home</Link>
    <h1>Edita tu proyecyo aquí</h1>

    
    {/* <label> Title </label>
    <input type='text' name='title' value={this.state.title} onChange={eve=>this.handleChange(eve)} /> */}
    <br/><br/>
      <h1>Este es el id:{this.props.match.params.id}</h1>
      <h1>Este es el proyecto:{this.state.title}</h1>
      <br/><br/>
      <h1>Consiste enlo siguiente:{this.state.description}</h1>
    <div>
            <ReactPlayer
                url={this.state.video}
                className='react-player'
               // playing
                width='20%'
                height='5%'
            />
            </div>

    {/* <label> Description </label>
    <input type='text' name='description' value={this.state.description} onChange={eve=>this.handleChange(eve)} /> */}
    <br/><br/>
    <form onSubmit={this.handleTitleSubmit}>

    <label> Title </label>
    <input type='text' name='title'  onChange={eve=>this.handleChange(eve)} />

    <label> Description </label>
    <input type='text' name='description' onChange={eve=>this.handleChange(eve)} />


    <input type='submit' value='superEditProject'/>
    <br></br>

    </form>
    <form onSubmit={this.handleTitleSubmit}>
    <input type='submit' value='Delete this project'/>
    <br></br>

    </form>

    </div>
    )
  }
}

export default EditProject; 