import { useState, useEffect } from "react";
import { createContext } from "react";

export const ProductContext = createContext(null);
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Усі");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  const fetchProducts = async () => {
      const response = await fetch(`https://695054968531714d9bd0565f.mockapi.io/students?page=${page}`);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); 
  };

  const filterProducts = () => {
    let filtered = [...products];

    if (selectedCategory !== "Усі") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    filtered = filtered.filter(product => {
      const price = product.price?.value || product.price || 0;
      return price >= priceRange.min && price <= priceRange.max;
    });

    setFilteredProducts(filtered);
    setPage(1); 
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    if (products.length > 0) {
      filterProducts();
    }
  }, [selectedCategory, selectedBrands, priceRange, products]);

  const value = {
    products: filteredProducts, 
    allProducts: products,
    page,
    setPage,
    selectedCategory,
    setSelectedCategory,
    selectedBrands,
    setSelectedBrands,
    priceRange,
    setPriceRange,
    filterProducts
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};