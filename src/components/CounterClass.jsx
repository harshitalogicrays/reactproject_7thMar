import React, { Component } from 'react'

export default class CounterClass extends Component {
        constructor(props) {
        super(props)
        this.state = {  count:1 }
        }
    handleCounter=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <button type="button" className='btn btn-primary' onClick={this.handleCounter}>Counter</button>
        <h2 className='text-danger'>{this.state.count}</h2>
      </div>
    )
  }
}
