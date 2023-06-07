import React from 'react'

const ListRendering = () => {
    let colors = ["red","green","blue","white","black"]


  let result= colors.map((color,index)=><h1 key={index}>{color}</h1>)

  return (
    <div>
      {/* {colors[0]} */}
{/* 
        {colors.map((color,index)=><h1 key={index}>{index} {color}</h1>)} */}

        {result}
    </div>
  )
}

export default ListRendering
