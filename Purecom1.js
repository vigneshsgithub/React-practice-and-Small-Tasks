import React,{Component, PureComponent} from 'react';


 export default class Purecom1 extends PureComponent{


    render(){
        console.log('render')

        return(
            <>
            <h1>{this.props.name}</h1>
            </>
        )
    }

}