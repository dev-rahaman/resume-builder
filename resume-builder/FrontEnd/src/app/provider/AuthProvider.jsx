import { createContext, useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext(null);
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleSignIn,
    updateUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
