import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'

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
  
  return (
    <div className='flex content-center items-start'>
    <div className='w-1/2'>
    <ProductCard  visibility={false} Data={ItemList}/>
    </div>
    <div className="border-2 p-5 m-5">
        <h1 className="font-bold text-2xl" >Bill & Payment</h1>
        <h2>Total: ₹ {TotalBill}</h2>
        <button className='p-2 border-2 border-red-500 rounded-lg mt-3 bg-red-500 text-white'>Pay Now</button>
    </div>
    </div>
  )
}
