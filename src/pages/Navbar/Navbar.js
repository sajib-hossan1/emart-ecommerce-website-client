import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import './Navbar.css'
import { CartContexts } from '../../contexts/CartContext';

const Navbar = () => {
    const {user, logOut, setUser} = useContext(AuthContext);
    const {cartItems} = useContext(CartContexts);
    const [cartCount, setCartCount] = useState(0);

    // get updated cart
    useEffect( () => {
        setCartCount(cartItems ? cartItems.length : 0);
    }, [cartItems])


    // user sign out function
    const signOut = () => {
        logOut()
        .then( () => {
            toast.success("Log Out successfully😉");
            setUser({});
        })
    };

    const navigate = useNavigate();


    const searchResults = (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        if(!query){return};
        navigate(`/search/${query}`)

        e.target.search.value = "";
    };

    return (
        <div id='home' className='sticky-top'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="nav-brand" to="/">EMart</Link>
                    <div>
                        <div className="nav-links">
                            <Link className="nav-link" to="/">HOME</Link>
                            <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping"/> CART<sup className='h5 p-1'>{cartCount}</sup></Link>
                            {
                                user.email ? <Link onClick={signOut} className="nav-link" to="/">LOGOUT</Link>
                                :
                                <Link className="nav-link" to="/login">LOGIN</Link>
                            }
                        </div>
                    </div>
                    <form onSubmit={searchResults} className="d-flex search-form align-items-center">
                        <input className="form-control me-2" type="search" name='search' placeholder="Search" aria-label="Search"/>
                        <button type='submit' className='search-btn'>Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;