import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apikey } from './apikey';
import SelectOption from './SelectOption';

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
        <>
            <span>Id: {productId}</span>
            <div className='container d-flex'>
                <div className='row align-items-center'>
                    {productDetails && (
                        <>
                            <div className='col-lg-5'>
                                <h1 className='text-center'>{productDetails.name}</h1>
                                <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel'>
                                    <div className='carousel-inner'>
                                        {productDetails.images && productDetails.images.length > 0 ? (
                                            productDetails.images.map((image, index) => (
                                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                    {image && image.src && (
                                                        <img src={image.src} alt={`products-card-${index}`} className='d-block w-100' />
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <div className='carousel-item active'>
                                                <p>No images available</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className='carousel-indicators'>
                                        {productDetails.images &&
                                            productDetails.images.map((image, index) => (
                                                <button
                                                    key={index}
                                                    type='button'
                                                    data-bs-target='#carouselExampleControls'
                                                    data-bs-slide-to={index}
                                                    className={index === 0 ? 'active' : ''}
                                                    aria-current={index === 0 ? 'true' : 'false'}
                                                >
                                                    <img src={image.src} alt={`indicator-${index}`} className='d-block w-100' />
                                                </button>
                                            ))}
                                    </div>

                                    <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'>Previous</span>
                                    </button>
                                    <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'>Next</span>
                                    </button>
                                </div>
                            </div>

                            <div className='col-lg-7'>
                                <h5 id='price'>${productDetails.price}.00</h5>
                                <p dangerouslySetInnerHTML={{ __html: productDetails.short_description }} />
                                <SelectOption productDetails={productDetails} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Option;
