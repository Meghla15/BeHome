import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA7F-Wh-OCqSB5BQz-UW2ZMFgc66sSddjI",
  authDomain: "be-home-5d4f5.firebaseapp.com",
  projectId: "be-home-5d4f5",
  storageBucket: "be-home-5d4f5.appspot.com",
  messagingSenderId: "548696347330",
  appId: "1:548696347330:web:a0c3ce60533fd3a851215b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
