import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 /* eslint-disable */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAltEb6_AISPtQcBnlKz-ArQSjNZsImnrw",
  authDomain: "apoioconsult-15a41.firebaseapp.com",
  projectId: "apoioconsult-15a41",
  storageBucket: "apoioconsult-15a41.appspot.com",
  messagingSenderId: "1092455537369",
  appId: "1:1092455537369:web:554821edef1a55bf173cc8",
  measurementId: "G-S83ZFK4ZRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
