import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="nav-brand" href="#nav">EMart</a>
                    <div>
                        <div className="nav-links">
                            <a className="nav-link" href="#home">HOME</a>
                            <a className="nav-link" href="#products">PRODUCTS</a>
                            <a className="nav-link" href="#products"><i className="fa-solid fa-cart-shopping"/> CART</a>
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