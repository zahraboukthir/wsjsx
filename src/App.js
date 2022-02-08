
import './App.css';
import NavBar from './component/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './component/Footer/Footer';
import ProductList from './component/Produit/ProductList';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <ProductList/>
     <Footer/>
    </div>
  );
}

export default App;
