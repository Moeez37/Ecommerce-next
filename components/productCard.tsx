"use client";

import { useState } from "react";

const ProductCard = ({product}) => {
  const { title, price, description, category, image, rating } = product
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="max-w-sm position-absolute bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover mx-2 rounded-lg"
        src={image}
        alt={title}
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h2>
        <p className={`text-sm text-gray-600 mt-2 ${seeMore ? "" : "line-clamp-2"}`}>
          {description}
        </p>
        <button
          className="text-blue-500 text-sm underline mt-1"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See Less" : "See More"}
        </button>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <span className="text-sm font-medium text-gray-500 capitalize">
            Category: {category}
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-yellow-500 font-semibold mr-1">
            ⭐ {rating.rate}
          </span>
          <span className="text-gray-500 text-sm">({rating.count} reviews)</span>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
