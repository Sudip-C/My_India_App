import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


export const ProductCard = ({visibility,Data,addtoCart,deleteFromCart}) => {
  return (
    <div className='grid grid-cols-4  p-2 justify-items-center'>
        {Data?.map((e)=>(
        <div key={e.id} className='border-gray border-2 m-2 rounded-lg'>
        <img className='rounded-t-lg' src={e.image} alt={e.title}/>
        <div className='p-2'>
        <h1 className='font-bold' >{e.title}</h1>
        <p>₹ {e.price}</p>
        <h3 className={`font-medium ${visibility===false?"hidden":""}`}>{e.description.slice(0,50)}...</h3>
        {visibility===false?<button  onClick={()=>deleteFromCart(e)} className='border-2 border-red-500 px-5 py-2 my-2 rounded-md'><MdDeleteOutline /></button>:
        <button  onClick={()=>addtoCart(e)} className='border-2 border-green-500 px-5 py-2 my-2 rounded-md'><MdAddShoppingCart /></button>}         
        </div>
        </div>
    ))}
    </div>
  )
}
