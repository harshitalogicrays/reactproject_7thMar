// import { Component } from "react";

// export default class Employeeclass extends Component{
//     render(){
//         return(<div>Class Components</div>)
//     }
// }

import React, { Component } from 'react'

export default class Employeeclass extends Component {
  render() {
    return (
      <div>
        Class Components<br>
        </br>
        {this.props.empid}
        {this.props.ename}
        {this.props.salary}
      </div>
    )
  }
}
