import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import resetCss from './components/Reset/Reset.css'
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import {Routes, Route } from "react-router";
import { CategoriesList } from './pages/CategoriesList/CategoriesList';
import { ProductInfo } from './pages/ProductInfo/ProductInfo';
import { Order } from './pages/Order/Order';
import { Cabinet } from './pages/Cabinet/Cabinet';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {

  console.log(window.history);
  console.log(window.location);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/categories" element={<CategoriesList/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/productInfo" element={<ProductInfo/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cabinet" element={<Cabinet/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
