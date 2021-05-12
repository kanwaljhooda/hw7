const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAgB6qQrZGXiWYmFOScw9W6Ae686qO_j7U",
authDomain: "intro-to-sd.firebaseapp.com",
projectId: "intro-to-sd",
storageBucket: "intro-to-sd.appspot.com",
messagingSenderId: "728477942010",
appId: "1:728477942010:web:2597f1ef33c03ca66e4943"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase