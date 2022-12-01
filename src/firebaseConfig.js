// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr1X-q56d5qTPFzSmk7npHfURS4AUVKQU",
  authDomain: "spritegames-77777.firebaseapp.com",
  databaseURL: "https://spritegames-77777-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spritegames-77777",
  storageBucket: "spritegames-77777.appspot.com",
  messagingSenderId: "919053433947",
  appId: "1:919053433947:web:9d6617ae820d200801d37e",
  measurementId: "G-FS0QN26Y8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

