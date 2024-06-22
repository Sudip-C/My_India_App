import React, { useEffect, useState } from 'react'
import { Link as Navlink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  const [itemCount,setItemCount]=useState(0)
  useEffect(()=>{
    let count=JSON.parse(localStorage.getItem('cart'))||[]
    setItemCount(count.length)
  },[itemCount])
  return (
    <div
    className=' sticky top-0 bg-blue-200 shadow-lg p-5 mb-4  flex justify-between '
    >
    <div className='  rounded-lg w-1/6 p-1 ml-2  flex justify-center md:w-1/4 sm:w-1/3'>
        <h1 className='font-bold text-3xl  '>MY INDIA</h1>
    </div>
    <div className='flex justify-evenly  w-1/2  items-center '>
        <Navlink to='/'><h2 className='font-bold text-xl p-2 rounded-lg hover:bg-white  hover:shadow-lg'>Products</h2></Navlink>
        <div className=' justify-center items-center p-2 rounded-lg hover:bg-white hover:shadow-lg'> 
        <Navlink to='/cart'><FiShoppingCart className='w-10'/></Navlink>
        </div>
    </div>

    </div>
  )
}
