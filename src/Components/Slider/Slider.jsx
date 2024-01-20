

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [data,setData]=useState([])

    const getUser=async()=>{
        const d = await axios.get("http://localhost/wordpress/wp-json/wp/v2/pages")
        console.log(d.data)
        setData(d.data)
    }

    useEffect(()=>{
        getUser()
    },[])
  return (
   <>
   <section>
   <div className='container'>
    <div className='row'>
        
    
   {
    Array.isArray(data) && data.map((slider)=>(
        <>
        <div className='col-lg-6 col-md-12'>
            <div>
       <div dangerouslySetInnerHTML={{ __html: slider.content.rendered }} />
       </div>
       <p dangerouslySetInnerHTML={{ __html: slider.excerpt.rendered }} />
       <div>
        
       </div>
       </div>
        </>
    ))
   }
   </div>
   </div>
   </section>
   </>
  )
}

export default Slider