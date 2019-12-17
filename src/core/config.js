// Replace with your own firebase config!
import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCKJ52CyiJPq2MGy5fvIUA645PR-wcb6lA",
    authDomain: "koleto-c0787.firebaseapp.com",
    databaseURL: "https://koleto-c0787.firebaseio.com",
    projectId: "koleto-c0787",
    storageBucket: "koleto-c0787.appspot.com",
    messagingSenderId: "899040256647",
    appId: "1:899040256647:web:2348685d98ac167f"
  };

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})

export default Firebase