import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCbIoWvjelYfmCrLMhsBjkpusGj7y_CI4c",
  authDomain: "react-dragon-nesw-auth.firebaseapp.com",
  projectId: "react-dragon-nesw-auth",
  storageBucket: "react-dragon-nesw-auth.appspot.com",
  messagingSenderId: "59232405683",
  appId: "1:59232405683:web:e4395144b4a2639b9b48c6"
};

const app = initializeApp(firebaseConfig);
export default app;