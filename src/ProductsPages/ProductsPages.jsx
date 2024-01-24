// products components

import MoreProducts from "../Products/MoreProducts/MoreProducts";
import Option from "../Products/Option";
import WooCommerceExample from "../Products/WoocommerceApi";

import {Routes,Route} from "react-router-dom"

const ProductsPages = () => {
  return (
    <>
   
    <Routes>
      <Route path="/" element={ <WooCommerceExample />}/>
      <Route path="/moreproducts" element={ <MoreProducts/>} />
      <Route path="/option/:productId" element={<Option />} />
    </Routes>
   
    </>
  )
}

export default ProductsPages