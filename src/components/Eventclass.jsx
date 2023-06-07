import React, { Component } from 'react'

export default class Eventclass extends Component {
   clickHandler=()=>{
        alert("button clicked")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
