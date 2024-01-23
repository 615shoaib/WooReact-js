// ProductsDetail.jsx
import React, { useEffect, useState } from 'react';
import { Drawer, Box } from '@mui/material';


const ProductsDetail = ({ showProducts, setShowProducts, card }) => {
  const [data, setData] = useState([]);


  
  const handleClose = () => {
    setShowProducts(false);
  };

  return (
    <Drawer open={showProducts} anchor='right' onClose={handleClose}>
      <Box>
        {
            card && (
                <div className='card border-0' key={card.id}>
                <div className='card-img'>
                    {card.images && card.images.length > 0 && (
                        <img src={card.images[0].src} alt="products-card" y/>
                    )}
                  
                </div>

                <p className='text-center'>{`Dress ${card.name}`}</p>
                <p className='text-center' style={{ marginTop: "-15px" }} dangerouslySetInnerHTML={{ __html: card.description }} />
                <p className='text-center' style={{ marginTop: "-25px" }}>${card.price}.00</p>
            </div>
            )
        }      
      </Box>
    </Drawer>
  );
};

export default ProductsDetail;
