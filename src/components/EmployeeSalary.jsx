import React, { useState } from "react";

const EmployeeSalary = (props) => {
    const[salary,setSalary]=useState({basicsal:props.basicsal,hra:props.hra,da:props.da})
    let handleSubmit=(e)=>{
        e.preventDefault()
       let  total= parseInt(salary.basicsal)+parseInt(salary.hra)+parseInt(salary.da)
       props.getSal(total)
    }
  return (
    <>
      {/* <h1>{props.basicsal}</h1>
      <h1>{props.hra}</h1>
      <h1>{props.da}</h1> */}

      <div className="col-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Basic</label>
            <input type="text" className="form-control" value={salary.basicsal} onChange={(e)=>setSalary({...salary,basicsal:e.target.value})} />
          </div>
          <div className="form-group">
            <label>HRA</label>
            <input type="text" className="form-control" value={salary.hra} onChange={(e)=>setSalary({...salary,hra:e.target.value})} />
          </div>
          <div className="form-group">
            <label>DA</label>
            <input type="text" className="form-control" value={salary.da} onChange={(e)=>setSalary({...salary,da:e.target.value})} />
            <br />
            <button type="submit" className="btn btn-secondary">
              Total Salary
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeSalary;
