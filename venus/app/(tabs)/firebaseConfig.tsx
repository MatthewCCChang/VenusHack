// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPAjLOVyfghAhbTc7AhmyMS2HtpGGBLvU",
  authDomain: "vh24-2476b.firebaseapp.com",
  projectId: "vh24-2476b",
  storageBucket: "vh24-2476b.appspot.com",
  messagingSenderId: "132877692249",
  appId: "1:132877692249:web:933926476c41b92126b048",
  measurementId: "G-Z9BG9QNF2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
