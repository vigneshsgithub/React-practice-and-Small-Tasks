import React, { Component } from "react";
class ClassButton extends Component{
    render(){
        const alertfunc = ()=>{
            alert("Class button Clicked")
        }
        return(
            <div>
            <button onClick={()=> alertfunc()}>Class button</button>
            </div>
        )
    }
}
export default ClassButton