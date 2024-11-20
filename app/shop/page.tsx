"use client"
import React, { useContext } from 'react'
import ProductsBoard from '../../components/shop/ProductBoard'
import shopContext from './store/shopContext'
import { ProductBoardTypes } from '../../_types/types';
function page() {
  const filteration_Parameters = useContext(shopContext);
  return (
  <ProductsBoard type={ProductBoardTypes.PAGINATION} url={"https://fakestoreapi.com/products"} filter={filteration_Parameters}/>
  )
}

export default page