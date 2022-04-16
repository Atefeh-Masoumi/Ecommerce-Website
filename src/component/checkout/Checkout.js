import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import './checkout.css';

const Checkout = () => {
    const auth = useAuth();
    const {cart, total} = useCart();
    if (!cart.length) return <main className="container">
        <Link to="/">
        go to Shopping
        </Link>
    </main>
    return ( 

        <main className="container" style={{backgroundColor:"#fff"}}>
            <section className="cartCenter">
            {auth?
                    <>
                    <section className="cartItemList">

                    <h2>checkout detail</h2>
                    <p>name: {auth.name}</p>
                    <p>email: {auth.email}</p>
                    <p>tel: {auth.phoneNumber}</p>
                    </section>
                    <section className="cartSummery">
                        {cart &&
                        cart.map((c)=>{
                            return(
                                <div>
                                    {c.name} * {c.quantity}: {c.quantity * c.offPrice}
                                </div>
                            )
                        })
                        }
                        <hr/>
                        <div>total: {total}</div>
                    </section>
                    </>: <p>please login</p>}
                

            </section>

            

        </main>
     );
}
 
export default Checkout;