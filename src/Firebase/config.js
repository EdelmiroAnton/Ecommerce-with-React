// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVG4RmTBPsqALAyVB90kLO0X3iID3E0Z0",
  authDomain: "guitarjs-91798.firebaseapp.com",
  projectId: "guitarjs-91798",
  storageBucket: "guitarjs-91798.appspot.com",
  messagingSenderId: "1097691945853",
  appId: "1:1097691945853:web:ef57d111a4b45f58c80a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)