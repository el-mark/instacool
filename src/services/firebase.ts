import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC1JxYq-j8QUK33gWRJ1nFKqE9emAHrxf8",
    appId: "1:1076243886041:web:3df968e613d562d6",
    authDomain: "instacool-11968.firebaseapp.com",
    databaseURL: "https://instacool-11968.firebaseio.com",
    messagingSenderId: "1076243886041",
    projectId: "instacool-11968",
    storageBucket: "instacool-11968.appspot.com",
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const db = firebase.firestore()
  export const storage = firebase.storage()