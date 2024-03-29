import React, { useContext, useEffect, useState } from 'react';
import { AppPrvoider } from '../../Components/ContentApi/Api';
import EyeIcone from '../EyeIcone';
import AddToCart from '../AddToCart';
import FilterProducts from '../FilterProducts/FilterProducts';

const MoreProducts = () => {
    const { products } = useContext(AppPrvoider);
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            setSortedProducts(products);
        }
    }, [products]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <FilterProducts products={products} setSortedProducts={setSortedProducts} />
                    {sortedProducts.map((detail) => (
                        <div className="col-lg-4 d-flex justify-content-center" key={detail.id}>
                            <div className="card border-0">
                                <div className="card-img">
                                    {detail.images && detail.images.length > 0 && (
                                        <img
                                            src={detail.images[0].src}
                                            alt="products-card"
                                            style={{ width: "200px", height: "205px" }}
                                        />
                                    )}
                                    <div className="overlay">
                                        <EyeIcone card={detail} />
                                        <AddToCart />
                                    </div>
                                </div>
                                <p className="text-center">{`Dress ${detail.name}`}</p>
                                <p className="text-center" style={{ marginTop: "-15px" }} dangerouslySetInnerHTML={{ __html: detail.description }} />
                                <p className="text-center" style={{ marginTop: "-25px" }}>${detail.price}.00</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MoreProducts;
