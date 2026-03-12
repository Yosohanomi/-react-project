import { useState, useEffect } from "react";
import { createContext } from "react";

export const ProductContext = createContext(null);
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
      const response = await fetch(`https://695054968531714d9bd0565f.mockapi.io/students?page=${page}`);
      const data = await response.json();
      setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const value = {
    products,
    page,
    setPage
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};