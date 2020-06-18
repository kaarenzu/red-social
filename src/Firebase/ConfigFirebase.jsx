import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'



// Llave de firebase para poder acceder a la base de datos que tenemos en ella 
const firebaseConfig = {
    apiKey: "AIzaSyAGlAwaicamFm_2Drh2zLjAU6uM5jNOKzo",
    authDomain: "socialpyme-29320.firebaseapp.com",
    databaseURL: "https://socialpyme-29320.firebaseio.com",
    projectId: "socialpyme-29320",
    storageBucket: "socialpyme-29320.appspot.com",
    messagingSenderId: "154794797851",
    appId: "1:154794797851:web:674201394de149a7a981be",
    measurementId: "G-P7J3GQ5WBX"
  };

firebase.initializeApp(firebaseConfig);

 let db= firebase.firestore(); // Conectamos firebase con firestore
  export {db, firebase}