import Layout from "../../Layout/Layout";
import { useCart,useCartAction } from "../../Providers/CartProvider";
import'./cart.css';

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
                           <div>$ {item.offPrice* item.quantity}</div>
                          
                           <div className="btnGroup">
                           <button onClick={()=>decHandler(item)}> - </button>
                           <button>{item.quantity}</button>
                           <button onClick={()=>incrementHandler(item)}> + </button>
                           </div>
                       </div>)
                   })}
               </section>
               <CartSummary cart={cart} total={total}/>
               
               </section>
           </main>
       </>
     );
}
 
export default CartPage;

const CartSummary = ({total,cart})=>{
   const originalTotalPrice = cart.length ? cart.reduce((acc,curr)=>acc + curr.quantity * curr.price,0):0;
  
    return(
        <section className="cartSummary">
            <h2 style={{marginBottom:"20px"}}>Cart Summary</h2> 
            <div className="summaryitem">
                <p>Original Total Price:</p>
                <p>{originalTotalPrice}$</p>
            </div>
            <div className="summaryitem">
                <p>cart discount:</p>
                <p>{originalTotalPrice - total}$</p>
            </div>
            
            <div className="summaryitem net">
                <p>cart net price:</p>
                <p>{total}$</p>
            </div>
                
        </section>
    );
};