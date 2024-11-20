

import Image from "next/image";
import NavBar from "../components/NavBar";
import LoginSignUpModel from "../components/LoginSignUpModel";
import Category from "../components/category"
import OurProduct from "../components/ProductsBoard";
import Footer from "../components/footer";
import NewArrivalCard from "../components/NewArrivalCard";
import ModalWrapper from "../wrappers/ModelWrapper";
import { ProductBoardTypes } from "../_types/types";
import ProductsBoard from "../components/ProductsBoard";
import ProductBoard from "../components/shop/ProductBoard";
async function simulateDelay() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 2-second delay
}
const baseURL = "https://fakestoreapi.com/products"

export default async function Home() {
  await simulateDelay()

  return (
    <>
  <ModalWrapper type={"TIMER"} duration={5000}><LoginSignUpModel/></ModalWrapper>
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[url('../public/ats scanner bckground.webp')]">
      <div className="bg-[url('/coverfirstP.png')] bg-cover bg-center h-2/5 w-full flex items-center justify-end space-x-8">
        <NewArrivalCard/>
      </div>
      <div className="rounded-2xl bg-offWhite p-4 shadow-lg border border-gray-300 mx-5 my-5">
        <div className="flex flex-col justify-center text-center w-full h-12">
        <h1 className="mt-2 text-lg font-bold text-gray-800">Explore the Categories</h1>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        </div>
        <Category />
      </div>
      <div className="rounded-2xl bg-offWhite p-4 shadow-lg border border-gray-300 mx-5 my-5">
      <ProductBoard type={ProductBoardTypes.SNGLBTN} url={"https://fakestoreapi.com/products"} filter={{}} perClickProducts={5}/>
      </div>
    </div>
    </>
  );
}
