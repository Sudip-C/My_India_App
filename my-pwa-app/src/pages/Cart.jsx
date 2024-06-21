import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import {Link as NavLink} from 'react-router-dom'
export const Cart = () => {
  const [ItemList,setItemList]=useState([])
  useEffect(()=>{
    const CartItemList=JSON.parse(localStorage.getItem("cart"))
    setItemList(CartItemList)
    
  },[]);

  let TotalBill=0
 
  for(let el of ItemList){
      TotalBill+=(+el.price)
    }
  
const deleteFromCart=(e)=>{
  const newItems = ItemList?.filter(item => item.id !==e.id);
    setItemList(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
}

  return (
    ItemList?.length === 0 ? 
      <div className='flex flex-col mb-5 h-full items-center justify-center'>
        <h1 className='font-bold text-3xl text-center'>Nothing in this cart!!</h1>
        <NavLink to='/' className='border-2 border-blue-600 m-2 p-2 rounded-xl'>
          <button className='text-blue-600 font-bold'>Continue shopping —––></button>
        </NavLink>
      </div>
     : 
      <div className='flex flex-col lg:flex-row content-center items-start'>
        <div className='w-full lg:w-1/2'>
          <ProductCard visibility={false} Data={ItemList} deleteFromCart={deleteFromCart} />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start'>
          <div className="border-2 p-5 m-5 w-1/2 max-w-sm lg:max-w-none">
            <h1 className="font-bold text-2xl mb-2 text-center lg:text-left">Bill & Payment</h1>
            <h2 className="text-lg mb-4 text-center lg:text-left">Total: ₹ {TotalBill}</h2>
            <button className='p-2 border-2 border-red-500 rounded-lg bg-red-500 text-white w-full lg:w-auto'>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    
    
  )
}
