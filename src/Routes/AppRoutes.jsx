import React from 'react'
import {Routes, Route } from "react-router";
import HomePage from '../Components/Home';
import RecipePage from '../Pages/RecipePage';
import CartPage from '../Pages/CartPage';
import OrderSuccess from '../Pages/OrderSuccess';
import Search from "../Pages/Search";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path='/recipes' element ={<RecipePage/>} />
        <Route path='/cart' element = {<CartPage/>} />
        <Route path='/order-success' element = {<OrderSuccess/>} />
        <Route path='/search' element = {<Search/>} /> 
    </Routes>
  )
}

export default AppRoutes
