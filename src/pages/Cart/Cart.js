import Layout from "../../Layout/Layout";
import { useCart,useCartAction } from "../../Providers/CartProvider";
import'./cart.css'
const CartPage = () => {
    const {cart,total} = useCart();
    const dispatch = useCartAction();

    if(!cart) return <main><h2> Cart is empty</h2></main>

    console.log(cart);
    const incrementHandler=(cartItem)=>{
        dispatch({type:"ADD_TO_CART",payload:cartItem})
    }
    const decHandler =(cartItem)=>{
        dispatch({type:"REMOVE_PRODUCT", payload:cartItem})
    }
    return ( 
       <>
           <Layout/>
           <main className="container">
               <section className="cartCenter">
               <section className="cartItemList">
                   {cart.map((item)=> {
                       return(<div className="cartItem">
                           <div className="itemImage">
                           <img src={item.image} alt={item.name}></img>
                           </div>
                           <div>{item.name}</div>
                           <div>{item.price* item.quantity}</div>
                           <div>
                           <button onClick={()=>decHandler(item)}>remove</button>
                           <button>{item.quantity}</button>
                           <button onClick={()=>incrementHandler(item)}>Add</button>
                           </div>

                       </div>)
                   })}
               </section>
               <section className="cartSummary">
                   <h2>Cart Summary</h2> 
                    <div>{total}$</div>
                </section>
               </section>
           </main>
       </>
     );
}
 
export default CartPage;