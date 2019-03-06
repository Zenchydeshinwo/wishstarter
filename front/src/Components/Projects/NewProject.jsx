import React, { Component } from 'react';
import Projectservice from './Project-service';

import { Link } from 'react-router-dom';



class NewProject extends Component {
  constructor(props){
    super(props);
    this.state = { 
      title: '', 
      description: '',
      dreamer:''
        //Incluir aqui OnbejctId y maker
    };
    this.action = new Projectservice();
  }

  // handleChange() and handleSubmit() will be added here
  handleTitleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
  
    this.action.registerProject(title, description)
    .then( response => {
      this.setState({
        title: "", 
        description: ""
        
    });
    this.props.getUser(response)
    
    console.log('Esto es para ver que dato me llega en el response de user', response)
      
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    console.log('hi!!!')
    return(
      // more code will be added here
      <div>
      <Link to={'/'}>Home</Link>
    <h1>Introduce los datos de tu proyecto</h1>

    <form onSubmit={this.handleTitleSubmit}>
    <label> Title </label>
    <input type='text' name='title' value={this.state.title} onChange={eve=>this.handleChange(eve)} />
    <br/><br/>
    
    <label> Description </label>
    <input type='text' name='description' value={this.state.description} onChange={eve=>this.handleChange(eve)} />
    <br/><br/>

    <input type='submit' value='NewProject'/>

    </form>
    </div>
    )
  }
}

export default NewProject; 










// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";




// class NewProject extends Component {
//     constructor(props) {
//       super(props);
      



//       this.state = {
//         title: "",
//         description: "",        
//         dreamer: "",
//         maker: ""

//       };

      
//       let serviceAxios = axios.create({
//         baseURL: `${process.env.REACT_APP_URL}/api`,
//         withCredentials: true
//       })
//       this.serviceAxios = serviceAxios;
      
//     }

//     handleNameInput = e => {
//       let newState = {...this.state}
//       newState.title=e.target.value
//         this.setState(newState,()=>{
//           console.log(this.state.title)
//         });
//       };

//       handleDescriptionInput = e => {
//         this.setState({
//           ...this.state,
//           description: e.target.value
//         });
//       };

//       // handleDreamerInput = e => {
//       //   this.setState({
//       //     ...this.props.myProject,
//       //     dreamer: e.target.value
//       //   });
//       // };

//       // handleMakerInput = e => {
//       //   this.setState({
//       //     ...this.props.myProject,
//       //     maker: e.target.value
//       //   });
//       // };
    
//       handleFormSubmit = e => {
//         e.preventDefault(); 
    
//         console.log(this.state)
//         //direccion a la que enviar el nuevo proyecto
//         this.serviceAxios.post("/newProject", {
//           name: this.state.title,
//           description: this.state.description
//         })
//         .then(response => {
//           console.log(response)
//           // this.setState({ project: response.data });
//           this.setState({
                   
//           title: "",
//           description: "",
//           // tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
//           // owner: {type: Schema.Types.ObjectId, ref: 'User'}
//           })
//         })
//         .catch(err => {
//           console.log(err);
//         });
//       };






//       // handleFormSubmit = e => {
//       //   e.preventDefault();
    
//       //   console.log(this.state)
//       //   //direccion a la que enviar el nuevo proyecto
//       //   axios.post("", this.state)
//       //   .then(response => {
//       //     console.log(response)
//       //     // this.setState({ project: response.data });
//       //   })
//       //   .catch(err => {
//       //     console.log(err);
//       //   });
//       // };
    

//       render() {
//         return (
//           <div>
//             <Link to="/">Back</Link>
//             <form onSubmit={this.handleFormSubmit}>
//               <div className="form-group">

//                 <label>Name:</label>
//                 <input type="text" className="form-control" name="Name"  onChange={e => this.handleNameInput(e)} />
    
//                 <label>Description:</label>
//                 <input type="text" className="form-control" name="description"  onChange={e => this.handleDescriptionInput(e)} />

//                 {/* <label>Dreamer:</label>
//                 <input type="text" className="form-control"  name="dreamer"   onChange={e => this.handleDreamerInput(e)} /> */}
    
//                 <label>Maker:</label>
//                 <input  type="text"  className="form-control"  name="maker"   onChange={e => this.handleMakerInput(e)} />
                
//               </div>
    
//               <input type="submit" value="Add ner project" />
//             </form>
//           </div>
//         );
//       }
    
//   }
  
// export default NewProject;