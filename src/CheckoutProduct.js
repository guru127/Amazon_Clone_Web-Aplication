
import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


const CheckoutProduct = (product) => {
     const [{cart}, dispatch] = useStateValue();

     const removeFormCart=()=>{
            dispatch({
                
                type: 'REMOVE_FROM_CART',
                id: product.id
            })
        }

    return (         
         <div className="checkouProduct">
             <img className="checkouProduct_image" 
                 src={product.image}/>

             <div className= "checkoutProduct_info">
                 <p className="checkouProduct_product_title">
                       {product.tittle}</p>
                 <p className="checkouProduct_product_price">
                        <small>₹</small>
                        <strong>{product.price}</strong>
                  </p>
                  <div className="checkouProduct_product_rating">
                        { Array(product.rating)
                        .fill()
                        .map((_, i) =>
                            (<p>⭐</p>)
                        )}
                 </div> 
               <button onClick={removeFormCart}>Remove from Cart</button>
             </div> 
        </div>
    )
}

export default CheckoutProduct
