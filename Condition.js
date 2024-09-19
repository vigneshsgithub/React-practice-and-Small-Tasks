import React, { useState } from 'react'
function Mycondition(){
    const[state,setState]=useState(true)
    return(
        <div className='text-center'>
<p>CONDITION STATE</p>
<h2 className="my-5">{state}</h2>
{state ? <p>true</p>:<p>false</p>}
{state ? <p>false</p>:<p>true</p>}
{state && <p>Hence proved</p>}

<button onClick={()=>setState(!state)}>Toggle</button>





        </div>
    )
}

export default Mycondition
  

