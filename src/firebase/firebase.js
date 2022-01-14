import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCODqNP2wJieN84oEuuVQ6tOBbUjvcOz9M",
  authDomain: "crwn-db-49bba.firebaseapp.com",
  projectId: "crwn-db-49bba",
  storageBucket: "crwn-db-49bba.appspot.com",
  messagingSenderId: "522917693844",
  appId: "1:522917693844:web:90ec57aec2b26b720e2781"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try{
    auth.signInWithPopup(provider);
  } catch(error) {
    console.log(error);
  }
}

export const createDocument = async (userAuth, ...extraUserInfo) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdDate = new Date();

    await userRef.set({
      displayName,
      email,
      createdDate
    })
  }

  return userRef;
}


export {firebase};