import React, { Component } from "react"

class Myclass extends Component{
    render(){
        return(
            <div>
            <h2>
                Class Component
            </h2>
            <h2>
                {this.props.Fruit}
            </h2>
            </div>

        )
    }
}
export default Myclass