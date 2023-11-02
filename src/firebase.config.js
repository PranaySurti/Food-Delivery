import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChTmLu1Dwmpjy89xSRrB4kWJk4JkJOzAI",
  authDomain: "food-delivery-a4043.firebaseapp.com",
  databaseURL: "https://food-delivery-a4043-default-rtdb.firebaseio.com",
  projectId: "food-delivery-a4043",
  storageBucket: "food-delivery-a4043.appspot.com",
  messagingSenderId: "181667256978",
  appId: "1:181667256978:web:1f7eec5b7a48bbfbec244b"
};

  
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
