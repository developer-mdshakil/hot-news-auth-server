import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

//create a context here 
export const AuthContext = createContext();

//create auth for authentication here
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    //here store user info 
    const [user ,setUser] = useState(null);

    //declare a function for google signin
    const googleLogin = ( provider ) => {
        return signInWithPopup(auth, provider)
    }

    //declare a function for github signIn here 
     const githubLogin  = (provider) => {
        return signInWithPopup(auth, provider)
     }

     //delcare a function with createUser and signUp here
     const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password)
     }

     //declare a function with loginUser and signIn here
     const loginUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
     }

     //declare a function with logOut and singOut here
     const logOut = () => {
        return signOut(auth)
     }

     //declare a function with verifyEmail and sendEmailVerify
     const verifyEmail = ()=> {
        return sendEmailVerification(auth.currentUser)
     }

     //declare a function with profileUpdate here
     const profileUpdate = profile => {
        return updateProfile(auth.currentUser, profile)
     }
     //hold user information and display by useEffect 
     useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        });
        return ()=> { 
            unsubscribe();
        }
     },[])
     
    //store here share information
    const authInfo = 
    { 
        user,
        googleLogin,
        githubLogin,
        createUser,
        loginUser,
        logOut,
        profileUpdate,
        verifyEmail
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;