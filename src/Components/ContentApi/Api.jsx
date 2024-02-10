import React, { createContext, useState, useEffect } from "react";
import { apikey } from "../../Products/apikey";

export const AppPrvoider = createContext();

const Api = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://localhost/wordpress/wp-json/wc/v3/products`, {
        method: "GET",
        headers: {
          'Authorization': `Basic ${apikey()}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("products", JSON.stringify(data));
        setProducts(data);
        setIsLoading(false);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("products");
    if (storedData) {
      setProducts(JSON.parse(storedData));
      setIsLoading(false);
    } else {
      fetchProducts();
    }
  }, []);

  return (
    <AppPrvoider.Provider value={{ isLoading, products }}>
      {children}
    </AppPrvoider.Provider>
  );
};

export default Api;
