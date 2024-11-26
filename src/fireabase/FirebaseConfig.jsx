// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoJvalILWn6esetahpL9BGRT__B5azWvI",
  authDomain: "myfirstapp-38751.firebaseapp.com",
  projectId: "myfirstapp-38751",
  storageBucket: "myfirstapp-38751.appspot.com",
  messagingSenderId: "273202707457",
  appId: "1:273202707457:web:5724f212508b5b82f31400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBsPrkYC-KuH-m725cKosMHMG7PehJm3zU",
//   authDomain: "myfirstapp-273f4.firebaseapp.com",
//   projectId: "myfirstapp-273f4",
//   storageBucket: "myfirstapp-273f4.appspot.com",  // Corrected URL
//   messagingSenderId: "571336985483",
//   appId: "1:571336985483:web:1d3bd761712ec6ddbfbd8e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export { fireDB, auth };
