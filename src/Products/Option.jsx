
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apikey } from './apikey';

const Option = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://localhost/wordpress/wp-json/wc/v3/products/${productId}`, {
                    method: 'GET',
                    headers: {

                        'Authorization': `Basic ${apikey()}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const product = await response.json();
                    setProductDetails(product);
                } else {
                    console.error('Failed to fetch product details:', response.status);
                }
            } catch (error) {
                console.error('Error fetching product details:', error.message);
            }
        };

        fetchProductDetails();
    }, [productId]);

    return (
        <div>
          
            {productDetails && (
                <div>
                    <h2>{productDetails.name}</h2>
                </div>
            )}
        </div>
    );
};

export default Option;
