// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0wOgIQj3hGWuwi8QBDJQPbrsaKGWIII4",
  authDomain: "hot-news-app.firebaseapp.com",
  projectId: "hot-news-app",
  storageBucket: "hot-news-app.appspot.com",
  messagingSenderId: "640154474108",
  appId: "1:640154474108:web:02ce40193f9a9949ba9bf9"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;