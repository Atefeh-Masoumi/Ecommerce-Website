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

                    <div className="buyer-info">
                        <h3>Checkout details</h3>
                        <div>
                            <p>Name : </p>
                            <span>{auth.name}</span>
                        </div>
                        <div>
                            <p>Email :</p>
                            <span>{auth.email}</span>
                        </div>
                        <div>
                            <p>Phone Number :</p>
                            <span>{auth.phoneNumber}</span>
                        </div>
                        <div>{new Date().toLocaleString() + ""}</div>
                        
                    </div>
                    </section>
                    <section className="cartSummery">
                    <h3 className="receiptTitle">Final Receipt</h3>
                        {cart &&
                        cart.map((c)=>{
                            return(
                                <div className="finalItems-buy">
                                    {c.name} * {c.quantity}: {c.quantity * c.offPrice}
                                </div>
                            )
                        })
                        }
                        <hr/>
                        <div>total: {total}</div>
                        <button className="btn primary buyBtn">Buy</button>
                    </section>
                    </>: <p>please login</p>}
                

            </section>

            

        </main>
     );
}
 
export default Checkout;