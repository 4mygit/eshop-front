import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Registration from  './Reg'
import Login from  './Login'
import Product from  './Product'
import Productdetails from  './Productdetail'
import Cart from  './Cart'
import Success from  './Success'

const router = createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },
    {
    path:'/',
    element:<Login/>
  },
  {
    path:'/reg',
    element:<Registration/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
