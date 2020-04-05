import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDb6vPEPZA_a1ECqFpM6z5XJpsN9YkbXGY',
  authDomain: 'catch-of-the-day-garrett-a.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-garrett-a.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// This is a default export
export default base
