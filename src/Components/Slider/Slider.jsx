import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [data,setData]=useState([])

    const getSlider = async()=>{
        try {
            const slider = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/pages`)
            console.log(slider.data)
            setData(slider.data)
        } catch (error) {
            console.log(`error message api failed `,error.message)
        }
    }

    useEffect(()=>{
        getSlider()
    },[])
  return (
    <>
    {
        Array.isArray(data) && data.map((slider)=>(
            <>
           
            <p dangerouslySetInnerHTML={{ __html: slider.excerpt.rendered }} />
            </>
        ))
    }
    </>
  )
}

export default Slider