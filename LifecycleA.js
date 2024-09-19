import React, { Component } from 'react'
import LifeCycleB from './LifecycleB';
export default class LifeCycleA extends Component {
  constructor(props){
    super(props);
    console.log('constructor component A')
    this.state= {
      name :'unknown'
    }
  }
  componentDidMount() {
    console.log('ComponentDidMount from component A ');
  }

  shouldComponentUpdate() {
    console.log('should component A')
    return true;
  }

  componentDidUpdate() {
    console.log('Component did update component A');

  }                                                                   
  render() {
  const changeState = () =>{
    this.setState({
      name:'naveen pv'
    })
  }

    console.log('render component A')
    return (
      <div>
        <p>{this.state.name}</p>
        <button  onClick={()=>changeState()}>Change state</button>
        <LifeCycleB></LifeCycleB>
        
      </div>
    )
  }
}