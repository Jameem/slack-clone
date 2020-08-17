import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDms0tKHBEdv43ewfj7MsEvHxychrTTHvg",
  authDomain: "slack-clone-f421e.firebaseapp.com",
  databaseURL: "https://slack-clone-f421e.firebaseio.com",
  projectId: "slack-clone-f421e",
  storageBucket: "slack-clone-f421e.appspot.com",
  messagingSenderId: "227668833600",
  appId: "1:227668833600:web:84817081e482ef371d36a5",
  measurementId: "G-VNLLW0YKRP",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

export default db
