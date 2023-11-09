
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB1_nd_3njvQyCplH6Ce54Zr3Dl5HSiHlU",
  authDomain: "clone-f5b9a.firebaseapp.com",
  projectId: "clone-f5b9a",
  storageBucket: "clone-f5b9a.appspot.com",
  messagingSenderId: "124985928628",
  appId: "1:124985928628:web:7caa0433b5f65c2e9da0e1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);