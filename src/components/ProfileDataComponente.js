import React, {useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import '../App.css';
import {AppContext} from '../context/AppContext'

function ProfileDataComponente() {
    
    const context = useContext(AppContext)
    useEffect(()=>{
      
        let apiData = `https://api.github.com/users/${context.username}`
        fetch(apiData)
        .then((response)=>{
           return response.json()
            })
        .then((data)=>{

            let userData = {
                location:data.location,
                dateJoined: data.created_at,
                repos:data.public_repos,
                repos_url:`https://api.github.com/users/${context.username}/repos`,
                followers:data.followers,
                following:data.following,
                image:data.avatar_url
            }

            context.handleData(userData)

            


               

            })
        .catch((error)=>{
            console.log(error)

        })

    },[])

    const formatDate=(date)=>{
        const d = new Date(date);
        return (d.getDay() + '/'+ d.getMonth() + '/' + d.getFullYear())
    }

  return (
      
    


    <div className='profile'>
        <div className='repAndMore'>
            <Link to='/'><p className='search-more'>  Search More </p></Link>

            <Link to='/repos'><p className='repos'>  Repos </p></Link>
        
        </div>
        

        <p> <img src={context.data.image} alt='Github-profile-image'/> </p>
        <p><b>{context.username}</b></p>

        <div className='locANDdate'>
            <p className='loc'>
            <LocationOnIcon/> {context.data.location}
            </p>
            <p className='dte'>
            <DateRangeIcon/> {formatDate(context.data.dateJoined)}
            </p>
            <br/>
            
            

        </div>

        <div className='my-cards'>

          <div className="card">

              <div className="container">
                  <h4><b>{context.data.repos}</b></h4>
                  <p>REPOSITORIES</p>
              </div>
          </div>


          <div className="card">

              <div className="container">
                  <h4><b>{context.data.followers}</b></h4>
                  <p>FOLLOWERS</p>
              </div>
          </div>


          <div className="card">

              <div className="container">
                  <h4><b>{context.data.following}</b></h4>
                  <p>FOLLOWING</p>
              </div>
          </div>


          </div>
        

    </div>
  )
}

export default ProfileDataComponente