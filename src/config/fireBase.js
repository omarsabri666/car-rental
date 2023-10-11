// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYkksfQ7JS9yBaSorR7BGAEgVOfBV0sl4",
  authDomain: "cars-7ec7d.firebaseapp.com",
  projectId: "cars-7ec7d",
  storageBucket: "cars-7ec7d.appspot.com",
  messagingSenderId: "826710720025",
  appId: "1:826710720025:web:42e4d63ea9982d96f2f488",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
export const carsCollectionRef = collection(db,"cars")

