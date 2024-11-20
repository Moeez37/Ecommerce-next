"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

function NavBar() {
  const [enableSearch, setEnableSearch] = useState(false)
  const [searchInput,setSearchInput] = useState("")
  function searchProduct(){
    if(enableSearch && searchInput)
    {
        redirect(`/shop?q=${searchInput}`);
    }
    setEnableSearch(true);
  }
  return (
    <nav className="flex flex-row justify-between items-center px-8 py-4 bg-gray-800 bg-opacity-50 hover:bg-opacity-100 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="Website Logo" width={50} height={50} />
        <h1 className="text-2xl font-bold text-white font-montserrat">Ecom</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <p className="text-white text-sm font-medium hover:text-gray-400 cursor-pointer transition duration-200">
        <Link href={"/"}> Home </Link>
        </p>
        <p className="text-white text-sm font-medium hover:text-gray-400 cursor-pointer transition duration-200">
        <Link href={"/shop"}>Shop</Link>
        </p>
        <p className="text-white text-sm font-medium hover:text-gray-400 cursor-pointer transition duration-200">
        <Link href={"/contact"}>Contact</Link>
        </p>
        <p className="text-white text-sm font-medium hover:text-gray-400 cursor-pointer transition duration-200">
        <Link href={"/"}>About</Link>
        </p>
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-6">
        <Image
          src="/person (1).png"
          alt="User Icon"
          width={24}
          height={24}
          
          className="cursor-pointer hover:opacity-80 transition duration-200"
        />
        {enableSearch && <input placeholder="Search Product" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className="w-64 h-8 bg-grey-100 p-1 -ml-4"/>}
        <Image
          src="/search.png"
          alt="Search Icon"
          width={24}
          height={24}
          onClick={searchProduct}
          className="cursor-pointer hover:opacity-80 transition duration-200"
        />
        <Image
          src="/favourite.png"
          alt="Favorites Icon"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-80 transition duration-200"
        />
        <Image
          src="/cart.png"
          alt="Cart Icon"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-80 transition duration-200"
        />
      </div>
    </nav>
  );
}

export default NavBar;
