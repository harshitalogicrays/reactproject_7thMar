import React from 'react'

const Eventfun = (props) => {
    let clickHandler=()=>{
        alert("button clicked from fun comp")
    }
    let clickHandler1=(data)=>{
        alert(data)
    }
  return (
    <div>
      {props.count}<br/>
      <button onClick={clickHandler}>Click me</button>
      <button onClick={()=>alert('clicked')}>Click me</button>

      <button onClick={()=>clickHandler1("hello")}>Click me</button>
    </div>
  )
}

export default Eventfun
