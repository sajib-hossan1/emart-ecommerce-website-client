import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {title, thumbnail, price, brand, rating, id} = product;
    return (
        <div className="col-lg-3">
            <Link className='product-link' to={`/productDetails/${id}`}>
                <div className="product-box">
                    <div className="product-img">
                        <img src={thumbnail} alt="productImage" />
                    </div>
                    <div className="product-desc">
                        <h5>{title.slice(0,20)}...</h5>
                        <p>Brand : {brand.slice(0,15)}...</p>
                        <div className='d-flex justify-content-between'>
                            <p className='price m-0'>Price : ${price}</p>
                            <p className='rating m-0'>{Math.floor(rating)} <i className="fa-solid fa-star"></i></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;