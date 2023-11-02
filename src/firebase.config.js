import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyChTmLu1Dwmpjy89xSRrB4kWJk4JkJOzAI",
//   authDomain: "food-delivery-a4043.firebaseapp.com",
//   databaseURL: "https://food-delivery-a4043-default-rtdb.firebaseio.com",
//   projectId: "food-delivery-a4043",
//   storageBucket: "food-delivery-a4043.appspot.com",
//   messagingSenderId: "181667256978",
//   appId: "1:181667256978:web:1f7eec5b7a48bbfbec244b"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCaqoAyQ66odXZdvxBsLMf2_ePCc4Ycn7I",
  authDomain: "restaurantapp-fe54e.firebaseapp.com",
  databaseURL: "https://restaurantapp-fe54e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-fe54e",
  storageBucket: "restaurantapp-fe54e.appspot.com",
  messagingSenderId: "341867919550",
  appId: "1:341867919550:web:45b5b55532a3a875ea06ef"
  };

  
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
