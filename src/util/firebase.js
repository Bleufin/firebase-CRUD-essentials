import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDePrnM39RGcdS_RxTKbcztepoRhdeoWw0",
  authDomain: "todo-104ff.firebaseapp.com",
  databaseURL: "https://todo-104ff.firebaseio.com",
  projectId: "todo-104ff",
  storageBucket: "todo-104ff.appspot.com",
  messagingSenderId: "839823639812",
  appId: "1:839823639812:web:891a139e4b9517381ebc51"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
