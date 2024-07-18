// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC54c7SI8uy0pn_uqvWAld6f-jg_ILCd7Q",
  authDomain: "project-4286542774246918424.firebaseapp.com",
  projectId: "project-4286542774246918424",
  storageBucket: "project-4286542774246918424.appspot.com",
  messagingSenderId: "456418632799",
  appId: "1:456418632799:web:96a035f76d57fa1d9ba7ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);








