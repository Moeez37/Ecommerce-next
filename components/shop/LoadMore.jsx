import React from 'react'

function LoadMoreProductsButton({LoadProduct}) {
  return (

  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  onClick={LoadProduct}
>
  See More
</button>

  )
}

export default LoadMoreProductsButton