import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import {Link as Navlink} from 'react-router-dom'
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
  const newItems = ItemList.filter(item => item.id !==e.id);
    setItemList(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
}

  return (
    ItemList?.length===0?<div className=' flex flex-col items-center justify-center'><h1>Nothing in this cart!!</h1>
    <Navlink to='/' className='border-2 border-blue-600 m-2 p-2'><button>Continue shopping</button></Navlink></div>:
    <div className='flex content-center items-start'>
    <div className='w-1/2'>
    <ProductCard  visibility={false} Data={ItemList} deleteFromCart={deleteFromCart}/>
    </div>
    <div className="border-2 p-5 m-5">
        <h1 className="font-bold text-2xl" >Bill & Payment</h1>
        <h2>Total: ₹ {TotalBill}</h2>
        <button className='p-2 border-2 border-red-500 rounded-lg mt-3 bg-red-500 text-white'>Pay Now</button>
    </div>
    </div>
  )
}
