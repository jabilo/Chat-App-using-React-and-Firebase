import React from 'react'
import { Avatar, IconButton } from '@mui/material';
import "./Message.css"
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app'

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
function Message(props) {
const {text,uid,photoURL} = props.message;
const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
console.log(messageClass);

  return (
    <div className='container'>

   
    <div className={` message left my-3 ${messageClass}`} Style="width:300px">
      <div className='row'>
        <div className='col  btn btn-info '>
            <p>{text}</p>
        </div>
        <div className='col-4 w-25' >
            <IconButton>
            <Avatar className="my-2" src={photoURL} />
            </IconButton>
            
        </div>
      </div>
    </div>
    </div>


    // left
    
  )
}

export default Message;