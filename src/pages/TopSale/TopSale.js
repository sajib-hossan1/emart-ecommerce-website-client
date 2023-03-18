import React from 'react';
import './TopSale.css'
import product1 from '../../assets/topSale/1.jpg'
import product2 from '../../assets/topSale/2.jpg'
import product3 from '../../assets/topSale/3.jpg'

const TopSale = () => {
    return (
        <div className='top-sale-main'>
            <div className="container">
                <h3><span>Top Sale</span> : This Week!</h3>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="t-sale-box">
                                <img src={product1} alt="hot-sale-product" />
                                <p>Iphone 14Pro MAx</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="t-sale-box">
                                <img src={product2} alt="hot-sale-product" />
                                <p>Jordan Sneakers</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4 mx-auto">
                            <div className="t-sale-box">
                                <img src={product3} alt="hot-sale-product" />
                                <p>Artiotic T-Shirt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSale;