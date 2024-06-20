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
    className=' sticky top-0 bg-blue-200 border-2 border-black p-5 mb-4  flex justify-between '
    >
    <div className=' w-1/3 flex justify-center'>
        <h1 className='font-bold text-lg '>MY INDIA</h1>
    </div>
    <div className='flex justify-evenly  w-1/2  items-center '>
        <Navlink to='/'><h2 className='font-bold'>Products</h2></Navlink>
        <div className=' relative p-2  justify-center items-center'> 
        <p className='absolute top-0 right-0 text-sm font-bold'>{itemCount}</p>
        <Navlink to='/cart'><FiShoppingCart/></Navlink>
        </div>
    </div>

    </div>
  )
}
