import React, { useRef } from 'react'

export default function Uncontrolledcomp() {
    const inputUseRef= useRef('')
    const showText = () =>{
        console.log(inputUseRef.current.value)
    }
  return (
    <div>

        <input type='text' ref={inputUseRef}/>
        <button onClick={()=>showText()}>show text</button>
      
</div>
)
}