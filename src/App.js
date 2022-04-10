
import './App.css';

import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import CartPage from './pages/Cart/Cart';
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/LoginPage';
import SignUp from './pages/SignupPage';
import AuthProvider from './Providers/AuthProvider';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <AuthProvider>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<ProfilePage />} />
        
        </Routes>
      </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
