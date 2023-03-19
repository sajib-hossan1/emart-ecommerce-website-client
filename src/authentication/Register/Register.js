import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';
import './Register.css'

const auth = getAuth(app);

const Register = () => {
    const [user, setUser] = useState({});
    const [passError, setPassError] = useState("");

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


    const handleregister = e => {
        e.preventDefault();

        // login validation
        if(!userName){
            setPassError("Type Your Full Name.");
            return;
        };
        if(!userEmail){
            setPassError("Type Your Full Email.");
            return;
        };
        if(!userPass){
            setPassError("Type Your Full Password.");
            return
        };
        setPassError("");

        if(!/(?=.*[A-Z])/.test(userPass)){
            setPassError("Please use atleast one uppercase letter (A-Z)");
            return;
        };
        setPassError("");

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
            .catch(error => error.message);

            setUser(user)

        })
        .catch( error => console.log(error.message) );

        // clear the form
        e.target.reset();
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
                            { passError && <p className='m-0 text-danger'>{passError}</p>}
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