import React from 'react';
import './Product.css';

const Product = ({tittle, price, image, rating}) => {
    return (
        <div className="product">
           <div className="product_info">
               <p>{tittle}</p>
               <p className="product_price">
                   <small>$</small>
                   <strong>{price}</strong>
               </p>
           <div className="product_rating">
          { Array(rating).fill().map((_, i) =>
               (<p>⭐</p>)
           )}
           </div> 
         </div>
         <img src={image} alt=""></img>   
         <button className="">Add to Cart</button>        
     </div>

    )
}

export default Product
