import React from 'react';
import './Footer.css'
import paymentImg from '../../assets/payment.png'

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                        <div className="footer-about-b">
                            <h5>ABOUT</h5>
                            <div>
                                <p>
                                    <a href="#contact">Contact Us</a>
                                </p>
                                <p>
                                    <a href="#about">About Us</a>
                                </p>
                                <p>
                                    <a href="#careers">Careers</a>
                                </p>
                                <p>
                                    <a href="#martInfo">EMart Information</a>
                                </p>
                                <p>
                                    <a href="#corpoInfo">Corporate Information</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                    <div className="footer-about-b">
                            <h5>HELP</h5>
                            <div>
                                <p>
                                    <a href="#contact">Payments</a>
                                </p>
                                <p>
                                    <a href="#about">Shipping</a>
                                </p>
                                <p>
                                    <a href="#careers">Cancelation & Returns</a>
                                </p>
                                <p>
                                    <a href="#martInfo">FAQ</a>
                                </p>
                                <p>
                                    <a href="#corpoInfo">Report Infrigment</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                        <div className="footer-about-b">
                            <h5>POLICY</h5>
                            <div>
                                <p>
                                    <a href="#contact">Return Policy</a>
                                </p>
                                <p>
                                    <a href="#about">Terms of Use</a>
                                </p>
                                <p>
                                    <a href="#careers">Security</a>
                                </p>
                                <p>
                                    <a href="#martInfo">Privacy</a>
                                </p>
                                <p>
                                    <a href="#corpoInfo">Sitemap</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                        <div className="footer-about-b">
                            <h5>SOCIAL</h5>
                            <div>
                                <p>
                                    <a href="#contact">Facebook</a>
                                </p>
                                <p>
                                    <a href="#about">Twitter</a>
                                </p>
                                <p>
                                    <a href="#careers">YouTube</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment-method">
                    <p>We Accept</p>
                    <img src={paymentImg} alt="paymentMethod" />
                </div>
            </div>
            <hr />
            <p className='copyright'>All Rights Resrved By &copy;EMart | 2023</p>
        </div>
    );
};

export default Footer;