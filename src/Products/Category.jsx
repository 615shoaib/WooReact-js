import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ products, activeCategory, onSelectCategory }) => {
  const uniqueCategories = Array.from(
    new Set(products.flatMap((product) => product.categories.map((cat) => cat.name)))
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-5 mt-5 ">
            <div className="d-flex justify-content-center flex-column text-center">
              <h1 className="products-heading mb-3">FEATURED PRODUCTS</h1>
              <div className="para">
                Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt labore dolore.
              </div>
            </div>

            <div className="d-flex justify-content-center gap-5">
              {uniqueCategories.map((category, index) => (
                <NavLink
                  key={index}
                  to={`/category/${category}`}
                  className={`mb-5 ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => onSelectCategory(category)}
                >
                  {category}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
