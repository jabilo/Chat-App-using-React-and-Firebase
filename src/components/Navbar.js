import React from 'react'
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app'
import { Link } from 'react-router-dom';

firebase.initializeApp({  
    apiKey: "AIzaSyAzxUu-Mey_y_g6hgzJdkDtwFsPMy_pwQI",
    authDomain: "bilo-chat.firebaseapp.com",
    projectId: "bilo-chat",
    storageBucket: "bilo-chat.appspot.com",
    messagingSenderId: "323417282577",
    appId: "1:323417282577:web:87d660e0601924a218f9b0",
    measurementId: "G-K0T7T6R9ME"
  })
  
  const auth = getAuth();

function Navbar() {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">QuickChat</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={() => auth.signOut()} type="submit" >Logout</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;