import './navigation.css'
import { NavLink } from "react-router-dom";
const Navigation = () => {
    return ( 
        <header className="mainNavigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="activelink" exact>home</NavLink>

                    </li>
                    <li>
                        <NavLink to="/cart" activeClassName="activelink">cart</NavLink>

                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;