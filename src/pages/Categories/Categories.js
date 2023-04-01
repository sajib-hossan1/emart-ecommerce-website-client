import React from 'react';
import './Categories.css'
import category1 from '../../assets/categories/1.png'
import category2 from '../../assets/categories/2.png'
import category3 from '../../assets/categories/3.png'
import category4 from '../../assets/categories/4.png'
import category5 from '../../assets/categories/5.png'
import category6 from '../../assets/categories/6.png'
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='categories-main'>
            <div className="container">
                <h3>Categories</h3>
                <div className="container mt-3">
                    <div className="row">
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <Link className='categoryLink' to="/category/smartphones">
                                <img src={category1} alt="" />
                                <p>Smart Phone</p>
                            </Link>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <Link className='categoryLink' to="/category/laptop">
                                <img src={category2} alt="" />
                                <p>Laptop</p>
                            </Link>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <Link className='categoryLink' to="/category/homeappliance">
                                <img src={category3} alt="" />
                                <p>Home Appliance</p>
                            </Link>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <Link className='categoryLink' to="/category/fashion">
                                <img src={category4} alt="" />
                                <p>Fashion</p>
                            </Link>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <Link className='categoryLink' to="/category/motorcycle">
                                <img className='img-fluid' src={category5} alt="" />
                                <p>Motorcycle</p>
                            </Link>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <Link className='categoryLink' to="/category/groceries">
                                <img src={category6} alt="" />
                                <p>Groery</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;