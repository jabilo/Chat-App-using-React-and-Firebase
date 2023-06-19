
import './App.css';
import Navbar from'./components/Navbar.js'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import './App.css';
// import 'firebase/auth';
import firebase from 'firebase/compat/app'
import 'firebase/firestore';
// import { } from "firebase/auth";
import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {useState} from "react";
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Login from './components/Login'
import About from './components/About'


firebase.initializeApp({  
  apiKey: "---your api key----",
  authDomain: "---your authdomain----",
  projectId: "----your project id----",
  storageBucket: "-----",
  messagingSenderId: "-------",
  appId: "----your app id-----",
  measurementId: "-------"
})

const auth = getAuth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App bg-light">
      {/* <Login/> */}
      {/* header bavbar */}
      <Navbar/>
     
      {/* <About/> */}
      {/* main page */}
      {user ? <MainPage /> : <Login />}

      {/* footer */}
     
    </div>
  );
}

export default App;
