import React from 'react';
import './BrowseProducts.css'
import product1 from '../../assets/products/1.jpg'
import product2 from '../../assets/products/2.jpg'
import product3 from '../../assets/products/3.jpg'
import product4 from '../../assets/products/4.jpg'
import product5 from '../../assets/products/5.jpg'
import product6 from '../../assets/products/6.jpg'
import product7 from '../../assets/products/7.jpg'
import product8 from '../../assets/products/8.jpg'

const BrowseProducts = () => {
    return (
        <div className='browseProducts-main'>
            <div className="container">
                <h3>Browse Products</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                            <div className="p-min-box">
                                <img className="img-fluid" src={product1} alt="productPhoto" />
                                <p>Ipone 14 Pro Max</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                            <div className="p-min-box">
                                <img className="img-fluid" src={product2} alt="productPhoto" />
                                <p>Jordan Sneakers</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                            <div className="p-min-box">
                                <img className="img-fluid" src={product3} alt="productPhoto" />
                                <p>Artiotic T-Shirt</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                            <div className="p-min-box">
                                <img className="img-fluid" src={product4} alt="productPhoto" />
                                <p>Ladies T-Shirt</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                            <div className="p-min-box">
                                <img className="img-fluid" src={product5} alt="productPhoto" />
                                <p>256Gb SSD- Sundisk</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                            <div className="p-min-box">
                                <img className="img-fluid" src={product6} alt="productPhoto" />
                                <p>32" Samsung Monitor</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                            <div className="p-min-box">
                                <img className="img-fluid" src={product7} alt="productPhoto" />
                                <p>Men's Jacket</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                            <div className="p-min-box">
                                <img className="img-fluid" src={product8} alt="productPhoto" />
                                <p>Diomond Ring</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='btn-div'>
                    <button>See All Products</button>
                </div>            
            </div>
        </div>
    );
};

export default BrowseProducts;