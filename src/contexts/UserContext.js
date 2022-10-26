import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  //1. create account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //2. update profile name
  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  //3. email verify
  const emaiVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };
  //4. google sign up
  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = { user, createUser, updateName, emaiVerify, googleSignUp };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
