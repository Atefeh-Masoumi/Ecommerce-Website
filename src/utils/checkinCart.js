export function checkIncart(cart, product){
    return cart.find(c=>c.id === product.id);

}