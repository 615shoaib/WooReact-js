import React, { createContext, useState, useEffect } from "react";
import { apikey } from "../../Products/apikey";

export const AppPrvoider = createContext(null);

const Api = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const getCard = async () => {
    try {
      const response = await fetch(
        `https://localhost/wordpress/wp-json/wc/v3/products`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${apikey()}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("products", JSON.stringify(data));
        setProducts(data);
        setIsOpen(true);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("products");
    if (storedData) {
      setProducts(JSON.parse(storedData));
    } else {
      getCard();
    }
  }, []);

  return (
    <AppPrvoider.Provider
      value={{
        isOpen,
        setIsOpen,
        products,
        setProducts,
      }}
    >
      {children}
    </AppPrvoider.Provider>
  );
};

export default Api;
