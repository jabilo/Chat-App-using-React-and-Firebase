import React from 'react'
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app'

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
  
function Login() {
    const signInWithGoogle = () => {
        const proider = new GoogleAuthProvider();
        signInWithPopup(auth,proider)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error)
        });
    
      }
  return (
    <div className='login-page'>
      <div className='card justify-content-center container align-items-center my-3 bg-dark' Style="height:90vh; width:190vh;" >
        <button className='btn btn-success ' Style="width:300px" onClick={signInWithGoogle}>Login with Google</button>
      </div>
    </div>
  )
}

export default Login;
