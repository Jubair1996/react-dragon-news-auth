import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () =>{
    setLoading(true)
    return signOut(auth);
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        // console.log("on auth state change", currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe();
    }
  },[])

  const authInfo = { user, createUser, signIn,logOut,loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node
};
export default AuthProvider;
