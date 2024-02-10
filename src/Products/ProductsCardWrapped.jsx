import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppPrvoider } from '../Components/ContentApi/Api';
import Category from './Category';
import ProductsCard from './ProductsCard';

const WooCommerceExample = () => {
  const { products } = useContext(AppPrvoider);
  const { categoryName } = useParams();
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryName) {
      setActiveCategory(categoryName);
    } else {
      setActiveCategory(null);
    }
  }, [categoryName]);

  useEffect(() => {
    if (activeCategory) {
      const filteredProducts = products.filter((product) =>
        product.categories.some((cat) => cat.name === activeCategory)
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [products, activeCategory]);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-5 mt-5 ">
            <Category products={products} activeCategory={activeCategory} onSelectCategory={handleSelectCategory} />
            <ProductsCard category={categoryName} products={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WooCommerceExample;
