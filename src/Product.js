import React, {Component} from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, tittle, price, image, rating}) => {
    const [{cart}, dispatch] = useStateValue();
   // console.log(" cart items  "+ cart);

    const addToCart = () => {
        // dispacth item into the to data layer
     dispatch({
         type: 'ADD_TO_CART',
         item:{            
             id: id,
             tittle: tittle,
             image: image,
             price: price,
             rating: rating,
         },
     });
    };
    
    return (
        <div className="product">
           <div className="product_info">
               <p>{tittle}</p>
               <p className="product_price">
                   <small>₹</small>
                   <strong>{price}</strong>
               </p>
           <div className="product_rating">
          { Array(rating).fill().map((_, i) =>
               (<p>⭐</p>)
           )}
           </div> 
         </div>
         <img src={image} alt=""></img>   
         <button className="add_button" onClick={addToCart}>Add to Cart</button>        
     </div>

    )
}

export default Product
