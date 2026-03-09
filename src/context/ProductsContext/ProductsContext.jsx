import { useState, useEffect } from "react";
import { createContext } from "react";

export const ProductContext = createContext(null);
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
      const response = await fetch(`https://695054968531714d9bd0565f.mockapi.io/students?page=1&limit=4`);
      const data = await response.json();
      setProducts(data);
  };

//   const response = await fetch(
//     `https://695054968531714d9bd0565f.mockapi.io/students?page=${page}&limit=${limit}`
//   );

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {products};

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
