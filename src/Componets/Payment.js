import React, {useState,useEffect}from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./../Styles/Payment.css"
import {useStateValue} from "../StateProvider";
import { Link, useHistory } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../reducer';
import axios from './Axios';



const Payment = () => {
    const [{cart, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisableed] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeded, setSucceded] = useState(false);
    const [clientSecret, setClientSecret] = useState(false);
    const history = useHistory();


    const stripe =useStripe();
    const elements = useElements();
    useEffect(() => {
       const getdata = async () =>{
           const response = await axios ({
               method: 'post',
               //stripe exepcts the total in a cureencis in subuints
               url: `/payments/create?total=${getCartTotal(cart) * 100}`
           })
           setClientSecret( response.data.clientSecret)
       }
       getdata();
    }, [cart])
    
    const handlePaymentSubmit =(e)=>{
        e.preventDefault();
        setProcessing(true);
        const payload =  stripe.confirmCardPayment(clientSecret, {
      //const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // Payment intenet is like confurmation
            setSucceded(true);
            setError(null);
            setProcessing(false);
            
            history.replace('/orders');
        })
    }
    const handleCardDetails =(e)=>{
        // paymenthandling, listen for change in card element and shows error if any
        setDisableed(e.empty);
        setError(e.error? e.error.message: "");

    }
    

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
                     <form onSubmit={handlePaymentSubmit}>
                         <CardElement onChange= {handleCardDetails}/>
                         <div className="payment_price_container" >
                         <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                    <h4>Order Total: {value}</h4>                                     
                                    </>
                                )}
                                decimalScale={2}
                                value= {getCartTotal(cart)}                
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={" ₹ "}
                            />
                           <button disabled={processing || disabled ||succeded} >
                               <span>{ processing?<p>processing..</p>:"Buy Now" }</span>
                           </button>
                         </div>
                         {error && <div>{error}</div>}
                     </form>
                </div>
            </div>
          </div> 
        </div>
    )
}

export default Payment
