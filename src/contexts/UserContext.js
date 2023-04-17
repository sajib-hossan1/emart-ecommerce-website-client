import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // google provider
    const provider = new GoogleAuthProvider();

    // existing user login
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    // user forget password
    const forgetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // new user registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // google sign in 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // user email verification
    const emailVerification = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    };

    // logout existing user
    const logOut = () => {
        return signOut(auth);
    }

    // gettig a signed in user
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                setLoading(false);
            }
            else{
                // user signed out
                setLoading(false);
            };
        });
        return () => {
            unsubscribe();
        }
    },[]);


    const AuthUser = {user, setUser, loginUser, forgetPassword, googleSignIn, createUser, emailVerification, logOut, loading, setLoading};

    return (
        <AuthContext.Provider value={AuthUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;