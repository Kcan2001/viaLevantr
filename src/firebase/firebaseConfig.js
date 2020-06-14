// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFMbdyaUDSYLQBtzEmrSU23Ai1nwDrNWg",
  authDomain: "bookit-ddac6.firebaseapp.com",
  databaseURL: "https://bookit-ddac6.firebaseio.com",
  projectId: "bookit-ddac6",
  storageBucket: "bookit-ddac6.appspot.com",
  messagingSenderId: "984021608008",
  appId: "1:984021608008:web:e29a7b31acae3aa9765a7d",
  measurementId: "G-499GS7N2DK"
};

firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()

// firebase collections
const crewCollection = db.collection('crew')

export {
    db,
    crewCollection
}
