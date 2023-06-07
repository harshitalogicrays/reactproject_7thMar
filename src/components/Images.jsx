import React from 'react'
import a from '../assets/images/b.jpg'
const Images = () => {
  return (
    <div>
      <img src={a}/> <br></br>
      <img src={require('../assets/images/a.jpg')}/>
    </div>
  )
}

export default Images
