import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1N4l_nRZvlEJNO6sGD6M_86NkdD37cu4",
  authDomain: "tienda-stickers.firebaseapp.com",
  databaseURL: "https://tienda-stickers-default-rtdb.firebaseio.com",
  projectId: "tienda-stickers",
  storageBucket: "tienda-stickers.appspot.com",
  messagingSenderId: "840001612671",
  appId: "1:840001612671:web:78c78d2d69780741d7884a"
};

 
const firebaseConfig = { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId };

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)