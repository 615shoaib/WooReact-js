import React from 'react';

const HomeProducts = ({ products }) => {
    const filteredProducts = products.filter((product) => {
        if (product.categories && product.categories.length > 0) {
            return product.categories.some((category) => category.name === "NEW ARRIVALS");
        }
        return false;
    });

    console.log(filteredProducts); 

    return (
        <>
            <div className="d-flex text-center justify-content-center align-items-center flex-direction-column">
                <h1 className='bg-info'>Featured Products</h1>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HomeProducts;
