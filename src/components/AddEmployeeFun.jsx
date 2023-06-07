import React, { useState } from 'react'

const AddEmployeeFun = (props) => {
    let[employee,setEmployee]=useState({id:'',name:'',email:'',salary:''})
    let changeHandler=(event)=>{
        setEmployee({...employee,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        alert(JSON.stringify(employee))
    }
    return (
        <>
        <div className='col-6'>
          <h1>Add Employee</h1>
          <form onSubmit={submitHandler} method="post">
              <div className='form-group'>
              <label>Empid</label>
              <input type="text" className='form-control' name="id" value={employee.id} onChange={changeHandler}></input>
              </div>
              <div className='form-group'>
              <label>EmpName</label>
              <input type="text" className='form-control' name="name" value={employee.name} onChange={changeHandler}></input>
              </div>
              <div className='form-group'>
              <label>Email</label>
              <input type="email" className='form-control' name="email" value={employee.email} onChange={changeHandler}></input>
              </div>
              <div className='form-group'>
              <label>Salary</label>
              <input type="number" className='form-control' name='salary' value={employee.salary} onChange={changeHandler}></input>
              </div>
              <input name="" id="" class="btn btn-primary mt-2" type="submit" value="Add Employee"/>
            
          </form>
          </div>
        </>
      )
}

export default AddEmployeeFun
