import React from 'react'
import Message from './Message'
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {useState, useRef} from "react";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'
import { getAuth } from "firebase/auth";
import './MainPage.css'


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
  const firestore = firebase.firestore();

export default function MainPage() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const querry = messagesRef.orderBy('createdAt').limit(100);

  const [messages] = useCollectionData(querry,{idField: 'id'});
  const [formValue,setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();
    const {uid,photoURL} = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
    
  }
  return (
    
    <div className='container'>
      <div className=' container card card-body bg-dark my-3' Style="width:200vh; height:80vh">
      {messages && messages.map(msg => <Message key={msg.id} message={msg}/>)}
      <span ref={dummy}></span>
     
      </div>
      <form onSubmit={sendMessage}>
        <div className='row'>
          <div className='col-sm-11 col-md-11 col-lg-11'>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} className="form-control bg-light" type="text" placeholder="Say something !! :)"/>
          </div>
          <div className='col-sm-1 col-md-1 col-lg-1'>
          <button className='btn btn-success' type="submit">Send</button>
          </div>
        </div>
     
     
      </form>
    </div>
    
  )
}
