"use client"
import React,{ useState} from 'react'
import FilterBar from '../../components/shop/filter'
import { ProductView } from "../../_types/types";
import shopContext from './store/shopContext';
const layout = ({children}:any) => {
    const [showCount, setShowCount] = useState(16);
    const [sortOption, setSortOption] = useState("Default");
    const [productView,setViewProduct] = useState(ProductView.GRID)
    function handleInputNumber(value){
        console.log(value)
          if(value>32){
              setShowCount(32);
              return;
          }
          else if(value && value<1)
          {
              setShowCount(1);
              return;
          }
          setShowCount(value)
      }
  return (
    <shopContext.Provider value={{productView,sortOption,showCount}}>
    <div className='flex flex-col justify-around'>
    <FilterBar showCount= {showCount} setShowCount={setShowCount} sortOption={sortOption} setSortOption={setSortOption} productView={productView} setViewProduct={setViewProduct} handleInputNumber={handleInputNumber}/>
    {children}
    </div>
    </shopContext.Provider>
  )
}

export default layout