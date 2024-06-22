import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


export const ProductCard = ({visibility,Data,addtoCart,deleteFromCart}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 justify-items-center'>
    {Data?.map((e) => (
      <div key={e.id} className='border-gray border-2 m-2 rounded-lg w-full max-w-xs'>
        <img className='rounded-t-lg w-full h-48 object-cover' src={e.image} alt={e.title} />
        <div className='p-2'>
          <h1 className='font-bold text-lg'>{e.title}</h1>
          <p className='text-gray-700'>₹ {e.price}</p>
          <h3 className={`font-medium text-gray-600 ${visibility === false ? 'hidden' : ''}`}>{e.description.slice(0, 50)}...</h3>
          {visibility === false ? (
            <button onClick={() => deleteFromCart(e)} className='border-2 border-red-500 text-red-500 px-5 py-2 my-2 rounded-md flex items-center justify-center'>
              <MdDeleteOutline />              
            </button>
          ) : (
            <button onClick={() => addtoCart(e)} className='border-2 border-green-500 text-green-500 px-5 py-2 my-2 rounded-md flex items-center justify-center'>
              <MdAddShoppingCart />
              <span className='ml-2'>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
  
  )
}
