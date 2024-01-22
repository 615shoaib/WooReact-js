import { useEffect } from "react"
import { useState } from "react"
import {apikey} from "./apikey"

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
    {
      Array.isArray(data) && data.map((val)=>{
        return <p>{val.name}</p>
      })
    }
    </>
  )
}

export default WooCommerceExample