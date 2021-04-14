import React, {useContext} from 'react'
import {ThemeContext,ThemeUpdateContext} from './Contexts'

export default function Test() {

    const {logged} = useContext(ThemeContext)
    const {connectRoom } = useContext(ThemeContext)
    return (
        <div>
           {!logged ? (
        <h1> not logged</h1>
      ):(<h1>logged</h1>)}

      <button onClick={connectRoom}> click me</button> 
        </div>
    )
}
