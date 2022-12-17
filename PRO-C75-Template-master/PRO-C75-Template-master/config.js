import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDYLhRhJI5kW9mP9ssIUhLEH6IKXg1RtlE",
  authDomain: "e-library-79307.firebaseapp.com",
  projectId: "e-library-79307",
  storageBucket: "e-library-79307.appspot.com",
  messagingSenderId: "389412874271",
  appId: "1:389412874271:web:821013580f936751bc0d2a",
  measurementId: "G-KJCP3EFZ53"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
