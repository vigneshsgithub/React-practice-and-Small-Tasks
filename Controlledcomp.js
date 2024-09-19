import React, { useState } from 'react'

export const Controlledcomp = () => {
    const[state,setState]=useState("unknown")
    const changeInput=(event)=>{
        setState(event.target.value)
    }
  return (
    <div>
        <input type='text' value={state} onChange={changeInput}></input>
    </div>
  )
}
