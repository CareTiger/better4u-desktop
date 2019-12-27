import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyCrzPJnfuJN6sRPLtu64fTE1eyu4zSjzk4",
    authDomain: "electron-9dcda.firebaseapp.com",
    databaseURL: "https://electron-9dcda.firebaseio.com",
    projectId: "electron-9dcda",
    storageBucket: "electron-9dcda.appspot.com",
    messagingSenderId: "213269332501",
    appId: "1:213269332501:web:27597db2a77bcb81"
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
export { auth }
const storage = firebase.storage()
export { storage }