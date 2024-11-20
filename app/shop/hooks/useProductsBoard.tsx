import React from 'react'
import { useEffect, useState, useRef } from 'react'
import dummy_products from '../../../store/dummyData'
import { ProductSorting } from '../utils/utils'
import { ProductBoardTypes } from '../../../_types/types'
function useProductsBoard(type, url, filter, perClickProducts) {

    const [products, setProducts] = useState(dummy_products)
    const [page, setPage] = useState(0)
    let productsPerPage = filter.showCount | perClickProducts;
    const paginationRef = useRef(1);

    function PageProducts() {

        if (type === ProductBoardTypes.PAGINATION) {
            if (productsPerPage < 1) return [];
            const startIndex = page * parseInt(productsPerPage);
            const endIndex = startIndex + parseInt(productsPerPage);
            if (startIndex >= products.length) return [];
            return ProductSorting(filter.sortOption, products.slice(startIndex, endIndex));
        }
        else if(type === ProductBoardTypes.SNGLBTN){
            return products.slice(0 ,page* perClickProducts || perClickProducts )
        }

    }

    const pageProductsArray = PageProducts();

    function pageBackHandler() {
        if (paginationRef.current >= 2) {
            paginationRef.current -= 1;
            setPage(prev => prev - 1)
        }
    }

    function pageForwardHandler() {
        if (paginationRef.current < Math.ceil(products.length / productsPerPage)) {
            paginationRef.current += 1;
            setPage(prev => prev + 1);
        }
    }
    function LoadMore(){
        setPage(prev=>prev+1);
    }

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(json => {
                if (filter) {
                    json = ProductSorting(filter.sortOption, json)
                    console.log(json)
                }
                setProducts(json)

            })
            .catch((e) => {
                console.log("error occured")
            })
    }, [])
    return (
        { productsPerPage, pageProductsArray, pageBackHandler, paginationRef, pageForwardHandler, products, productsPerPage, page,LoadMore }
    )
}

export default useProductsBoard