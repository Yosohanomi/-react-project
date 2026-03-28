import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import resetCss from './components/Reset/Reset.css'
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import {Routes, Route } from "react-router";
import { CategoriesList } from './pages/CategoriesList/CategoriesListPage';
import { ProductInfo } from './pages/ProductInfo/ProductInfoPage';
import { Order } from './pages/Order/OrderPage';
import { Cabinet } from './pages/Cabinet/CabinetPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Register } from './pages/Register/RegisterPage';
import { Login } from './pages/Login/LoginPage'


function App() {

  console.log(window.history);
  console.log(window.location);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/categories" element={<CategoriesList/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/product/:productId" element={<ProductInfo />} />
        <Route path="/productInfo" element={<ProductInfo/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cabinet" element={<Cabinet/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
