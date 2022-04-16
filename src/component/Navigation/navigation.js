import './navigation.css'
import { NavLink } from "react-router-dom";
import { useCart } from '../../Providers/CartProvider';
import { useAuth } from '../../Providers/AuthProvider';
import { BsFillPersonFill, BsCart3 } from "react-icons/bs";
// import logo from "../asset/sneakerslogo.jpg"
const Navigation = () => {
    const userData = useAuth();
    const {cart}=useCart();
    return ( 
        <header className="mainNavigation">
            <nav>
           
                <ul>
                    
                    <li>
                        <NavLink to="/" className={(navData)=>navData.isActive ?"activelink":""} >home</NavLink>

                    </li>
                </ul>
                <div>
                    {/* <img src={logo} alt='logo' className='logoimg'/> */}
                </div>
                <div>
                <ul>
                    <li className='cartlink'>
                        <NavLink to="/cart" className={(navData)=>navData.isActive ?"activelink":""}><BsCart3 className="cart-icon" />
                        </NavLink>

                        <span>{cart.length}</span>
                    </li>
                    <li className='cartlink'>
                        <NavLink to={userData? "/profile" : "/login"} className={(navData)=>navData.isActive ?"activelink":""}>{userData? <BsFillPersonFill className="profile-icon" />: "login/Signup"}
                        </NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
     );
}
 
export default Navigation;