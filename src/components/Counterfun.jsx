import React, { useState } from 'react'

const Counterfun = () => {
    let [count,setCount]=useState('')
    let handleCounter=()=>setCount(parseInt(count+1))
    
  return (
    <div>
        <button type="button" className='btn btn-primary' onClick={handleCounter}>Counter</button>
        <h2 className='text-danger'>{count}</h2>
    </div>
  )
}

export default Counterfun
