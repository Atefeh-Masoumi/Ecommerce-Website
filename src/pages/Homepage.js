import Layout from "../Layout/Layout";
import * as data from "../data"
const Homepage = () => {
    const addProductHandler =(product)=>{
        console.log(product);

    }
    return (  
        <>
        <Layout/>
            <main className="container">
                <section className="productlist">{data.products.map((product)=> 

                    <section className="product" key={product.id}>
                        <div className="productimage">
                            <img src={product.image} alt={product.name}></img>
                        </div>
                        <div className="productdesc">
                        <p>{product.name}</p>
                        <p>$ {product.price}</p>
                        <button onClick={()=>addProductHandler(product)}className="btn primary">Add to Cart</button>
                        </div>
                    </section>
                              
                )}
                </section>
            </main>
        </>
        
    );
}
 
export default Homepage;
