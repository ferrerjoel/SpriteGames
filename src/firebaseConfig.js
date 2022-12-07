// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
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

export function singOut() {
  signOut(auth).then(() => {
    console.log("YEY")
  }).catch((error) => {
    // An error happened.
    console.log("UI")
  });
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
export const auth = getAuth();

export function mapAuthCodeToMessage(authCode) {
  switch (authCode) {
    case "auth/invalid-password":
      return "-Password provided is not correct";

    case "auth/invalid-email":
      return "-Email provided is invalid";

    // Many more authCode mapping here...

    default:
      return "";
  }
}

// set(ref(database), "src\test_data.json");







