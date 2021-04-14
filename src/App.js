import "./App.css";
import React, {useState} from "react";
import Test from "./Test"
import Box from "./Box"

import {ThemeContext,ThemeUpdateContext} from "./Contexts";


function App() {
  const [logged, setLogged] = useState(false);
  const [name,setName] = useState("");
  const [room,setRoom] = useState("");


  
  
  function connectRoom(){
    setLogged(logged => !logged);
  }
  return (
   
    <ThemeContext.Provider value={{logged,connectRoom,setName,setRoom}}>
        <Box />
        {console.log(name)}
    </ThemeContext.Provider>
  
   
  );
}

export default App;
