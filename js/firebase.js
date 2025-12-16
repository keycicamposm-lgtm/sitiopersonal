// firebase.js (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJxAqSyQ6HqAFR6szqQqUufBu64hxQUJY",
  authDomain: "personalsite-eabbb.firebaseapp.com",
  projectId: "personalsite-eabbb",
  storageBucket: "personalsite-eabbb.firebasestorage.app",
  messagingSenderId: "128154693168",
  appId: "1:128154693168:web:8fb5b46161d756a9df47f5",
  measurementId: "G-X72TKK970V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("🔥 Firebase Firestore conectado");
