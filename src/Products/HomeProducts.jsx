import React from 'react';
import EyeIcone from './EyeIcone';
import AddToCart from './AddToCart';
import { NavLink } from 'react-router-dom';

const HomeProducts = ({ products }) => {
    const filteredProducts = products.filter((product) => {
        if (product.categories && product.categories.length > 0) {
            return product.categories.some((category) => category.name === "PROMOTED");
        }
        return false;
    });


    return (
        <>
        
            <div className="d-flex text-center justify-content-center align-items-center flex-direction-column">
               
            {Array.isArray(filteredProducts) && filteredProducts.map((card) => (
                     <div className='card border-0' key={card.id}>
                        <div className='card-img'>
                           {card.images && card.images.length > 0 && (
                              <img src={card.images[0].src} alt="products-card" style={{ width: "200px", height: "205px" }} />
                           )}
                           <div className="overlay">
                              <EyeIcone card={card} />
                              <AddToCart />
                           </div>
                        </div>

                        <p className='text-center'>{`Dress ${card.name}`}</p>
                        <p className='text-center' style={{ marginTop: "-15px" }} dangerouslySetInnerHTML={{ __html: card.description }} />
                        <p className='text-center' style={{ marginTop: "-25px" }}>${card.price}.00</p>
                     </div>
                  ))}
                  
            </div>
            <div className='text-center mb-2 '>
            <NavLink to="/more-products">
            <button className='border-0 bg-dark text-white ps-5 px-5'>Add More Products</button>
            </NavLink>
            </div>
        </>
    );
}

export default HomeProducts;
