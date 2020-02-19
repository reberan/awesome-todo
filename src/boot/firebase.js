import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
let firebaseConfig = {
  apiKey: "AIzaSyCqCHBnJ97f1LSeZPCCd5HtcepSHKAW7FU",
  authDomain: "quasar-awesome-todo-list.firebaseapp.com",
  databaseURL: "https://quasar-awesome-todo-list.firebaseio.com",
  projectId: "quasar-awesome-todo-list",
  storageBucket: "quasar-awesome-todo-list.appspot.com",
  messagingSenderId: "688066257571",
  appId: "1:688066257571:web:9b205145c9a3bdb6129516",
  measurementId: "G-NF7QB9X10V"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDatabase = firebaseApp.database();

export { firebaseAuth };
export { firebaseDatabase };
