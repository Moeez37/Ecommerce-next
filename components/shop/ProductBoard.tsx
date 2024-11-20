"use client"

import React, { useState, useRef, useEffect } from 'react'
import ProductCard from '../productCard'
import dummyData from "../../store/dummyData"
import { ProductSorting } from '@/shop/utils/utils'
import { ProductBoardTypes, ProductView } from '../../_types/types'
import useProductsBoard from '@/shop/hooks/useProductsBoard'
import Pagination from '../Pagination'
import LoadMoreProducts from "./LoadMore"
function ProductBoard({ type, url, filter, perClickProducts }) {
  console.log(type)
  const { pageProductsArray, pageBackHandler, paginationRef, pageForwardHandler, products, LoadMore } = useProductsBoard(type, url, filter, perClickProducts)
  let productsPerPage = filter.showCount
  console.log(pageProductsArray,15423614)
  return (
    <div className="flex flex-col items-center text-center space-y-6 mx-4 my-4 p-4">
      <h1 className="text-2xl font-bold my-4">Our Products</h1>
      <div className={filter.productView === ProductView.LIST
        ? "grid grid-cols-1 gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
        {pageProductsArray &&
          pageProductsArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        {type === ProductBoardTypes.PAGINATION ?
          <Pagination
            productsPerPage={productsPerPage}
            pageBackHandler={pageBackHandler}
            paginationRef={paginationRef}
            pageForwardHandler={pageForwardHandler}
            products={products}
          /> :
          <LoadMoreProducts LoadProduct={LoadMore} />
        }
      </div>
    </div>
  )
}

export default ProductBoard