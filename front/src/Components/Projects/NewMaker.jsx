import React, { Component } from 'react';
import Makerservice from './Maker-service';

import { Link } from 'react-router-dom';



class NewMaker extends Component {
  
  constructor(props){
    //console.log(this.props.key)
    super(props);
    this.state = { 
      named: '', 
      orientation: ''
    //   video:'',
    //   dreamer:''
        //Incluir aqui OnbejctId y maker
    };
    this.action = new Makerservice();
  }

  
  // handleChange() and handleSubmit() will be added here
  handleTitleSubmit = (event) => {
    event.preventDefault();
    const named = this.state.named;
    const orientation = this.state.orientation;
   //const video=this.state.video

    this.action.registerMaker(named, orientation)
    .then( response => {
        
      this.setState({
        named: "", 
        orientation: ""
        // video:""
    });
   // this.props.getUser(response)
    
    console.log('Esto es para ver que dato me llega en el response de user', response)
      
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    
    
    return(
      // more code will be added here
      <div>
      <Link to={'/'}>Home</Link>
    <h1>Introduce los datos de tu perfil de maker</h1>

    <form onSubmit={this.handleTitleSubmit}>
    <label> Nombre de maker </label>
    <input type='text' name='named' value={this.state.named} onChange={eve=>this.handleChange(eve)} />
    <br/><br/>
    

    <label> Describe tu orientación como maker </label>
    <input type='text' name='orientation' value={this.state.orientation} onChange={eve=>this.handleChange(eve)} />
    <br/><br/>

    {/* <label> Video URL </label>
    <input type='text' name='video' value={this.state.video} onChange={eve=>this.handleChange(eve)} />
    <br/><br/> */}
      
    <input type='submit' value='NewMaker'/>

    </form>
    </div>
    )
  }
}

export default NewMaker; 