import React, { useEffect } from 'react';

const HomeProducts = ({ products }) => {
    const homepage = Array.isArray(products) ? products.slice(0, 5) : [];

    const filterData = homepage.filter(product => 
        product.categories ? product.categories.some(cat => cat.name === "NEW ARRIVALS") : false
    );

  

    return (
        <>
        <div className="d-flex text-center justify-content-center align-items-center flex-direction-column">
        <h1 className='bg-info'>Hy</h1>
        </div>
        </>
    );
}

export default HomeProducts;
  