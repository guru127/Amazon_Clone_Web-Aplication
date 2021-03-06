import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./../Styles/Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './../StateProvider';

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();
    return (
        <div className="chekout">
            <div className="checkout-left" >
                <img className="checkout-add"
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Coupons/Georache/Jupiter21/SBC/LP_header_coupons.jpg" 
                 alt=""></img>
              <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_tittle"> Your Cart</h2>
                    {cart.map((item, index ) => (                        
                            <CheckoutProduct
                                key={index}
                                id={item.id} 
                                tittle= {item.tittle}
                                image= { item.image}
                                price= {item.price}
                                rating= {item.rating}
                            />
                        ))
                    }
              </div>
            </div>  
            <div className="chekout_right">
              <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
