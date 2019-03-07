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
    console.log('VEMOS EL ID', this.props.match.params.id)
    this.getEdProject(this.props.match.params.id)
    console.log('Estado', this.state)

}

 
  
  // handleChange() and handleSubmit() will be added here
  // handleTitleSubmit = (event) => {
  //   event.preventDefault();
  //   const title = this.state.title;
  //   const description = this.state.description;
  //   const video = this.state.video;

  //   this.action.editProject(title, description, video)
  //   .then( response => {
  //     this.setState({
  //       title: "", 
  //       description: "",
  //       video:""
  //   });
  //  this.props.getUser(response)
    
  //   console.log('Awui estamos editando', response)
      
  //   })
  //   .catch( error => console.log(error) )
  // }
  
  // handleChange = (event) => {  
  //   const {name, value} = event.target;
  //   this.setState({[name]: value});
  // }
  
  render(){
    console.log('VEMOS EL ID EN RENDER', this.props.match.params.id)
    console.log('STATE',this.state)
    //console.log('STTTTTTTTTTTTATE', this.state)
    
    return(
      // more code will be added here
      <div>

          
      <Link to={'/'}>Home</Link>
    <h1>Edita tu proyecyo aquí</h1>

    <form onSubmit={this.handleTitleSubmit}>
    {/* <label> Title </label>
    <input type='text' name='title' value={this.state.title} onChange={eve=>this.handleChange(eve)} /> */}
    <br/><br/>
      <h1>{this.state.title}</h1>
    <div>
            <ReactPlayer
                url={this.state.video}
                className='react-player'
                playing='stop'
                width='10%'
                height='10%'
            />
            </div>

    {/* <label> Description </label>
    <input type='text' name='description' value={this.state.description} onChange={eve=>this.handleChange(eve)} /> */}
    <br/><br/>
      
    <input type='submit' value='EditProject'/>

    </form>
    </div>
    )
  }
}

export default EditProject; 