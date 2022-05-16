import React, {useContext, useEffect, useState} from 'react'

import '../App.css';
import {AppContext} from '../context/AppContext'
import Repo from './Repo';
function Repos() {
    const context = useContext(AppContext)
    const [repos, setRepos] = useState([])
    useEffect(()=>{
      
        let apiData = `https://api.github.com/users/${context.username}/repos`
        fetch(apiData)
        .then((response)=>{
           return response.json()
            })
        .then((data)=>{
            
            setRepos(data)
            console.log(data)

           

            


               

            })
        .catch((error)=>{
            console.log(error)

        })

    },[])
  return (
      <>
          <div className="card">
              { 
                    repos.map((repo)=> (
                        <Repo repo={repo} key={repo.id}/>
                    ))
                

              }
              
          </div>

          
      </>
  )
}

export default Repos