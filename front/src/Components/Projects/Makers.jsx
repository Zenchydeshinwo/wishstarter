import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Makerservice from './Maker-service'
//import Editmaker from './Editmaker';
import ReactPlayer from 'react-player'
import './Makers.css'

class Makers extends Component{
    constructor()
    {
        super()
        this.state={
            maker:[]
        }
    this.makerservice= new Makerservice()
    }
    
    componentDidMount(){
       
        //Introducir ahí la direccion de la API, o el acceso a MONGO
    this.makerservice.requestMaker().then(response=>
          {  
        this.setState({maker:response})
    })
}

render()
{
    return(
        <div className="Maker">
        <Link to='/'>Home</Link>

                {this.state.maker.map((maker,idx)=>
        {
            return <div key={idx}>
            <h1>GGGGGGGGGG</h1>
            {/* <img src={maker.imageurl} alt ="Img"></img> */}
            <p>HOLAAAA</p>
            {/* <p>{maker.description}</p> */}
            <p>Dreamer: {maker.named}</p>
            {/* <p>Description: {maker.description}</p> */}
            {/* <div className='video'>
            <ReactPlayer
                url={maker.video}
                className='react-player'
               // playing='true'
                width='20%'
                height='5%'
            />
            </div> */}
            <Link
                    to={`/maker/${maker._id}`}
                    key={maker._id} >Ver Maker<li key={idx}><div><span>{maker.named}</span></div></li>
            </Link>
            
        </div>
        })}
    
        </div>

    )}}
    export default Makers;







// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// class Makers extends Component{
//     constructor()
//     {
//         super()
//         this.state={
//             maker:[]
//         }
//     }
//     componentDidMount(){
//         //Introducir ahí MAKERS
//     axios.get("").then(response=>    {
//         this.setState({maker:response.data})
//     })
// }

// render()
// {
//     return(
//         <div className="Maker">
//         <Link to='/'>Home</Link>
//         {this.state.maker.map((maker,idx)=>
//         {
//             return <div key={idx}>
//             <img src={maker.imageurl} alt ="Img"></img>
//             <Link to ={`/makers/${maker._id}`}><h1>{maker.name}</h1></Link>
//             <p>{maker.description}</p>
//             <p>Created by : {maker.contributed_by}</p>
        
//         </div>
//         })}
    
//         </div>

//     )}}
//     export default Makers;