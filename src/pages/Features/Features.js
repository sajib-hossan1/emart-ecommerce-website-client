import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <div className='features-main container'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box">
                            <i className="fa-solid fa-truck"></i>
                            <h4>Fastest Devlivary</h4>
                        </div>
                        <div className="feature-box">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                            <h4>Cash On Devlivary</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box h-75">
                            <i className="fa-solid fa-house me-3"></i>
                            <h4>Premimum Collection</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-box">
                            <i class="fa-sharp fa-solid fa-right-left"></i>
                            <h4>7 Days Replacement</h4>
                        </div>
                        <div className="feature-box">
                            <i className="fa-solid fa-tag"></i>
                            <h4>Daily Discount</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;