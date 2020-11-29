import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCDnP6FFlS40Fnqp9O3lnZFdzknvJBarhE",
        authDomain: "starwisp-project.firebaseapp.com",
        databaseURL: "https://starwisp-project.firebaseio.com",
        projectId: "starwisp-project",
        storageBucket: "starwisp-project.appspot.com",
        messagingSenderId: "806682648364",
        appId: "1:806682648364:web:f01da15384b7584a6b1689",
        measurementId: "G-WSVS1BYRDN"
     
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
