import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuD4inkNZ4l9SAlHLGyOZtCtArp4us7EA",
  authDomain: "zochen-guestbook.firebaseapp.com",
  projectId: "zochen-guestbook",
  storageBucket: "zochen-guestbook.firebasestorage.app",
  messagingSenderId: "145892447693",
  appId: "1:145892447693:web:147d2497e954e59b746084",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
