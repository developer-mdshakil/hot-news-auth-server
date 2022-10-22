import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
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
    const authInfo = { user, googleLogin, githubLogin}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;