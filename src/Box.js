import React, { useContext } from 'react'
import {ThemeContext,ThemeUpdateContext} from './Contexts'

export default function Box() {
  const {logged} = useContext(ThemeContext)
  const {connectRoom } = useContext(ThemeContext)
  const {setName} = useContext(ThemeContext)
  const {setRoom} = useContext(ThemeContext)



    return (
        <div className="App">
         {!logged?(
        <div className="background">  
          <div className="box">
            <span className="text-center">login</span>
          <div className="input-container">
            <input type="text" required="" onChange={e=> setName(e.target.value)}/>
            <label>Full Name</label>		
          </div>
          <div className="input-container">		
            <input type="text" required="" onChange={ e=> setRoom(e.target.value)}/>
            <label>Room</label>
          </div>
            <button type="button" className="btn" onClick={connectRoom}>submit</button>
        </div>
      </div>
        ):(
          <h1> logged in</h1>
        
          )}


    </div>
    )
}
