import React, { useEffect } from 'react';

const HomeProducts = ({ products }) => {
    const homepage = Array.isArray(products) ? products.slice(0, 5) : [];

    const filterData = homepage.filter(product => 
        product.categories ? product.categories.some(cat => cat.name === "NEW ARRIVALS") : false
    );

    console.log(filterData);

    return (
        <div>HomeProducts</div>
    );
}

export default HomeProducts;
  