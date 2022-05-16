import React, {useState, createContext} from "react";

const AppContext = createContext();

function ContextProvider({children}){
    //const [user, setUser] = useState(['Ronnie'])
    //const [name, setName] = useState(['Ronald'])

    const [username, setUsername] = useState('');
    const [data, setData] = useState(

        {
            location:'',
            dataJoined: '',
            repos:'',
            repos_url:'',
            followers:'',
            following:'',
            image:''

        }
    )
    
    


    const handleChange=(e)=>{
       const input = e.target.value
        console.log(input)
        setUsername(input)
        
    }

    const handleData =(userData)=>{

        setData(userData)
        // setData((data)=>({...data,...userData}))
        
    }

    
    return(
        <AppContext.Provider value={{handleData,username,handleChange,data}}>
            {children}
        </AppContext.Provider>
    )
}

export{
    AppContext,
    ContextProvider
}