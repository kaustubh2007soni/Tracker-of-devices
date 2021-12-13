import firebase from 'firebase';


var firebaseConfig = {
apiKey: "AIzaSyAyc16BzWVweyr16OBSHLZbjzq4Ywy1xSI",
  authDomain: "family-something.firebaseapp.com",
  projectId: "family-something",
  storageBucket: "family-something.appspot.com",
  messagingSenderId: "822526873436",
  appId: "1:822526873436:web:112f792835ccc9c91dfb99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
