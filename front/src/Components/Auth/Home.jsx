import React from 'react';
import { Link } from 'react-router-dom';

const home=()=>
{
    return(
    <div>
    <h3>HOME :)</h3>
    <Link to='/all'>
        <h3>All Projects</h3>
        <p>Este es el proyecto que blablablbablablablab</p>
        </Link>

    <Link to='/makers'>
        <h3>Makers</h3>
        <p>Este es la proyecto que blablablbablablablab</p>
        </Link>


    <Link to='/dreamer'>
        <h3>New Project</h3>
        <p>Este es el proyecto que blablablbablablablab</p>
        </Link>

    <Link to='/signup'>
        <h3>Sign Up</h3>
        <p>SIGN UP Aqui</p>
        </Link>

     <Link to='/login'>
        <h3>Log</h3>
        <p>LOGGEATE AQUI</p>
        </Link>    

    </div>
    )


}

export default home;