import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa';
import ProductsDetail from './ProductsDetail';

const EyeIcone = ({ card }) => {
    const [showProducts, setShowProducts] = useState(false)
    const handleClick = () => {
        console.log(!showProducts)
        setShowProducts(!showProducts)
    }
  


    return (
        <>
            <IconButton onClick={() =>handleClick()}>
                <FaEye className="icon" />
            </IconButton>


            <ProductsDetail setShowProducts={setShowProducts} showProducts={showProducts} card={card} />

        </>
    )
}

export default EyeIcone