/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";
import { auth } from "../firebase";
//import { auth } from "../firebase";

const AuthContext = createContext ();

export function AuthContextProvider({children}){

    const [user, setUser] = useState({});

    //we need to sign up the user
    function signUp(email, password){

        return createUserWithEmailAndPassword(auth,email,password)
    }
    //this is the signout method
    function logOut(){
        return signOut(auth);
    }
    //this is the login method used to sign in the user
    function logIn(email, password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    //check for changes in state.

   
  

    return (
        <AuthContext.Provider value={{signUp, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}