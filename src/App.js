import './App.css';
import Header from './Header';
import Home from './Home'; 
import{BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth} from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';



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
                <Payment/>     
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
