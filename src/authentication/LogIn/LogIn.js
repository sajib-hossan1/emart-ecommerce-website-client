import React, { useState } from 'react';
import './LogIn.css'
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);


const LogIn = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMesage] = useState("");

    // user info states
    const [userEmail, setNewUserEmail] = useState("");
    const [userPass, setNewUserPass] = useState("");


    // get and set user info
    const handleEmail = (e) => {
        setNewUserEmail(e.target.value)
    };
    const handlePass = (e) => {
        setNewUserPass(e.target.value)
    };


    // google provider for google authentication
    const provider = new GoogleAuthProvider();


    // user login authentication
    const handleLogin = e => {
        e.preventDefault();

        // login validation
        if(!userEmail){
            setErrorMessage("Type Your Email.");
            return;
        };
        if(!userPass){
            setErrorMessage("Type Your Password.");
            return;
        };
        setErrorMessage("");

        // user login authentication
        signInWithEmailAndPassword(auth,userEmail, userPass)
        .then( userCredential => {
            const user = userCredential.user;
            setUser(user);
        })
        .catch( error => {
            const errorMessage = error.message;
            if(errorMessage === "Firebase: Error (auth/user-not-found)."){
                setErrorMessage("User Not Found.");
            }
        });

        setErrorMessage("");

        // clear the form
        e.target.reset();
    };

    // forget password
    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth,userEmail)
        .then( () => {
            setSuccessMesage("Please check your email for forget password");
            setErrorMessage("");
        })
        .catch( error => {
            if(error.message === "Firebase: Error (auth/missing-email)."){
                setErrorMessage("Please provide email to forget password.")
            };
            
            if(error.message === "Firebase: Error (auth/user-not-found)."){
                setErrorMessage("User not found with this email.")
            };
        });
        setErrorMessage("");
    };

    // google signin authentication
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
        .then( result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch( error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        } );
    };

    return (
        <div className='login-main mb-5'>
            <h1>Log In</h1>
            <div className="container">
                <div className="login-box">
                    <form className='mb-3 ' onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" name="email" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input onBlur={handlePass} type="password" name="password" className="form-control" placeholder="Password"/>
                            <p onClick={handleForgetPassword} className='btn btn-link'>Forget Password?</p>
                            { errorMessage && <p className='m-0 text-danger'>{errorMessage}</p>}
                            { successMessage && <p className='m-0 text-danger'>{successMessage}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-2 mb-2">Submit</button>
                    </form>
                    <p>Havent't any account? Please <Link to="/register">Register Here</Link></p>
                    <hr />
                    <div className='text-center'>
                        <button onClick={googleSignIn} className="btn btn-primary">Google Sign In</button>
                    </div>
                </div>


                {/* { user.email ? <></> : <button onClick={handleGsign}>Google SignIn</button>}
                {
                    user.email && <div>
                            <h3>Logged In User : {user.displayName} </h3>
                            <p>Email : {user.email}</p>
                            <img className='rounded rounded-5' src={user.photoURL} alt="" />
                    </div>
                }
                { user.email && <button onClick={handleSignOut}>Sign Out</button>} */}
            </div>
        </div>
    );
};

export default LogIn;