"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
function Category() {
    const [category, setCategory] = useState({
        "Electronics": "electronics.jpg",
        "Jewelery": "jewelry.jpg",
        "Men's clothing": "menClothing.jpg",
        "Women's clothing": "women.jpg"
    });
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
              .then(res => res.json())
            .then((data) => data)
            .catch(e => {
                console.log(e.message, e.response.status);
            })
    }, []);
    console.log(category)
    return (
        <>
            <div className='flex flex-row justify-center space-between item-center text-center mx-12 space-x-4'>
                {category &&
                    Object.entries(category).map(([key, value], index) => (
                        <div
                            className="flex flex-col justify-start items-center text-center w-64 h-68 bg-gray-100 rounded-lg shadow-lg p-4 m-4"
                            key={`${key}-${index}`}
                        >
                            <Image
                                alt={`Image of ${key} , ${value}`}
                                src={`/${value}`}
                                width={256}
                                height={384}
                                className="rounded-lg"
                            />
                          <h1 className="mt-2 text-lg font-bold text-gray-800">{key}</h1>

                        </div>
                    ))}

            </div>
        </>

    );
}

export default Category