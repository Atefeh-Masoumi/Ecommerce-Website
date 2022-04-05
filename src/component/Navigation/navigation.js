import './navigation.css'
import { NavLink } from "react-router-dom";
import { useCart } from '../../Providers/CartProvider';
const Navigation = () => {
    const {cart}=useCart();
    return ( 
        <header className="mainNavigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={(navData)=>navData.isActive ?"activelink":""} >home</NavLink>

                    </li>
                    <li className='cartlink'>
                        <NavLink to="/cart" className={(navData)=>navData.isActive ?"activelink":""}>cart
                        </NavLink>

                        <span>{cart.length}</span>
                    </li>
                </ul>
                <div>

                </div>
            </nav>
        </header>
     );
}
 
export default Navigation;