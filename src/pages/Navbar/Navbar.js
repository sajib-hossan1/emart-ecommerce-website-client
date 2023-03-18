import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#nav">EMart</a>
                        <form className="d-flex mx-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    <div>
                        <div className="nav-links">
                            <a className="nav-link" href="#home">Home</a>
                            <a className="nav-link" href="#products">Products</a>
                            <a className="nav-link" href="#products"><i className="fa-solid fa-cart-shopping"/> Cart</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;