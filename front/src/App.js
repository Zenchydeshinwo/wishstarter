import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Auth/Home";
import Projects from "./Components/Projects/Projects";
import NewProject from "./Components/Projects/NewProject";
import { Switch, Route } from "react-router-dom";
import SingleProject from "./Components/Projects/SingleProject";
import Makers from "./Components/Projects/Makers";
import Signup from "./Components/Auth/SignUp";
import AuthService from "./Components/Auth/Auth-service";
import Navbar from "./Components/navbar/Navbar";
import Login from "./Components/Auth/Login";
import EditProject from "./Components/Projects/EditProject"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          
          
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  getTheUser = userObj => {
    
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    
    if (this.state.loggedInUser !== null) {
      //console.log('Objet', this.state.loggedInUser._id)
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/all" component={Projects} /> */}
            <Route exact path="/makers" component={Makers} />
            <Route path="/dreamer" component={NewProject}  />
            <Route path="/projects" component={Projects} />
            <Route exact path="/project/:id" component={EditProject} />
            
            {/* <Route exact path="/projects" component={ProjectList}/>
        <Route exact path="/projects/:id" component={ProjectDetails} /> */}
          </Switch>
        </div>
      );
    } else {
      
      return (
        <div className="App">
          <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Switch>
            {/* <Route path="/all" component={Projects} /> */}
            <Route exact path="/makers" component={Makers} />
            <Route path="/project" component={Projects} />
            <Route exact path="/project/:id" component={EditProject} />
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
          </Switch>
        </div>
      );
    }
  }
}
export default App;

// class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = { loggedInUser: null };
//   }

//   getTheUser= (userObj) => {
//     this.setState({
//       loggedInUser: userObj
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//       <Navbar userInSession={this.state.loggedInUser} />

//        <Switch>
//         <Route exact path='/' component ={Home}/>
//         <Route path='/all' component={Projects}/>
//         <Route exact path='/makers' component={Makers}/>
//         <Route path='/dreamer' component={NewProject}/>
//         <Route path='/project' component={Projects}/>
//         <Route path='/project/:projectId' component={SingleProject}/>

//         <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
//         {/* <Route exact path="/projects" component={ProjectList}/>
//         <Route exact path="/projects/:id" component={ProjectDetails} /> */}

//        </Switch>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>HOLA</h1>
//       </div>
//     );
//   }
// }

// export default App;
