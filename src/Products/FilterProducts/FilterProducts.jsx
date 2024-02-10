import React from 'react';
import { Link } from 'react-router-dom';

const FilterProducts = ({ products, setSortedProducts }) => {

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === 'name') {
            const sortedData = [...products].sort((a, b) => a.name.localeCompare(b.name));
            setSortedProducts(sortedData);
        } else if (selectedOption === 'price') {
            const sortedData = [...products].sort((a, b) => a.price - b.price);
            setSortedProducts(sortedData);
        }else{
          setSortedProducts(products)
        }
    };

    return (
      <div>
        <Link to="/">&#11160; Back To Home</Link>
        <div className='text-left mt-5 mb-5'>
          <label htmlFor="">Sorted by Produts :   </label>
            <select className='mb-3' onChange={handleSortChange}>
                <option value="">--- Select ---</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
            </select>
        </div>
        </div>
    );
}

export default FilterProducts;
