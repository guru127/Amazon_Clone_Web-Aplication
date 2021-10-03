import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import {useStateValue} from "./StateProvider";
import { Link, useHistory } from 'react-router-dom';



const Payment = () => {
    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
           <div className="payment_container" >
              <h1>checkout(<Link to="/checkout"> {cart?.length } itmes</Link>) </h1>

            <div className="payment_section" >
                <div className="payment_title" >
                     <h3>Delivery Address</h3>
                </div>
                <div className="payment_address" >   
                  <p>{user?.email}</p>
                  <p>BH Road sagara</p>
                  <p> Shivamogga, karnataka</p>
                </div>
            </div>
            <div className="payment_section" >
                <div className="payment_title" >
                     <h3> Review Items and Delivery</h3>
                </div>
                <div className="payment_items">
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
            <div className="payment_section" >
               <div className="payment_title" >
                   <h3>Payment Method</h3>
                </div>
               <div className="payment_details">
                     
                </div>
            </div>
          </div> 
        </div>
    )
}

export default Payment
