import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2tdhAwcbhFY6uM8NnkK13BWwZObApWhs",
    authDomain: "snapchat-clone-d37aa.firebaseapp.com",
    projectId: "snapchat-clone-d37aa",
    storageBucket: "snapchat-clone-d37aa.appspot.com",
    messagingSenderId: "58558489119",
    appId: "1:58558489119:web:84a61461d786b1c133ab2a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
   
  const auth = firebase.auth();

  const storage = firebase.storage();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };