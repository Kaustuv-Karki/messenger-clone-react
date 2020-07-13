import firebase from 'firebase'

const fireBaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCL_fpuJNmeHZuAXlU4eHjRnk6KO7JJSEM",
        authDomain: "messenger-clone-d9fb1.firebaseapp.com",
        databaseURL: "https://messenger-clone-d9fb1.firebaseio.com",
        projectId: "messenger-clone-d9fb1",
        storageBucket: "messenger-clone-d9fb1.appspot.com",
        messagingSenderId: "165532853052",
        appId: "1:165532853052:web:f217b94ecb2dfa26297439",
        measurementId: "G-GVJNBYFFZL"
    }
)

const db = fireBaseApp.firestore()

export default db;