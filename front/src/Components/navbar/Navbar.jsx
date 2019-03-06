import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Auth/Auth-service';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    debugger
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }

  render(){
    debugger
    if(this.state.loggedInUser){
      return(
        <nav className="nav-style">
          
            <h2>Welcome {this.state.loggedInUser.username}</h2>
            <ul>
            {/* <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li> */}
            <li>
              <Link to='/'>
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
            </ul>
        </nav>
      )
    } else {
      return ( 
        <nav className="nav-style">
          <ul>
            <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </nav>
      )
    }
  }
}

export default Navbar;





// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Navbar extends Component {
//   constructor(props){
//     super(props);
//     this.state = { loggedInUser: null };
//   }
//   // more code here
//   componentWillReceiveProps(nextProps) {
//     this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
//   }
    
//   render(){
//     if(this.state.loggedInUser){
//       return(
//         <nav className="nav-style">
//           <ul>
//             <li>Welcome, {this.state.loggedInUser.username}</li>
//             <li>
//               <Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link>
//             </li>
//           </ul>
//         </nav>
//       )
//     } else {
//       return (
//         <div>
//         <nav className="nav-style">
//           <ul>
//             <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
//           </ul>
//         </nav>
//         </div>
//       )
//     }
//     }
// }

// export default Navbar;































// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Navbar extends Component {
//   constructor(props){
//     super(props);
//     this.state = { loggedInUser: null };
//   }
//   // more code here
//   componentWillReceiveProps(nextProps) {
//     this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
//   }
    
//   render(){
//     if(this.state.loggedInUser){
//       return(
//         <nav className="nav-style">
//           <ul>
//             <li>Welcome, {this.state.loggedInUser.username}</li>
//             <li>
//               <Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link>
//             </li>
//           </ul>
//         </nav>
//       )
//     } else {
//       return (
//         <div>
//         <nav className="nav-style">
//           <ul>
//             <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
//           </ul>
//         </nav>
//         </div>
//       )
//     }
//     }
// }


