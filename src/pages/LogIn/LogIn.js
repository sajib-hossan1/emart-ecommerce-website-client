import React from 'react';
import './LogIn.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const LogIn = () => {
    const handleGsign = () => {
        signInWithPopup(auth, provider)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch( error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        } )
    }
    return (
        <div className='login-main'>
            <h3>Log In</h3>
            <div className="container">
                <button onClick={handleGsign}>Google SignIn</button>
            </div>
        </div>
    );
};

export default LogIn;