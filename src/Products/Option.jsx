
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
                    console.log(product)
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
        <>
            <span>Id :{productId}</span>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>


                        {productDetails &&
                            <>
                                <h1>{productDetails.name}</h1>
                                <div className=' card  border-0' style={{width:"30%"}}>
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            {productDetails.images && productDetails.images.length > 0 ? (
                                                productDetails.images.map((image, index) => (
                                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                        {image && image.src && (
                                                            <img id='img' src={image.src} alt={`products-card-${index}`}  />
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="carousel-item active">

                                                    <p>No images available</p>
                                                </div>
                                            )}
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden bg-info">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Option;
