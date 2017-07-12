import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';


firebase.initializeApp({
    apiKey: "AIzaSyAc-z5w-8yIqHT4bTNP3cKo8hVmVah1_Ig",
    authDomain: "new-instagram-994a8.firebaseapp.com",
    databaseURL: "https://new-instagram-994a8.firebaseio.com",
    projectId: "new-instagram-994a8",
    storageBucket: "new-instagram-994a8.appspot.com",
    messagingSenderId: "1087322896442"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
