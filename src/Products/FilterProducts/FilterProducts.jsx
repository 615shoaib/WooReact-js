import React, { useState } from 'react';

const FilterProducts = ({ products, setSortedProducts }) => {

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === 'name') {
            // Sort products by name (A-Z)
            const sortedData = [...products].sort((a, b) => a.name.localeCompare(b.name));
            setSortedProducts(sortedData);
        } else if (selectedOption === 'price') {
            // Sort products by price (low to high)
            const sortedData = [...products].sort((a, b) => a.price - b.price);
            setSortedProducts(sortedData);
        }
    };

    return (
        <div className='text-center mb-5'>
            <select className='mt-3 mb-3' onChange={handleSortChange}>
                <option value="">--- Select ---</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
            </select>
        </div>
    );
}

export default FilterProducts;
