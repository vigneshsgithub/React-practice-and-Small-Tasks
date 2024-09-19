import React, { Component } from "react";

class Vignesh extends Component{
    constructor(props){
        super(props);
        this.nithish={
            name:"Unknown- class component"};
        };
    
    render(){
        return(
            <div>
             <h1>{this.nithish.name}</h1>
             </div>
        )
        
    }

}
export default Vignesh