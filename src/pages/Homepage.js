import Layout from "../Layout/Layout";
import * as data from "../data"
import { useCart, useCartAction } from "../Providers/CartProvider";
import { checkIncart } from "../utils/checkinCart";
import { toast } from "react-toastify";
import Header from "./Header";

const Homepage = () => {
     const {cart} = useCart();

    const dispatch = useCartAction();
    const addProductHandler =(product)=>{
        toast.success(`${product.name} added to cart`);
        dispatch({type:"ADD_TO_CART",payload:product})

    }
    return (  
        <>
        <Layout/>
        <Header/>
            <main className="container">
                <section className="productlist" >{data.products.map((product)=> 

                    <section className="product" key={product.id}>
                        <div className="productimage">
                            <img src={product.image} alt={product.name}></img>
                        </div>
                        <div className="productdesc">
                        <p>{product.name}</p>
                        <p>$ {product.price}</p>
                        <button onClick={()=>addProductHandler(product)}className="btn primary">{checkIncart(cart,product) ? "In Cart":"Add to Cart"}</button>
                        </div>
                    </section>
                              
                )}
                </section>
            </main>
        </>
        
    );
}
 
export default Homepage;
