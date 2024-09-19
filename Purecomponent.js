import React,{Component} from 'react';
import Purecom1 from './Purecom1';


 export default class Purecom extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'nithish'
        }
    }
    render(){


        const func =() => {
             this.setState({name:"vignesh"})   
        }
        return(
            
            <div>
                <button onClick={()=>func()}>click</button>
            
                <Purecom1 name={this.state.name}/>
            </div>
            
        )
    }

}