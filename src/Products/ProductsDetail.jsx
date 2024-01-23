// ProductsDetail.jsx
import React from 'react';
import { Drawer, Box } from '@mui/material';

const ProductsDetail = ({ showProducts, setShowProducts, card }) => {
    console.log(card)
    const handleClose = () => {
        setShowProducts(false);
    };

    return (
        <Drawer open={showProducts} anchor='right' onClose={handleClose} >
            <Box sx={{width:"400px",overflow:"hidden"}} >
                {
                    card && (
                        <div className='card border-0 ' key={card.id}>
                            <div className='card-img '>

                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {card.images && card.images.length > 0 ? (
                                            card.images.map((image, index) => (
                                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                    {image && image.src && (
                                                        <img  src={image.src} alt={`products-card-${index}`} />
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

                            <h4 className='ms-2 text-uppercase'>{card.name}</h4>
                            <div>
                                <p className='ms-2 fs-5'>${card.price}.00</p>
                            </div>
                            <p clasname="w-25 mb-5" style={{fontSize:"14px"}} dangerouslySetInnerHTML={{__html : card.short_description}}/>
                        </div>
                    )
                }
            </Box>
        </Drawer>
    );
};

export default ProductsDetail;
