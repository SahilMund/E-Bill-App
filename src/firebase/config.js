// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//  importing the services
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW3W7603na1Z6951xz6RoiWNKVjAncTXY",
  authDomain: "e-bill-8ee63.firebaseapp.com",
  projectId: "e-bill-8ee63",
  storageBucket: "e-bill-8ee63.appspot.com",
  messagingSenderId: "166342991493",
  appId: "1:166342991493:web:a4cbd0e17195086a58d3ec"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


//   starting both services i.e. storage and firestore(it is a real time database)
const projectStorage = getStorage(app);
const projectFireStore = getFirestore(app);

// export { projectStorage, projectFireStore, timestamp };

const FIRESTORE_COLLECTION_NAME = 'E-BILL-FILES'
export { projectStorage, projectFireStore , FIRESTORE_COLLECTION_NAME};
