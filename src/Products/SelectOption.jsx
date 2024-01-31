import { useState } from "react";

const SelectOption = ({ productDetails }) => {
  const [selectedOptions, setSelectedOptions] = useState({productDetails});
  const [cartItems, setCartItems] = useState([]);


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

  const addToCart = (id) => {
    const newItem = {
      id: id,
      options: { ...selectedOptions },
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setSelectedOptions({});
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
            className='btn btn-dark fs-5 d-flex gap-1 mt-3'
            onClick={() => addToCart(productDetails.id)}
           
          >

            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill='#fff' className='fs-5' viewBox="0 0 24 24">
              <path d="M23.928 9.144c0.024-0.384-0.12-0.768-0.408-1.056s-0.672-0.456-1.104-0.456h-4.368l-5.52-7.368c-0.096-0.144-0.288-0.24-0.480-0.24s-0.36 0.096-0.456 0.24l-5.52 7.368h-4.464c-0.84 0-1.512 0.672-1.512 1.512v1.896c0 0.84 0.672 1.512 1.512 1.512h0.456l1.536 9.336c0.192 1.2 1.2 2.064 2.424 2.064h11.976c1.2 0 2.232-0.864 2.424-2.064l1.536-9.336h0.456c0.84 0 1.512-0.672 1.512-1.512v-1.896zM1.224 9.144c0-0.192 0.168-0.36 0.384-0.36h3.6l-0.192 0.264c-0.024 0-0.048 0-0.072 0-0.576 0-1.056 0.48-1.056 1.056s0.48 1.056 1.056 1.056c0.576 0 1.056-0.48 1.056-1.056 0-0.12-0.024-0.264-0.072-0.384l0.72-0.96h10.824l0.72 0.96c-0.048 0.096-0.072 0.216-0.072 0.384 0 0.576 0.48 1.056 1.056 1.056s1.056-0.48 1.056-1.056c0-0.576-0.48-1.056-1.056-1.056-0.024 0-0.048 0-0.072 0l-0.192-0.264h3.6c0.192 0 0.384 0.192 0.384 0.384v1.872c0 0.192-0.192 0.384-0.384 0.384h-20.904c-0.192 0-0.384-0.192-0.384-0.384v-1.896zM7.512 7.632l4.536-6.072 4.56 6.072h-9.096zM3.24 12.576h17.664l-1.536 9.144c-0.12 0.648-0.672 1.104-1.296 1.104h-12c-0.648 0-1.2-0.48-1.296-1.104l-1.536-9.144zM12.048 0.312v0 0 0zM15.864 22.080c0.312 0 0.576-0.264 0.576-0.576v-7.608c0-0.312-0.264-0.576-0.576-0.576s-0.576 0.264-0.576 0.576v7.608c0 0.312 0.264 0.576 0.576 0.576zM8.28 22.080c0.312 0 0.576-0.264 0.576-0.576v-7.608c0-0.312-0.264-0.576-0.576-0.576s-0.576 0.264-0.576 0.576v7.608c0 0.312 0.264 0.576 0.576 0.576zM12.072 22.080c0.312 0 0.576-0.264 0.576-0.576v-7.608c0-0.312-0.264-0.576-0.576-0.576s-0.576 0.264-0.576 0.576v7.608c0 0.312 0.264 0.576 0.576 0.576z">
              </path>
            </svg>
            Add to Cart 
          </button>
        </>
      )}
    </>
  );
};

export default SelectOption;
