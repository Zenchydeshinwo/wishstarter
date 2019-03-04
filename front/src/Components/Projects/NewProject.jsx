import React from 'react';
import { Link } from "react-router-dom";

const NewProject=()=>{

    return(
        <div>
            <h3>New Project</h3>
            <p>This is a NEWPROJECT really cool, look at it</p>
            <Link to='/'>Back</Link>
        </div>
    )

}

export default NewProject;
