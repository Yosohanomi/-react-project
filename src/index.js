import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { AuthProvider } from './context/AuthContext/AuthProvider';
import { ProductProvider } from './context/ProductsContext/ProductsContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <ProductProvider>
        <App />
      </ProductProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);

