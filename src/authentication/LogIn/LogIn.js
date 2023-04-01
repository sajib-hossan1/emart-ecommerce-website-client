import React, { useContext, useState } from 'react';
import './LogIn.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify';
import DynaTitle from '../../Helmet/DynaTitle';


const LogIn = () => {
    const [errorMessage, setErrorMessage] = useState("");

    // states for modals
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // getting from context api
    const {loginUser, setUser, forgetPassword, googleSignIn, emailVerification, loading, setLoading} = useContext(AuthContext);

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

    const navigate = useNavigate();

    // toastify success messages
    const notify = (status) => {
        if(status === "loggedIn"){
            toast.success("You are successfully logged in😍");
        };
        if(status === "forgetPass"){
            toast.info("Please check your email for forget password😉");
        };
        if(status === "googleSignIn"){
            return toast.success("Successfully SignIn with Google😍");
        };
        if(status === "emailVerify"){
            toast.info("Please check your email and verify then login again😉");
        };
    };


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
        if(userPass.length < 6){
            setErrorMessage("Please provide atleast 6 characters.");
            return;
        };
        if(!/(?=.*[A-Z])/.test(userPass)){
            setErrorMessage("Please provide one uppercase (A-Z)");
            return;
        };
        setErrorMessage("");

        // user login authentication
        loginUser(userEmail, userPass)
        .then( userCredential => {
            const user = userCredential.user;
            setLoading(false);
            setUser(user);
            notify("loggedIn");
            navigate("/");
        })
        .catch( error => {
            setLoading(false);
            const errorMessage = error.message;
            console.log(errorMessage);
            if(errorMessage === "Firebase: Error (auth/user-not-found)."){
                return setErrorMessage("User Not Found.");
            };
            if(errorMessage === "Firebase: Error (auth/wrong-password)."){
                return setErrorMessage("Your E-mail or Password is wrong.");
            };
            if(errorMessage === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."){
                return setErrorMessage("You attempts too many times. Please restore your password.");
            };
        });

        setErrorMessage("");

        // clear the form
        e.target.reset();
    };

    // forget password
    const handleForgetPassword = () => {
        if(!userEmail){
             return setErrorMessage("Please provide your e-mail to forget password.");
        };
        forgetPassword(userEmail)
        .then( () => {
            notify("forgetPass");
            setLoading(false);
            setErrorMessage("");
        })
        .catch( error => {
            setLoading(false);
            if(error.message === "Firebase: Error (auth/missing-email)."){
                return setErrorMessage("Please provide email to forget password.")
            };
            
            if(error.message === "Firebase: Error (auth/user-not-found)."){
                return setErrorMessage("User not found with this email.")
            };
        });
        setErrorMessage("");
    };

    // google signin authentication
    const googleSignInFunc = () => {
        googleSignIn()
        .then( result => {
            const user = result.user;
            setUser(user);
            notify("googleSignIn");
            setLoading(false);
            navigate("/");
        })
        .catch( error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        } );
    };

    const verifyEmail = () => {
        if(!userEmail){
            return setErrorMessage("Type your valid e-mail.");
        }
        emailVerification()
        .then( () => {
            // email verification send.
            notify("emailVerify");
            setLoading(false);
            setErrorMessage("")
            setOpen(false);
            navigate("/");
        });
        
    };

    console.log(loading);

    return (
        <div className='login-main mb-5'>
            <DynaTitle title="LogIn"/>
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
                            { loading && <div className='mt-3'>
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                            }
                            <p onClick={handleForgetPassword} className='btn btn-link'>Forget Password?</p>
                            { errorMessage && <p className='m-0 text-danger'>{errorMessage}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-2 mb-2">Submit</button>
                    </form>
                    <p>Havent't any account? Please <Link to="/register">Register Here</Link></p>
                    <hr />
                    <div className="text-center">
                        <button onClick={onOpenModal} className='btn btn-primary btn-sm'>E-mail Verification</button>
                    </div>
                    <hr />
                    <div className='text-center'>
                        <button onClick={googleSignInFunc} className="btn btn-primary">Google Sign In</button>
                    </div>
                </div>


                {/* modal for email verification */}
                <Modal open={open} onClose={onCloseModal} center>
                    <h3 className='me-5'>E-mail verification</h3>
                    <form className='mb-3 ' onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" name="email" placeholder="Enter email"/>
                        </div>
                        { errorMessage && <p className='m-0 text-danger'>{errorMessage}</p>}
                        { loading && <div className='mt-3'>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                        }
                        <button onClick={verifyEmail} type="submit" className="btn btn-primary mt-2 mb-2">Submit</button>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default LogIn;