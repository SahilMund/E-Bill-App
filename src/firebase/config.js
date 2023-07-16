import { initializeApp } from "firebase/app";

//  importing the services
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIRESTORE_COLLECTION_NAME
} = process.env;



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//   starting both services i.e. storage and firestore(it is a real time database)
const projectStorage = getStorage(app);
const projectFireStore = getFirestore(app);


export { projectStorage, projectFireStore, REACT_APP_FIRESTORE_COLLECTION_NAME as FIRESTORE_COLLECTION_NAME};
