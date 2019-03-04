import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class NewProject extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
        description: "",        
        dreamer: "",
        maker: ""

      };
    }

    handleNameInput = e => {
        this.setState({
          ...this.props.myProject,
          name: e.target.value
        });
      };

      handleDescriptionInput = e => {
        this.setState({
          ...this.props.myProject,
          description: e.target.value
        });
      };

      handleDreamerInput = e => {
        this.setState({
          ...this.props.myProject,
          dreamer: e.target.value
        });
      };

      handleMakerInput = e => {
        this.setState({
          ...this.props.myProject,
          maker: e.target.value
        });
      };
    
      handleFormSubmit = e => {
        e.preventDefault();
    
        console.log(this.state)
        //direccion a la que enviar el nuevo proyecto
        axios.post("", this.state)
        .then(response => {
          console.log(response)
          // this.setState({ project: response.data });
        })
        .catch(err => {
          console.log(err);
        });
      };


      render() {
        return (
          <div>
            <Link to="/">Back</Link>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">

                <label>Name:</label>
                <input type="text" className="form-control" name="Name" value={this.state.name} onChange={e => this.handleNameInput(e)} />
    
                <label>Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.description} onChange={e => this.handleDescriptionInput(e)} />

                <label>Dreamer:</label>
                <input type="text" className="form-control"  name="dreamer"  value={this.state.dreamer} onChange={e => this.handleDreamerInput(e)} />
    
                <label>Maker:</label>
                <input  type="text"  className="form-control"  name="maker"  value={this.state.maker}  onChange={e => this.handleMakerInput(e)} />
                
              </div>
    
              <input type="submit" value="Add ner project" />
            </form>
          </div>
        );
      }
    }
  
    export default NewProject;