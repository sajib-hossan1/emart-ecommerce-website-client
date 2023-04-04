import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
import ReactStars from "react-rating-stars-component";

const Product = ({product}) => {
    const {title, thumbnail, price, brand, rating, id} = product;
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
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
                            <p className='rating m-0'>
                                <ReactStars
                                    count={5}
                                    value={rating}
                                    edit={false}
                                    size={20}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                    />
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;