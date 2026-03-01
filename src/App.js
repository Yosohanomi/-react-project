import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import resetCss from './components/Reset/Reset.css'
import { ProductsPage } from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <ProductsPage/>
    </div>
  );
}

export default App;
