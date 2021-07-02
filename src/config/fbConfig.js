import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC2sAPE6swmNIV_lwhCh87SrNl2GkCuk1M",
    authDomain: "eliot-plan-b2ebf.firebaseapp.com",
    projectId: "eliot-plan-b2ebf",
    storageBucket: "eliot-plan-b2ebf.appspot.com",
    messagingSenderId: "670635243723",
    appId: "1:670635243723:web:7cf2499c81ceee0efa434e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firenase.firestore().settings({timestampsInSnapshots: true})

  export default firebase