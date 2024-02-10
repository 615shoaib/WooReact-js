import { useContext } from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AppPrvoider } from "../Components/ContentApi/Api";

import "../index.css";
import HomeProducts from "./HomeProducts";



const WooCommerceExample = () => {
  const { products } = useContext(AppPrvoider);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const categoriesSet = new Set();
    products.forEach((product) => {
      if (product.categories && product.categories.length > 0) {
        categoriesSet.add(product.categories[0].name);
      }
    });
    setUniqueCategories(Array.from(categoriesSet));
  }, [products]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-5 mt-5 ">
          <div className="d-flex justify-content-center flex-column text-center ">
              <h1 className="products-heading mb-3">FEATURED PRODUCTS</h1>
              <div className="para">
                Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
                incididunt labore dolore.
              </div>
            </div>
           
            <div className="d-flex  justify-content-center gap-5">
              {uniqueCategories.map((category, index) => (
              <NavLink
              key={index}
              to={`/category/${category}`}
              className="mb-5"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </NavLink>
            
              ))}
             
            </div>
            
            {!selectedCategory && <HomeProducts />}
          </div>
        </div>
      </div>
    </>
  );
};

export default WooCommerceExample;
