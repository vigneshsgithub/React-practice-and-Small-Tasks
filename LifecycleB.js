import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props){
        super(props);
        console.log('constructor component B')
      }
      componentDidMount() {
        console.log('ComponentDidMount from component B ');
      }
      shouldComponentUpdate() {
        console.log('should component B')
        return true;
      }
    
      componentDidUpdate() {
        console.log('Component did update component B');
    
      }
      render() {
        console.log('render component B')
    return (
      <div>
        
      </div>
    )
  }
}