import React from 'react'
import ProductList from './ProductList'

const ConditionalRedering = (props) => {
  /*  if(props.isLoggedIn){
        return ( <div> <ProductList/> </div>) }
    else{ return ( <div><h1>Please Login</h1></div> )} */

let result=''
if(props.isLoggedIn){ result= <div><ProductList/> </div>}
else{ result= <div><h1>Please Login</h1> </div>} 

return (
    <><h1>{props.isLoggedIn && "Welcome User"}</h1>
    {result}  
    </>      )}

export default ConditionalRedering
// conditional Rendering-
// 1. if else
// 2. javascript variable
// 3. ternary operator (?:)
// 4. short circuit operator (&&)