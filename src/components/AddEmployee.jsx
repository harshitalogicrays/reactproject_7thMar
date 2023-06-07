import React, { Component } from 'react'

export default class AddEmployee extends Component {
    constructor(props) {
      super(props)   
      this.state = {
         employee:{id:'',name:'',email:'',salary:''}
      }
    }
    changeHandler=(event)=>{
       this.setState({employee:{...this.state.employee,[event.target.name]:event.target.value}})
       console.log(this.state.employee)
    }
    submitHandler=(event)=>{
        event.preventDefault()
        alert(JSON.stringify(this.state.employee))
    }
  render() {
    return (
      <>
      <div className='col-6'>
        <h1>Add Employee</h1>
        <form onSubmit={this.submitHandler} method="post">
            <div className='form-group'>
            <label>Empid</label>
            <input type="text" className='form-control' name="id" value={this.state.employee.id} onChange={this.changeHandler}></input>
            </div>
            <div className='form-group'>
            <label>EmpName</label>
            <input type="text" className='form-control' name="name" value={this.state.employee.name} onChange={this.changeHandler}></input>
            </div>
            <div className='form-group'>
            <label>Email</label>
            <input type="email" className='form-control' name="email" value={this.state.employee.email} onChange={this.changeHandler}></input>
            </div>
            <div className='form-group'>
            <label>Salary</label>
            <input type="number" className='form-control' name='salary' value={this.state.employee.salary} onChange={this.changeHandler}></input>
            </div>
            <input name="" id="" class="btn btn-primary mt-2" type="submit" value="Add Employee"/>

        </form>
        </div>
      </>
    )
  }
}
