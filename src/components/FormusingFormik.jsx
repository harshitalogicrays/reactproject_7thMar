import { useFormik } from 'formik'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const FormusingFormik = () => {
    const formik=useFormik({
        initialValues:{name:'',email:'',address:'',gender:'',pwd:''},
        onSubmit:function(values){
            alert(JSON.stringify(values))
        }
    })
  return (
    <>
    <h1>Add User</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
        <Form.Group as={Col} xs="4">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}></Form.Control>
        </Form.Group>
        <Form.Group as={Col} xs="4">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></Form.Control>
        </Form.Group>
        </Row>
        <Form.Group as={Col} xs="8">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur}></Form.Control>
        </Form.Group>
        <Row>
        <Form.Group as={Col} xs="4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="pwd" value={formik.values.pwd} onChange={formik.handleChange} onBlur={formik.handleBlur}></Form.Control>
        </Form.Group>
        <Form.Group as={Col} xs="4">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="cpwd" value={formik.values.cpwd} onChange={formik.handleChange} onBlur={formik.handleBlur}></Form.Control>
        </Form.Group>
        </Row>
        <Form.Group as={Col} xs="4">
        <Form.Check.Label style={{marginRight:'10px'}}>Gender</Form.Check.Label>
            <Form.Check inline label="Male"  name="gender" type="radio" value="Male" onChange={formik.handleChange} onBlur={formik.handleBlur}  checked={formik.values.gender=='Male' && true} />
            <Form.Check inline label="Female"  name="gender" type="radio" value="Female" onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.gender=='Female' && true}/>
            <Form.Check inline label="Other"  name="gender" type="radio" value="Other" onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.gender=='Other' && true}/>
        </Form.Group>
        <Button variant='primary' type="submit">Add User</Button>
      </Form>
    </>
  )
}

export default FormusingFormik
