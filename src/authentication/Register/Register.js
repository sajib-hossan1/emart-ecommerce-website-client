import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Register.css'
import { toast } from 'react-toastify';
import DynaTitle from '../../Helmet/DynaTitle'

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const { setUser, createUser, googleSignIn, emailVerification, loading, setLoading} = useContext(AuthContext);

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
    };

    const navigate = useNavigate();


    
    // toastify success messages
    const notify = (status) => {
        if(status === "userCreated"){
            toast.success("User created successfully😍");
        };
        if(status === "googleSignIn"){
            toast.success("Successfully SignIn with Google😍");
        };
        if(status === "emailVerify"){
            toast.info("Please check your email and verify😉");
        };
    };


    
    // user email verification
    const verifyEmail = () => {
        emailVerification()
        .then( () => {
            // email verification send.
            notify("emailVerify");
        })
    };


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
            return;
        };
        if(userPass.length < 6){
            setErrorMessage("Password should be atleaset 6 characters.");
            return;
        };
        setErrorMessage("");

        // regular expression authentication
        if(!/(?=.*[A-Z])/.test(userPass)){
            setErrorMessage("Please use atleast one uppercase letter (A-Z)");
            return;
        };
        setErrorMessage("");

        // login authentication
        createUser(userEmail,userPass)
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
            verifyEmail();

            // set user
            setUser(user);
            notify("userCreated");
            setLoading(false);
            navigate("/");
        })
        .catch( error => {
            setLoading(false);
            if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                return setErrorMessage("Already have an account with this e-mail. Please Login.");
            };
        } );

        // clear the form
        e.target.reset();
    };


    
    // google signin authentication
    const googleSignInFunc = () => {
        googleSignIn()
        .then( result => {
            const user = result.user;
            setUser(user);
            setLoading(false);
            notify("googleSignIn");
            navigate("/");
        })
        .catch( error => {
            const errorMessage = error.message;
            return setErrorMessage(errorMessage);
        } );
        
    };

    return (
        <div className='register-main mb-5'>
            <DynaTitle title="Register" />
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
                            { loading && <div className='mt-3'>
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                            }
                            { errorMessage && <p className='m-0 text-danger'>{errorMessage}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-2 mb-2">Submit</button>
                    </form>
                    <p>Already haven an account? Please <Link to="/login">Log In Here</Link></p>
                    <hr />
                    <div className='text-center'>
                        <button onClick={googleSignInFunc} className="btn btn-primary">Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;