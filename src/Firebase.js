import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAi3pe6IoAXeiV5CFBf5kYfv7DgyYndYU",
  authDomain: "noted-4a961.firebaseapp.com",
  projectId: "noted-4a961",
  storageBucket: "noted-4a961.appspot.com",
  messagingSenderId: "771760233554",
  appId: "1:771760233554:web:da1d593504b301c86f538b",
  measurementId: "G-B5HWTWR59P",
});

const db = firebaseApp.firestore();

export default db;
