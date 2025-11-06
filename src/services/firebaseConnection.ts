import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth }  from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyDfQHF9oEhzE68ZnnUIhlZ8ipkyRze6g-c",
  authDomain: "petwalker-99b7c.firebaseapp.com",
  projectId: "petwalker-99b7c",
  storageBucket: "petwalker-99b7c.firebasestorage.app",
  messagingSenderId: "843278626223",
  appId: "1:843278626223:web:389de8c4a48f14088cd35a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { db, auth };