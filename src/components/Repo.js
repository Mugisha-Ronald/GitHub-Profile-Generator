import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'


import '../Repo.css';



function Repo({repo}) {

    const context = useContext(AppContext)

    
  return (
    
    <div className="github-cards">
      <a className='github-card' href='#'>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <h3>{repo.name}</h3>
      
      <p>{repo.description}</p>

      <span className="github-card__meta">
          <span >●</span>{repo.language}
        </span>

        <span className="github-card__meta">
         Rating {repo.stargazers_count} 
          <span data-stars>
            
          </span>
        </span>

        <span className="github-card__meta">
          <i className="fa fa-code-fork" aria-hidden="true"></i>
          <span data-forks>
          Forked {repo.forks_count}
          </span>
        </span>

        </a>
        
    

      
    </div>
  )
}

export default Repo