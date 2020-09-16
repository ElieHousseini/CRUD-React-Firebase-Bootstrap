/* Your web app's Firebase configuration
   For Firebase JS SDK v7.20.0 and later, measurementId is optional */

import firebase from "firebase/app"
import "firebase/database" // If using Firebase database

var firebaseConfig = {
  apiKey: "AIzaSyAIreb2-mzZn9sY-dD3Du-JXpSMuVSfraE",
  authDomain: "testing123-d4f1c.firebaseapp.com",
  databaseURL: "https://testing123-d4f1c.firebaseio.com",
  projectId: "testing123-d4f1c",
  storageBucket: "testing123-d4f1c.appspot.com",
  messagingSenderId: "148218115829",
  appId: "1:148218115829:web:7bf11e48b0aee875f737bc",
  measurementId: "G-2BPCV6RGXS",
}

/* Initialize Firebase */
var fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref()
