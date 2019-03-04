import React, { Component } from 'react';
import './App.css';
import Home from './Components/Auth/Home'
import Projects from './Components/Projects/Projects';
import NewProject from './Components/Projects/NewProject';
import { Switch, Route } from 'react-router-dom';
import SingleProject from './Components/Projects/SingleProject';
import Makers from './Components/Projects/Makers';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
        <Route exact path='/' component ={Home}/>
        <Route path='/all' component={Projects}/>
        <Route path='/maker' component={Makers}/>
        <Route path='/dreamer' component={NewProject}/>
        <Route path='/project' component={Projects}/>
        <Route path='/project/:projectId' component={SingleProject}/>
       </Switch>
      </div>
    );
  }
}

export default App;





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
