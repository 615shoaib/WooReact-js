import { useEffect } from "react"
import { useState } from "react"
import {apikey} from "./apikey"
import ProductsCard from "./ProductsCard"

const WooCommerceExample = () =>{
  const [data,setData]=useState([])
  const getUser = async()=>{
    try {
      const respo = await fetch(`https://localhost/wordpress/wp-json/wc/v3/products`,{
      method:"GET",
      headers : {
        
          'Authorization': `Basic ${apikey()}`,
          'Content-Type': 'application/json',
        },
      })
      if(respo.ok){
        const updateJson= await respo.json()
        console.log(updateJson)
        setData(updateJson)
      }
    } catch (error) {
      console.log(`error failed data `,error.message)
    }
  }
  useEffect(()=>{
    getUser()
  },[])
  return(
    <>
    <div className="container">
      <div className="row">

    
    {
      Array.isArray(data) && data.map((products)=>{
        return (
          <>
          <div className="col-lg-12 pt-5 mt-5 ">
            <div className="d-flex justify-content-center flex-column text-center ">
          <h1 className="products-heading mb-3">{products.name}</h1>
          <div className="para" dangerouslySetInnerHTML={{__html : products.description}} />
          
          
           </div>
          </div>
          </>
        )
      })
    }
    <ProductsCard />
      </div>
    </div>
    </>
  )
}

export default WooCommerceExample