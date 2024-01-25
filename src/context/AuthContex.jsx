/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
//import statements go above this line

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
