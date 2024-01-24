import React from 'react';
import { Drawer, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductsDetail = ({ showProducts, setShowProducts, card }) => {
    // console.log(card)
    const handleClose = () => {
        setShowProducts(false);
    };

    return (
        <Drawer open={showProducts} anchor='right' onClose={handleClose} >
            <Box sx={{ width: "400px", height: "100vh", position: "" }} >
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
                                                        <img src={image.src} alt={`products-card-${index}`} />
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
                            <p className='ms-2' style={{ fontSize: "15px", justifyContent: "center" }} dangerouslySetInnerHTML={{ __html: card.short_description }} />
                            <button className='border-0 w-50 bg-dark mx-auto p-2 text-white mb-2'>
                            <Link to={`/option/${card.id}`} className='text-white fs-5'>
                                More Option
                                </Link>
                                </button>
                            
                            <p className="ms-2">SKU :{card.sku}</p>
                            <span className='d-flex ms-2'>
                                catagory :
                                <span dangerouslySetInnerHTML={{ __html: card.description }} />
                            </span>
                        </div>
                    )
                }
            </Box>
        </Drawer>
    );
};

export default ProductsDetail;
