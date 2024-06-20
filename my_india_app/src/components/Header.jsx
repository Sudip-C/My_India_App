import React from 'react'
import { Link as Navlink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <div
    className='border-2 border-black p-5 mb-4  flex justify-between '
    >
    <div className=' w-1/3 flex justify-center'>
        <h1>MY INDIA</h1>
    </div>
    <div
    className='flex justify-evenly  w-1/2  items-center '
    >
        <Navlink to='/'><h2>Products</h2></Navlink>
        <Navlink to='/cart'><FiShoppingCart /></Navlink>
    </div>

    </div>
  )
}
