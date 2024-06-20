import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { GetData } from '../redux/action'

export const ProductPage = () => {
    const [ProductData,setProductData]=useState([])
    const dispatch=useDispatch()
    const Data=useSelector((d)=>(d.data))
     console.log(Data)




    useEffect(()=>{
        dispatch(GetData)
    },[])

  return (
    <div className='grid grid-cols-4 p-2 justify-items-center'>
    {Data?.map((e)=>(
        <div key={e.id} className='border-black border-2 m-2'>
        <img className='w-40' src={e.image} alt={e.title}/>
            <h1>{e.title}</h1>
        </div>
    ))}
    
    </div>
  )
}
