import { useContext } from 'react'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { AppPrvoider } from './ContentApi/Api'
const Menu = () => {
    const [icone, setIcone] = useState(false)
    const {isOpen,setIsOpen}=useContext(AppPrvoider)
    return (
        <>
            {
                icone ?
          
                <svg onClick={() =>
                    { 
                    setIcone(!icone),
                    setIsOpen(!isOpen)
                }} 
                version="1.1" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                    <path d="M0.792 5.904h22.416c0.408 0 0.744-0.336 0.744-0.744s-0.336-0.744-0.744-0.744h-22.416c-0.408 0-0.744 0.336-0.744 0.744s0.336 0.744 0.744 0.744zM23.208 11.256h-22.416c-0.408 0-0.744 0.336-0.744 0.744s0.336 0.744 0.744 0.744h22.416c0.408 0 0.744-0.336 0.744-0.744s-0.336-0.744-0.744-0.744zM23.208 18.096h-22.416c-0.408 0-0.744 0.336-0.744 0.744s0.336 0.744 0.744 0.744h22.416c0.408 0 0.744-0.336 0.744-0.744s-0.336-0.744-0.744-0.744z">
                    </path>
                </svg>
                    :
                    <svg onClick={() =>
                        { 
                        setIcone(!icone),
                        setIsOpen(!isOpen)
                    }} 
                    version="1.1" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                        <path d="M0.792 5.904h22.416c0.408 0 0.744-0.336 0.744-0.744s-0.336-0.744-0.744-0.744h-22.416c-0.408 0-0.744 0.336-0.744 0.744s0.336 0.744 0.744 0.744zM23.208 11.256h-22.416c-0.408 0-0.744 0.336-0.744 0.744s0.336 0.744 0.744 0.744h22.416c0.408 0 0.744-0.336 0.744-0.744s-0.336-0.744-0.744-0.744zM23.208 18.096h-22.416c-0.408 0-0.744 0.336-0.744 0.744s0.336 0.744 0.744 0.744h22.416c0.408 0 0.744-0.336 0.744-0.744s-0.336-0.744-0.744-0.744z">
                        </path>
                    </svg>
            }
            <Navbar />
    
        </>
    )
}

export default Menu

