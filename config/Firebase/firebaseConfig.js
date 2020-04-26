import * as firebase from "firebase";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBTWRIzH_m_YVidkSTx3trD4vxhnvF_UuA",
  authDomain: "base-69690.firebaseapp.com",
  databaseURL: "https://base-69690.firebaseio.com",
  projectId: "base-69690",
  storageBucket: "base-69690.appspot.com",
  messagingSenderId: "363416682592",
  appId: "1:363416682592:web:6fc3073b581de35a958305",
  measurementId: "G-WLTLV1DVE1",
};

if (!firebase.apps.length) {
  console.log("Firebase initialized");
  app = firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore(app);
