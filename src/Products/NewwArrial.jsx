// CategoryPage.jsx
import React from 'react';

const CategoryPage = ({ match }) => {
  const categoryName = match.params.categoryName;
  // Fetch products based on the categoryName from the API or any other data source
  // Display the products for the specific category
  return (
    <div>
      <h2>{categoryName} Products</h2>
      {/* Display products for the specific category */}
    </div>
  );
};

export default CategoryPage;
