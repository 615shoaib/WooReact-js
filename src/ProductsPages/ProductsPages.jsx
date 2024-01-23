// products components

import MoreProducts from "../Products/MoreProducts";
import WooCommerceExample from "../Products/WoocommerceApi";

import {Routes,Route} from "react-router-dom"

const ProductsPages = () => {
  return (
    <>
   
    <Routes>
      <Route path="/" element={ <WooCommerceExample />}/>
      <Route path="/moreproducts" element={ <MoreProducts />} />
    </Routes>
   
    </>
  )
}

export default ProductsPages