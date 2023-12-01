import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIv_aC2dX5uCeyq1z6irOCCRgh2A2srGY",
    authDomain: "amit-bee-clone.firebaseapp.com",
    projectId: "amit-bee-clone",
    storageBucket: "amit-bee-clone.appspot.com",
    messagingSenderId: "503229062584",
    appId: "1:503229062584:web:7d8b6f9c77efb9aff7834d",
    measurementId: "G-9GVHGRECL3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

