import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6JVlrAXHwKAE1C0LQtdc6CibXLkvEbAE",
  authDomain: "crudoperation-b64fc.firebaseapp.com",
  projectId: "crudoperation-b64fc",
  storageBucket: "crudoperation-b64fc.appspot.com",
  messagingSenderId: "340633337839",
  appId: "1:340633337839:web:f1625b5058946eaf1f001a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




