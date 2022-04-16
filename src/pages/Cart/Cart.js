import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useCart,useCartAction } from "../../Providers/CartProvider";
import'./cart.css';

const CartPage = () => {
    
    //global state using contex
    const {cart,total} = useCart();
    const dispatch = useCartAction();

    //when there is nothing in the cart we will show this message
    if (!cart.length)
    return (
      <>
      <Layout/>
        <main>
          <h2 style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>cart is empty !</h2>
        </main>
      </>
      
    );

    // hadndlers for add and remove
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
                       return(
                       <div className="cartItem" key={item.id}>
                           <div className="itemImage" >
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
    // this function calculate the total price of the cart without discount
   const originalTotalPrice = cart.length ? cart.reduce((acc,curr)=>acc + curr.quantity * curr.price,0):0;
  
    return(
        <section className="cartSummary">

            <h2 style={{marginBottom:"20px"}}>Cart Summary</h2> 
            {/* original price of products */}
            <div className="summaryitem">
                <p>Original Total Price:</p>
                <p>{originalTotalPrice}$</p>
            </div>
            {/* total discount of products */}
            <div className="summaryitem">
                <p>cart discount:</p>
                <p>{originalTotalPrice - total}$</p>
            </div>
             {/* total price of products with discount counted */}
            <div className="summaryitem net">
                <p>cart net price:</p>
                <p>{total}$</p>
            </div>
            {/* link to check out page if user is logged in */}
            <Link to="/signup?redirect=/checkout">
            <button className="btn primary" style={{marginTop:"20px",width:"100%"}}>Go to CheckOut</button>
            </Link>
                
        </section>
    );
};