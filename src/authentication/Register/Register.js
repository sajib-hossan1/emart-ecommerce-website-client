import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';
import './Register.css'

const auth = getAuth(app);

const Register = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMesage] = useState("");

    // google provider for authentication
    const provider = new GoogleAuthProvider();


    // user info states
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");

    // get and set user info
    const handleName = (e) => {
        setUserName(e.target.value);
    };
    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    };
    const handlePass = (e) => {
        setUserPass(e.target.value);
    }


    const handleregister = (e) => {
        e.preventDefault();

        // login validation
        if(!userName){
            setErrorMessage("Type Your Full Name.");
            return;
        };
        if(!userEmail){
            setErrorMessage("Type Your Full Email.");
            return;
        };
        if(!userPass){
            setErrorMessage("Type Your Full Password.");
            return
        };
        if(userPass.length < 6){
            setErrorMessage("Password should be atleaset 6 characters.");
            return
        };
        setErrorMessage("");

        // regular expression authentication
        if(!/(?=.*[A-Z])/.test(userPass)){
            setErrorMessage("Please use atleast one uppercase letter (A-Z)");
            return;
        };
        setErrorMessage("");

        // login authentication
        createUserWithEmailAndPassword(auth,userEmail,userPass)
        .then( (userCredential) => {
            const user = userCredential.user;

            // setting user name with updateProfile
            updateProfile(user, {
                displayName : userName,
                photoURL : ""
            })
            .then( () => "")
            .catch(error => setErrorMessage(error.message));

            // verify user email
            emailVerification();

            // set user
            setUser(user)
        })
        .catch( error => setErrorMessage(error.message) );

        // clear the form
        e.target.reset();
    };


    // user email verification
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
        .then( () => {
            // email verification send.
            setSuccessMesage("Please check your email and verify.")
        })
    };

    
    // google signin authentication
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
        .then( result => {
            const user = result.user;
            setUser(user);
        })
        .catch( error => {
            const errorMessage = error.message;
        } );
    };

    return (
        <div className='register-main mb-5'>
            <h1>Register</h1>
            <div className="container">
                <div className="register-box">
                    <form className='mb-3' onSubmit={handleregister}>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input onBlur={handleName} name="name" type="text" className="form-control" placeholder="Enter Full Name"/>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input onBlur={handleEmail} name="email" type="email" className="form-control" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input onBlur={handlePass} type="password" name="password" className="form-control" placeholder="Password"/>
                            { errorMessage && <p className='m-0 text-danger'>{errorMessage}</p>}
                            { successMessage && <p className='m-0 text-danger'>{successMessage}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-2 mb-2">Submit</button>
                    </form>
                    <p>Already haven an account? Please <Link to="/login">Log In Here</Link></p>
                    <hr />
                    <div className='text-center'>
                        <button onClick={googleSignIn} className="btn btn-primary">Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;