import './navigation.css'
import { NavLink } from "react-router-dom";
const Navigation = () => {
    return ( 
        <header className="mainNavigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={(navData)=>navData.isActive ?"activelink":""} >home</NavLink>

                    </li>
                    <li>
                        <NavLink to="/cart" className={(navData)=>navData.isActive ?"activelink":""}>cart</NavLink>

                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;