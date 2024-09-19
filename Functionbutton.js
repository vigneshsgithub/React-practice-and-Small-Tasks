import React from "react";

function Funcbutton(){
    const alertfunc=() =>{
        alert("Function buton clicked")
    }
    return(
        <div>
            <button onClick={()=>alertfunc()}>Function button</button>
        </div>
    )
}
export default Funcbutton