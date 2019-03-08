import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const home=()=>
{
    return(
    <div>
    <h3>HOME :)</h3>
    <div className='Home'>
        <div className='projects'>
            <Link to='/dreamer'>
            <h3>New Project</h3>
            <p>Aquí puedes registrar nuevos wishes que tengas</p>
            </Link>


            <Link to='/projects'>
            <h3>All Projects</h3>
            <p>Esta es una lista de todos los wishes</p>
            </Link>

        </div>

        <div className='makers'>

        <Link to='/newmakers'>
        <h3>New Maker</h3>
        <p>Aquí puedes registrarte como maker si quieres colaborar en algún proyecto</p>
        </Link>
        

    <Link to='/makers'>
        <h3>Makers</h3>
        <p>Este es una lista de todos los makers resgistrados en esta web</p>
        </Link>


        </div>

    </div>
    

    </div>
    )


}

export default home;