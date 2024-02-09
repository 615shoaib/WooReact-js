import React from 'react';
import { Routes, Route } from "react-router-dom";
import MoreProducts from "../Products/MoreProducts/MoreProducts";
import Option from "../Products/Option";
import ProductsCardWrapped from "../Products/ProductsCardWrapped";
import WooCommerceExample from "../Products/WoocommerceApi";

const ProductsPages = () => {
  return (
    <Routes>
      <Route path="/" element={<WooCommerceExample />} />
      <Route path="/more-products" element={<MoreProducts />} />
      <Route path="/option/:productId" element={<Option />} />
      <Route path="/category/:categoryName" element={<ProductsCardWrapped />} />
    </Routes>
  );
}

export default ProductsPages;
