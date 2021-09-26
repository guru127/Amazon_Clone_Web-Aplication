import * as firebase from "firebase";
import 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOujGrYhhPSWYL_WkdhbWlVuCV4zb-Tkc",
  authDomain: "clone-2ad4b.firebaseapp.com",
  databaseURL: "https://clone-2ad4b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clone-2ad4b",
  storageBucket: "clone-2ad4b.appspot.com",
  messagingSenderId: "824439251343",
  appId: "1:824439251343:web:785f626e30c08e3074abfa",
  measurementId: "G-05T6DCZY1M"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
  
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 
 export { auth };