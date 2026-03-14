import { useState, useEffect } from "react";
import { createContext } from "react";
import { useMemo } from "react";

export const ProductContext = createContext(null);

const getValue = (field) => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number') return field;
  if (typeof field === 'object') {
    if (field.$title) return field.$title;
    if (field.$oid) return field.$oid;
    if (field.value) return field.value;
    if (field.$numberInt) return parseInt(field.$numberInt);
    if (field.$numberDouble) return parseFloat(field.$numberDouble);
  }
  return String(field);
};

const normalizeProduct = (product) => {
  return {
    ...product,
    _id: getValue(product._id),
    name: product.name || '',
    produced: product.produced || '',
    category: product.category?.$title || getValue(product.category) || '',
    info: product.info || '',
    image: product.image || '',
    price: product.price?.value || product.price || 0,
    rate: product.rate || 0,
    description: product.description || ''
  };
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [apiPage, setApiPage] = useState(1); 
  const [selectedCategory, setSelectedCategory] = useState("Усі");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 }); 
  const [availableCategories, setAvailableCategories] = useState(["Усі"]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000); 
  const [isLoading, setIsLoading] = useState(false);
  

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://695054968531714d9bd0565f.mockapi.io/students?page=${apiPage}`);
      const data = await response.json();
      
      const normalizedData = data.map(normalizeProduct);
      
      setProducts(prevProducts => {
        const existingIds = new Set(prevProducts.map(p => p._id));
        const newProducts = normalizedData.filter(p => !existingIds.has(p._id));
        return [...prevProducts, ...newProducts];
      });
      
      setFilteredProducts(prevFiltered => {
        const existingIds = new Set(prevFiltered.map(p => p._id));
        const newProducts = normalizedData.filter(p => !existingIds.has(p._id));
        return [...prevFiltered, ...newProducts];
      });

      
      
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [apiPage]);

  useEffect(() => {
    if (products.length > 0) {
      const categories = [...new Set(products.map(item => item.category).filter(Boolean))];
      setAvailableCategories(["Усі", ...categories]);
      
      const brands = [...new Set(products.map(item => item.produced).filter(Boolean))];
      setAvailableBrands(brands);
      
      const prices = products
        .map(item => item.price)
        .filter(price => !isNaN(price) && price !== null && price !== undefined);
      
      const max = prices.length > 0 ? Math.max(...prices) : 1000;
      setMaxPrice(max);
    }
  }, [products]);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== "Усі") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.produced));
    }

    filtered = filtered.filter(product => {
      const price = product.price || 0;
      return price >= priceRange.min && price <= priceRange.max;
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrands, priceRange, products]);

  const loadMore = () => {
    setApiPage(prev => prev + 1);
  };

  const value = {
    products: filteredProducts, 
    allProducts: products,
    apiPage, 
    setApiPage, 
    selectedCategory,
    setSelectedCategory,
    selectedBrands,
    setSelectedBrands,
    priceRange,
    setPriceRange,
    availableCategories,
    availableBrands,
    maxPrice: maxPrice || 1000,
    loadMore,
    isLoading
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};