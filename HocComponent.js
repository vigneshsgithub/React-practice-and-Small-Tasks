import { getValue } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';

const Mainfunc=(Getnewcomp,getValue)=>{


function HocComponent() {
    const[state,setState]=useState(0)
    const fun=()=>{
        setState(state+getValue)
    }
  
    
  return (
    <div>
      <Getnewcomp count={state} countfunc={fun}/>
    </div>
  )
}
return HocComponent;
}
export default Mainfunc

