import React from 'react'
import mstyle from '../App.module.css'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CSSinreact = () => {
    let setCss={
        fontSize:'30px',
        textDecoration:'underline',
        color:'crimson',
    }
    const Text=styled.input({
      width:'300px',height:'100px',backgroundColor:'yellow',
      color:'blue',borderRadius:'10px',fontSize:'30px'
    })
    const Buttondemo = styled.button({
      width:'200px',height:'80px',backgroundColor:'blue',
      color:'white',borderRadius:'10px',fontSize:'30px'
    })
  return (
    <>
        {/* <h1 style={{color:'red',margin:'10px',backgroundColor:'lightblue'}}>Hello CSS page</h1> 
        <div style={setCss}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum totam nesciunt ea quibusdam, voluptates, quidem, repellat quod veniam sint perspiciatis esse non magni at incidunt! Debitis tempore ad ab qui!</div>
        <p className='error'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium expedita ea ab ducimus? Temporibus, amet quos veniam ullam deserunt magni, labore, magnam nulla iste nemo aperiam dicta assumenda quod?</p>
        <h2 className={mstyle.success}>heading</h2>
        <Text></Text>
        <Buttondemo>Click ME</Buttondemo><br/>
        <Button variant="warning">Warning</Button> */}
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default CSSinreact
