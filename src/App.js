import './App.css';
import Header from './Componets/Header';
import Home from "./Componets/Home"; 
import{BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Componets/Checkout';
import Login from './Componets/Login';
import { useEffect } from 'react';
import { auth} from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Componets/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

 const promise = loadStripe("pk_test_51Jn5NYSEPJRHnMk5EssC0mHNVANjFnf8rVqukqzFlRzIl8iNUcf1sS6Ezd7QWGXBMEMrjp1bTlKlvw6muP7LaiZf00jE4TdDQc")


function App() {
   const [{}, dispatch] =  useStateValue();

  useEffect(()=>{
     // will only runs when app component loads..
          auth.onAuthStateChanged(authUser =>{
          //  console.log("user-----"+authUser)        
            if (authUser){
              //the user just logged in /  was loggged it
               dispatch({
                type: 'SET_USER',
                user: authUser
               })
            }else{
              // the user is loged out
              dispatch({
                type: 'SET_USER',
                user: null
               })
            }
        })

   }, []);

  return (
      <Router>
        <div className="App">
          <Header/>
            <Switch>

              <Route path="/Checkout" >
                <Checkout/>       
              </Route>

              <Route path="/Login" >
                <Login/>       
              </Route>

              <Route path="/payment" >
                <Elements stripe={promise}>
                  <Payment/>     
                </Elements>
              </Route>

              <Route path="/" >
                  <Home/>
              </Route>

            </Switch>
       </div>
    </Router>
 
  );
}

export default App;
