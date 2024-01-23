import { useEffect } from "react"
import { useState } from "react"
import ProductsCard from "./ProductsCard"

const WooCommerceExample = () =>{
  
  return(
    <>
    <div className="container">
      <div className="row">

    <div className="col-lg-12 pt-5 mt-5 ">
            <div className="d-flex justify-content-center flex-column text-center ">
          <h1 className="products-heading mb-3">FEATURED PRODUCTS</h1>
          <div className="para">
          Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt labore dolore. 
            </div>
           </div>
         
        
    <ProductsCard />
    </div>
      </div>
    </div>
    </>
  )
}

export default WooCommerceExample