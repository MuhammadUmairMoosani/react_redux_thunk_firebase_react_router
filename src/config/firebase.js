import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD4k4EWBFT9I2JnmMcZ7oVaC_2TxShOHhw",
  authDomain: "redux-thunk-with-firebase.firebaseapp.com",
  databaseURL: "https://redux-thunk-with-firebase.firebaseio.com",
  projectId: "redux-thunk-with-firebase",
  storageBucket: "",
  messagingSenderId: "794039505231",
  appId: "1:794039505231:web:febf92dd43d6c74105753a",
  measurementId: "G-BGWEN7LYLJ"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
