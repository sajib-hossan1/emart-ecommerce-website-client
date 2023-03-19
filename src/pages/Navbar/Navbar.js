import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const user = false;
    return (
        <div id='home' className='sticky-top'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="nav-brand" to="/">EMart</Link>
                    <div>
                        <div className="nav-links">
                            <Link className="nav-link" to="/">HOME</Link>
                            {
                                user ? <Link className="nav-link" to="/products">PRODUCTS</Link>
                                :
                                <Link className="nav-link" to="/login">LOGIN</Link>
                            }
                            <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping"/> CART</Link>
                        </div>
                    </div>
                    <form className="d-flex search-form" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;