import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCiJ8cIhP7thiIzXH2X7CB0MLz_Lx7oOQY",
    authDomain: "pratilipi-blog.firebaseapp.com",
    databaseURL: "https://pratilipi-blog.firebaseio.com",
    projectId: "pratilipi-blog",
    storageBucket: "pratilipi-blog.appspot.com",
    messagingSenderId: "571606559056",
    appId: "1:571606559056:web:301381ce5f45227b8c2455",
    measurementId: "G-Y4JC9L7SSV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
export default firebase;