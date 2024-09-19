import React,{useState} from 'react';
import Funpure1 from './Funpure1';

 export default  function Funpure(props){
const [state,setstate] = useState("naveen")

const fun=()=>{
setstate("besant")
  }
return(
<div>
  <Funpure1 name={state}/>
  <button onClick={()=>fun()}>change</button>
</div>
)
}