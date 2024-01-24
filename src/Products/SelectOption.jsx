import React, { useState } from 'react';

const SelectOption = ({ productDetails }) => {
  const [selectedOptions, setSelectedOptions] = useState({} );
  console.log(selectedOptions)

  const handleOptionChange = (attributeName, selectedOption) => {
    setSelectedOptions({
      ...selectedOptions,
      [attributeName]: selectedOption,
    });
  };


  const isAddToCartEnabled =
    Object.keys(productDetails.attributes).every(
      (attributeName) => selectedOptions[attributeName] !== undefined
    );

  console.log('Selected Options:', selectedOptions);
  console.log('Is Add to Cart Enabled:', isAddToCartEnabled);

  const addToCart = () => {
    console.log('Add to Cart:', selectedOptions);
  };

  return (
    <>
      {productDetails && (
        <>
          {Object.entries(productDetails.attributes).map(([key, value]) => (
            <div key={key}>
              <p>{value.name}</p>
              <select
                className='mb-2 p-2'
                onChange={(e) => handleOptionChange(value.name, e.target.value)}
              >
                <option value="">{`Choose ${value.name}`}</option>
                {value.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button
            className='btn btn-primary'
            disabled={!isAddToCartEnabled}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </>
      )}
    </>
  );
};

export default SelectOption;
