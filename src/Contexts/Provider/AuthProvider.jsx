import React, { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const emailRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo);
  };

  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  const deleteAccount = () => {
    return deleteUser(auth.currentUser);
  };

  const authInfo = {
    loading,
    setLoading,
    user,
    emailRegistration,
    updateUser,
    emailLogin,
    googleLogin,
    logOutUser,
    deleteAccount,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
