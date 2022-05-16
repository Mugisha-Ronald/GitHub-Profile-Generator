import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../App.css';
import {AppContext} from '../context/AppContext'


function MainComponent() {
    const context = useContext(AppContext)


    
    
    return (

        
    
        <div className='mainComponent'>

            <div className='homepageDetails'>
                <GitHubIcon />
                <p>Find Github User Profile</p>

                <TextField type="text" required id="outlined-basic" label="enter user name" variant="outlined" onChange={context.handleChange} /> <br /> <br />
                <Button variant="outlined" ><Link to='/profile'>Search</Link></Button>
            </div>

        </div>






    
  )
}

export default MainComponent