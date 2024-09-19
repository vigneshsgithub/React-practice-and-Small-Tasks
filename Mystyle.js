import React,{useState} from 'react'
import './Mystylecss.css'

function Mystyle1(){
    const[state,setState]=useState(true)

    const inlinecss ={
        color:'green'
    }
    const dynamicCss=state?'truestate':'falsestate'
    const toggleFun=()=>{
        setState(!state)
    }
  return (
    <div>
        <p className='nithish'>
            vignesh
        </p>
        <p style={inlinecss}>
nithish
        </p>
        <p className={dynamicCss}>added more values</p>
        <button onClick={()=>toggleFun()}>TOggle</button>
    </div>
  )
}

export default Mystyle1