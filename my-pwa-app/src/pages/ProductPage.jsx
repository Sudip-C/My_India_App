import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GetData } from '../redux/action'
import { ProductCard } from '../components/ProductCard';

export const ProductPage = () => {
    const dispatch=useDispatch()
    const Data=useSelector((d)=>(d.data))


    const [items,setItems]=useState([])
    const [savedItems,setSavedItems]=useState([])
    useEffect(()=>{
        dispatch(GetData)     
    },[])

    useEffect(()=>{
      const saved=JSON.parse(localStorage.getItem('cart'))
        setSavedItems(saved)
    },[items])
  

    const addtoCart =(e)=>{
      const itemExists=savedItems?.some(el=>el.id===e.id)
      if(!itemExists){
        let SingleItem=e
      let cartItems=[...items,SingleItem]
      setItems(cartItems)
      localStorage.setItem("cart",JSON.stringify(cartItems))
      alert("Item added to cart.")
      }else{
        alert("Item already in cart!!!")
      }
    }

  return (
    <div>
    <ProductCard visibilty={true} Data={Data} addtoCart={addtoCart}/>
    </div>
  )
}
