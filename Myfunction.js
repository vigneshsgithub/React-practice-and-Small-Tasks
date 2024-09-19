import React, { useState } from "react";
function Myfunc(){
   // const [Name,setState]=useState("Unknown")//
   function alertfunc(){
    alert("function called")
   }
    return(
        <div>
            <h1>                                                                                                3w
                react js
            </h1>
            <p>
                Function component
            </p>
         
            <button onClick={() =>alertfunc()}>alert button</button>
        </div>
    )
}
export default Myfunc