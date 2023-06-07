import React from 'react'

const DisplayProducts = ({product}) => {
  return (
    <>        
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td><img src={require(`../assets/images/${product.image}`)} style={{width:'50px',height:'50px'}}/></td>
            <td>{product.price}</td>
            <td>{product.qty}</td>
        </tr>
    </>

  )
}

export default DisplayProducts
