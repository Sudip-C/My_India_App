import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductPage } from '../pages/ProductPage'
import { Cart } from '../pages/Cart'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ProductPage/>} />
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}
