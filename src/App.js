import logo from './logo.svg';
import './App.css';
import Employeefun from './components/Employeefun';
import Employeeclass from './components/Employeeclass';
import Eventclass from './components/Eventclass';
import Eventfun from './components/Eventfun';
import CounterClass from './components/CounterClass';
import Counterfun from './components/Counterfun';
import Images from './components/Images';
import ListRendering from './components/ListRendering';
import ProductList from './components/ProductList';
import AddEmployee from './components/AddEmployee';
import AddEmployeeFun from './components/AddEmployeeFun';
import ViewEmployee from './components/ViewEmployee';
import ConditionalRedering from './components/ConditionalRedering';
import { useState } from 'react';
import CSSinreact from './components/CSSinreact';
import mstyles from './App.module.css'
import FormusingFormik from './components/FormusingFormik';
function App() {
  const [isAuth,setIsAuth]=useState(false)

  return (
    <div className='container'>
       {/* <button className='btn btn-primary m-5' onClick={()=>setIsAuth(!isAuth)}>
          {isAuth?"Logout":"Login"}
        </button>
        <ConditionalRedering isLoggedIn={isAuth}/> */}

        
        {/* <h1 className={mstyles.success}>Hello React</h1>
        <h2 className='text-danger bg-primary'>Welcome</h2> */}
        <hr/>
        {/* <Employeefun empid="101" ename="Smith" salary="30000"/> */}
        {/* <Employeeclass  empid="101" ename="Smith" salary="30000"/> */}
        {/* <Employeeclass  empid="102" ename="Olive" salary="50000"/> */}
        {/* <Eventclass/> */}
        <hr/>
        {/* <Eventfun count="1"/> */}
        {/* <CounterClass/> */}
        {/* <Counterfun/> */}
        {/* <Images/> */}
        {/* <ListRendering/> */}
        {/* <ProductList/> */}
        {/* <AddEmployee/> */}
        {/* <AddEmployeeFun/> */}
        {/* <ViewEmployee empid="101" ename="Smith" basic="30000" hra="3000" da="2000"/> */}

        {/* <CSSinreact/> */}
        <FormusingFormik/>
      </div>
  );
}

export default App;
