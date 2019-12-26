import { initializeApp } from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = initializeApp({
  apiKey: "AIzaSyACjTtsg4UG8X0HtLMYvqyi_deB-8RyzdM",
  authDomain: "better4u-d7afb.firebaseapp.com",
  databaseURL: "https://better4u-d7afb.firebaseio.com",
  projectId: "better4u-d7afb",
  storageBucket: "",
  messagingSenderId: "1086173392633",
  appId: "1:1086173392633:web:028eb8a3fd49f23d"
})

app.firestore().enablePersistence()
  .catch(function (err) {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  })

export const auth = app.auth()
//export const rtdb = app.database()
export const db = app.firestore()