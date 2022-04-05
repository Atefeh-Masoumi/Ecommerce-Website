import {  createContext, useContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const CartContex = createContext();
const CartContexDispatcher = createContext();

const initialState={
    cart:[],
    total:0,
}
const CartProvider=({children})=>{
    const[cart, dispatch]= useReducer(cartReducer,initialState);
    return(
        <CartContex.Provider value={cart}>
            <CartContexDispatcher.Provider value={dispatch}>
                {children}
            </CartContexDispatcher.Provider>
        </CartContex.Provider>
    )
}

export default CartProvider;

export const useCart =()=>useContext(CartContex);
export const useCartAction=()=> useContext(CartContexDispatcher);