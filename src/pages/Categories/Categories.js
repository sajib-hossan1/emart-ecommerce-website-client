import React from 'react';
import './Categories.css'
import category1 from '../../assets/categories/1.png'
import category2 from '../../assets/categories/2.png'
import category3 from '../../assets/categories/3.png'
import category4 from '../../assets/categories/4.png'
import category5 from '../../assets/categories/5.png'
import category6 from '../../assets/categories/6.png'

const Categories = () => {
    return (
        <div className='categories-main'>
            <div className="container">
                <h3>Categories</h3>
                <div className="container mt-3">
                    <div className="row">
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <img src={category1} alt="" />
                            <p>Mobiles</p>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <img src={category2} alt="" />
                            <p>Laptops</p>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <img src={category3} alt="" />
                            <p>Home Appliance</p>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <img src={category4} alt="" />
                            <p>Fashion</p>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <img src={category5} alt="" />
                            <p>Baby Item</p>
                        </div>
                        <div className="c-box col-lg-2 col-md-2 col-3">
                            <img src={category6} alt="" />
                            <p>Grocery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;