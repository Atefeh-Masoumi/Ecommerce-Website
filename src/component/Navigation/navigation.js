import './navigation.css'
import { NavLink } from "react-router-dom";
import { useCart } from '../../Providers/CartProvider';
import { useAuth } from '../../Providers/AuthProvider';
const Navigation = () => {
    const userData = useAuth();
    const {cart}=useCart();
    return ( 
        <header className="mainNavigation">
            <nav>
                <ul>
                    <div>LOGO FOr website</div>
                    <li>
                        <NavLink to="/" className={(navData)=>navData.isActive ?"activelink":""} >home</NavLink>

                    </li>
                </ul>
                <ul>
                    <li className='cartlink'>
                        <NavLink to="/cart" className={(navData)=>navData.isActive ?"activelink":""}>cart
                        </NavLink>

                        <span>{cart.length}</span>
                    </li>
                    <li className='cartlink'>
                        <NavLink to={userData? "/profile" : "/login"} className={(navData)=>navData.isActive ?"activelink":""}>{userData? "profile": "login/Signup"}
                        </NavLink>
                    </li>
                </ul>
                <div>

                </div>
            </nav>
        </header>
     );
}
 
export default Navigation;