import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTYL-5YsE1adSVqbfVtoUrtOLh8T1OmQg",
  authDomain: "insta-clone-9d3b6.firebaseapp.com",
  projectId: "insta-clone-9d3b6",
  storageBucket: "insta-clone-9d3b6.appspot.com",
  messagingSenderId: "142803759943",
  appId: "1:142803759943:web:ae5b51bb3eccefe692d262",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
