import { createContext } from "react";
const context = {
    showCount:"",
    sortOption:"",
    productView:""
} 

const shopContext = createContext(context)
export default shopContext