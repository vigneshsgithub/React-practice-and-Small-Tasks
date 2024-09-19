import React, { useState } from 'react'
import Mainfunc from './HocComponent'

function Newcompfun(props) {

  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.Newcompfun}>increase</button>
    </div>
  )
}

export default Mainfunc(Newcompfun,5)
