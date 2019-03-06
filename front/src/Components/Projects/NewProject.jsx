import React, { Component } from 'react';
import AuthService from './Auth-service';

import { Link } from 'react-router-dom';



class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '', 
      password: '',
      mensaje: ''  
    };
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.signup(username, password)
    .then( response => {
      this.setState({
        username: "", 
        password: "",
    });

      // this.setState({...this.state,
      // mensaje: response.data.message})
      this.props.getUser(response)
      
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
    <h1>Aqui va un formulario</h1>
    )
  }
}

export default Signup; 










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