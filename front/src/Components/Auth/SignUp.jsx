import React, { Component } from 'react';
import AuthService from './Auth-service';

import { Link , Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '', 
      password: '',
      mensaje: '',
      redirect:false  
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
        redirect:true
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
    if(this.state.redirect){
     return <Redirect to='/' />
    }
    return(
      // more code will be added here
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
        
        <label>Password:</label>
        <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
        
        <input type="submit" value="Signup" />
      </form>
<h1>y</h1>
      <p>Already have account? 
          <Link to={"/login"}> Login</Link>
          
          <Link to={"/"}> Home</Link>
      </p>

    </div>
    )
  }
}

export default Signup; 





// import React, { Component } from 'react';
// import AuthService from './auth-service';
// import { Link } from 'react-router-dom';


// class Signup extends Component {
//   constructor(props){
//     super(props);
//     this.state = { username: '', password: '', campus: '', course:''};
//     this.service = new AuthService();
//   }

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     const username = this.state.username;
//     const password = this.state.password;
//     const campus = this.state.campus;
//     const course = this.state.course;

//     this.service.signup(username, password, campus, course)
//     .then( response => {
//         this.setState({
//             username: "", 
//             password: "",
//             campus: "",
//             course: ""
//         });
//         this.props.getUser(response)
//     })
//     .catch( error => console.log(error) )
//   }

//   handleChange = (event) => {  
//     const {name, value} = event.target;
//     this.setState({[name]: value});
//   }

//   render(){
//     return(
//         <div>
//         <form onSubmit={this.handleFormSubmit}>
//           <label>Username:</label>
//           <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

//           <label>Password:</label>
//           <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

//           <label>Campus:</label>
//           <input type="text" name="campus" value={this.state.campus} onChange={ e => this.handleChange(e)} />

//           <label>Course:</label>
//           <input type="" name="course" value={this.state.course} onChange={ e => this.handleChange(e)} />

//           <input type="submit" value="Signup" />
//         </form>

//         <p>Already have account? 
//             <Link to={"/"}> Login</Link>
//         </p>

//       </div>
//     )
//   }
// }

// export default Signup; 