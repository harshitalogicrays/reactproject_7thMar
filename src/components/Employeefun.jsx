// let Employeefun=()=>{
// return (<h3>Employee Fun called</h3>)
// }
// export default Employeefun

import React from 'react'

const Employeefun = (props) => {
    let count=1
    
  return (
    <div>
      <h3>Employee Fun called</h3>
      {count}<br/>
      {props.empid}<br/>
      {props.ename}<br/>
      {props.salary}<br/>
    </div>
  )
}

export default Employeefun
