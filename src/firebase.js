// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxApG_XDAJz9-TX7_LfPWkFah-tpvbZDA",
  authDomain: "crud-basico-react-ed223.firebaseapp.com",
  projectId: "crud-basico-react-ed223",
  storageBucket: "crud-basico-react-ed223.appspot.com",
  messagingSenderId: "167612000098",
  appId: "1:167612000098:web:19bbbcc1f1bce735cc6e3b",
  measurementId: "G-XRLHK9CP12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }