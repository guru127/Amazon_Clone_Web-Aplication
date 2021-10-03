import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import {useStateValue} from "./StateProvider";
import { getCartTotal } from './reducer';
import { Link, useHistory } from 'react-router-dom';

const Subtotal = () => {
    const [{cart}, dispatch] = useStateValue();
    const history = useHistory()

 const  emptyCart = () =>cart.length = 0;     
   
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                    Subtotal ({cart.length} itmes): 
                    <strong>{ value }</strong>
                    </p>
                    <small className="subtotal_gift" >
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value= {getCartTotal(cart)}                
                displayType={"text"}
                thousandSeparator={true}
                prefix={" ₹ "}
            />
            <button onClick={e=> history.push('/payment')} >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
