import './css/Reg.css'

import logo from './logo.svg';
import './App.css';
import Registration from  './Reg'
import Login from  './Login'
import Product from  './Product'
import Productdetails from  './Productdetail'
import Cart from  './Cart'
import Success from  './Success'

function App() {
  return (
    <div classNameName="App">
         { <Registration/> }
         {       <Login/> }
         {/*   <Product/> */}
         {/*   <Productdetails/> */}
         {/*   <Cart/> */}

     <Success/>    

    </div>
  );
}

export default App;
