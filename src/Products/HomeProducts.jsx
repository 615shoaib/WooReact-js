import React, { useEffect } from 'react';

const HomeProducts = ({selectedCategory}) => {
   
    console.log('no data ',selectedCategory)
   

  

    return (
        <>
        <div className="d-flex text-center justify-content-center align-items-center flex-direction-column">
      <h1 className='bg-info'>{selectedCategory}</h1>
        </div>
        </>
    );
}

export default HomeProducts;
  