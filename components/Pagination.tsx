import React from 'react'

function Pagination({ pageBackHandler, paginationRef, productsPerPage, products, pageForwardHandler }) {
    return (
        <div className="flex justify-center items-center space-x-4 mt-4">
            <button
                onClick={pageBackHandler}
                className="w-8 h-8 flex justify-center items-center rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition duration-200 shadow-sm"
            >
                {"<"}
            </button>
            <button
                className="w-8 h-8 flex justify-center items-center rounded-md bg-blue-500 text-white font-medium shadow-md border border-blue-500"
            >
                {paginationRef.current}
            </button>
            {(productsPerPage < products.length) && <button
                className="w-8 h-8 flex justify-center items-center rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition duration-200 shadow-sm"
            >
                {paginationRef.current + 1}
            </button>}
            <button
                className="w-8 h-8 flex justify-center items-center rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition duration-200 shadow-sm"
                onClick={pageForwardHandler}
            >
                {">"}
            </button>
        </div>
    )
}

export default Pagination