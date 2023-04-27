import React from 'react';
import './NotFound.css'
import DynaTitle from '../../Helmet/DynaTitle';
import { useScrollTop } from '../../hooks/useScrollTop';
import { Link } from 'react-router-dom';

const NotFound = () => {
    useScrollTop();
    return (
        <div className='container'>
            <DynaTitle title="Not Found" />
            <div className="not-found-box">
                <div>
                    <h1>404</h1>
                    <p>an error occured in this page...</p>
                    <Link className='go-home-btn' to="/">Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;