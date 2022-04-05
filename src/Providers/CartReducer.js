function addProudct(state,payload){
    const updatedCart = [...state.cart];
    const index = updatedCart.findIndex((item)=>item.id=== payload.id);
    if(index<0){
        updatedCart.push({...payload, quantity:1});

    }else{
      const updatedItem=  {...updatedCart[index]}
      updatedItem.quantity++;
      updatedCart[index]=updatedItem;
    }
       
    return {...state,cart:updatedCart, total:state.total+ payload.price,}

}
const removeProductfromCart=(state, payload)=>{
    const updatedCart = [...state.cart];
    const index = updatedCart.findIndex((item)=>item.id=== payload.id);
    const updatedItem=  {...updatedCart[index]};

    if(updatedItem.quantity === 1){
      const filteredproduct =  updatedCart.filter(item=>item.id !== payload.id);
        return {...state,cart:filteredproduct, total:state.total- payload.price,}

    }else{
        updatedItem.quantity--;
        updatedCart[index] = updatedItem;

        return {...state,cart:updatedCart, total:state.total - payload.price,}
    }
    

}
const cartReducer=(state,action)=>{
switch (action.type){
    case 'ADD_TO_CART':return  addProudct(state,action.payload);
    case 'REMOVE_PRODUCT': return removeProductfromCart(state, action.payload);
    
    default: 
    return state;
}

}
export default cartReducer;