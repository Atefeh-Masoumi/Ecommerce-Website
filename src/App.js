
import './App.css';

import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import CartPage from './pages/Cart/Cart';
import CartProvider from './Providers/CartProvider';

function App() {
  return (
    <Router>
      <CartProvider>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
