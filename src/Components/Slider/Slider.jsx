import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [data, setData] = useState([])

    const getSlider = async () => {
        try {
            const slider = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/pages`)
            console.log(slider.data)
            setData(slider.data)
        } catch (error) {
            console.log(`error message api failed `, error.message)
        }
    }

    useEffect(() => {
        getSlider()
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                {
                    Array.isArray(data) && data.map((slider) => (
                        <>

                            <div className='col-lg-12 d-flex justify-content-around'>
                                
                                <div dangerouslySetInnerHTML={{ __html: slider.excerpt.rendered }} />
                                <p dangerouslySetInnerHTML={{ __html: slider.content.rendered }}/>
                                
                            </div>




                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Slider