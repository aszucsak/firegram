  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkdwTjE9itlsvOL3E0O64yBFkNawBqPfw",
    authDomain: "ninja-firegram-cff70.firebaseapp.com",
    databaseURL: "https://ninja-firegram-cff70.firebaseio.com",
    projectId: "ninja-firegram-cff70",
    storageBucket: "ninja-firegram-cff70.appspot.com",
    messagingSenderId: "582360945377",
    appId: "1:582360945377:web:f8b924fb3918fda8545da0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectStorage, timestamp};