import React, { useState } from 'react'
import EmployeeSalary from './EmployeeSalary'

const ViewEmployee = (props) => {
    let [sal,setSal]=useState(parseInt(props.basic)+parseInt(props.hra)+parseInt(props.da))
    let getTotal=(t)=>{ setSal(t)}
  return (
    <><h1>Employee Details</h1>
        <table class="table table-primary">
            <thead>
                <tr>
                    <th scope="col">EmpID</th>
                    <th scope="col">ENAME</th>
                    <th scope="col">Total Sal</th>
                </tr>  </thead>
            <tbody><tr class="">
                    <td scope="row">{props.empid}</td>
                    <td>{props.ename}</td>
                    <td>{sal}</td>
                </tr></tbody></table>
      <EmployeeSalary basicsal={props.basic} hra={props.hra} da={props.da} getSal={getTotal} />
    </>
  )
}

export default ViewEmployee
