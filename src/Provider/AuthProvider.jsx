import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const authData = {
    user,
    setUser,
    createUser,
  };

  return <AuthContext value={authData}>{children} </AuthContext>;
};

export default AuthProvider;
