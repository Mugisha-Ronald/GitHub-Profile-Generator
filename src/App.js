import React, {useState, useEffect} from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css';
import MainComponent from './components/MainComponent';
import ProfileDataComponente from './components/ProfileDataComponente';

import {ContextProvider} from '../src/context/AppContext';
import Repos from './components/Repos'



function App() {
  // const [user, setUser] = useState(['Ronnie'])
  //const [repo, setRepos] = useState(20)
    // console.log(user)

    

  return (
    <ContextProvider>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='/profile' element={<ProfileDataComponente />}/>
        <Route path='/repos' element={<Repos/>}/>
      </Routes>
      

      
    </div>

    
    
    </BrowserRouter>

    </ContextProvider>
  );
}

export default App;
