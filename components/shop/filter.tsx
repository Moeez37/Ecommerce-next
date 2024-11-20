"use client"
import React, { useState } from "react";
import { ProductView } from "../../_types/types";
import { SortingTypes } from "../../_types/types";
const FilterBar = ({setViewProduct,productView,setSortOption,sortOption,setShowCount,showCount,handleInputNumber}) => {
console.log(showCount)
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
      {/* Filter and View Buttons */}
      <div className="flex items-center space-x-4">
        {/* <button className="text-sm font-medium px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          Filter
        </button> */}
        <button className="text-xl p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50" title="Grid View" onClick={()=>setViewProduct(ProductView.GRID)}>
          🔲
        </button>
        <button className="text-xl p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50" title="List View" onClick={()=>setViewProduct(ProductView.LIST)} >
          📄
        </button>
      </div>

      {/* Results Info */}
      <div className="text-sm text-gray-500">Showing 1-{showCount} of 32 results</div>

      {/* Show and Sort Controls */}
      <div className="flex items-center space-x-2">
        <label htmlFor="show" className="text-sm font-medium text-gray-700">
          Show
        </label>
        <input
          id="show"
          type="number"
          min="1"
          max="32"
          value={showCount}
          onChange={(e) => handleInputNumber(e.target.value)}
          className="w-16 text-sm px-2 py-1 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300"
        />

        <label htmlFor="sort" className="text-sm font-medium text-gray-700">
          Sort by
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="text-sm px-2 py-1 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300"
        >
          <option value={SortingTypes.DFLT}>Default</option>
          <option value={SortingTypes.PLTH}>Price: Low to High</option>
          <option value={SortingTypes.PHTL}>Price: High to Low</option>
          <option value={SortingTypes.NEW}>Newest</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
