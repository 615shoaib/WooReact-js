import React, { useContext, useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import { useParams } from "react-router-dom";
import { AppPrvoider } from "../../src/Components/ContentApi/Api"; 
import WooCommerceExample from './WoocommerceApi';

const ProductsCardWrapped = () => {
    const { categoryName } = useParams(); 
    const [products, setProducts] = useState([]);
    const { products: allProducts } = useContext(AppPrvoider); 

    useEffect(() => {
        const filteredProducts = allProducts.filter(product => 
            product.categories ? product.categories.some(cat => cat.name === categoryName) : false
        );
        setProducts(filteredProducts);
    }, [allProducts, categoryName]);

    // Conditionally render HomeProducts if categoryName is not present
    if (typeof categoryName === 'undefined') {
        return null; // Return null to hide HomeProducts
    }

    return (
        <>
            <WooCommerceExample />
            <ProductsCard category={categoryName} products={products} /> 
        </>
    );
}

export default ProductsCardWrapped;
