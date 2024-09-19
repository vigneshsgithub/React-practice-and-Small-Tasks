import React,{useState} from 'react'
import Mainfunc from './HocComponent'

function Increment(props) {

  return (
    <div>
      <h1>{props.count}</h1>
      <button>increase</button>
    </div>
  )
}

export default Mainfunc(Increment)
