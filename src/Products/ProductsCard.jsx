import React, { useEffect, useState } from 'react'
import { apikey } from './apikey'

const ProductsCard = () => {
    const [products,setProducts]=useState([])
    const getCard = async()=>{
        try {
            const Card = await fetch(`https://localhost/wordpress/wp-json/wc/v3/products`,{
                method:"GET",
                headers : {
                  
                    'Authorization': `Basic ${apikey()}`,
                    'Content-Type': 'application/json',
                  },
                })
     
            if(Card.ok){
                const updateJson = await Card.json()
                console.log(updateJson)
                setProducts(updateJson)
            }
        } catch (error) {
            console.log(`card is no display`,error.message)
        }
    }
    useEffect(()=>{
        getCard()
    },[])
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-3 col-md-6'>
                {
                    Array.isArray(products) && products.map((card)=>(
                        <div className='card'>
                            <div className='card-img'>
                                <img src={card.images[0] } alt="products-card"/>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductsCard