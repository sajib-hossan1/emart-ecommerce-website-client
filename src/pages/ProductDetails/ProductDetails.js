import React, { useEffect, useState } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState({});

    const {title, thumbnail, brand, rating, stock, price, description} = data;

    useEffect( () => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    return (
        <div className='prod-details-main pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={thumbnail} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <div className="prod-details">
                            <h2>{title}</h2>
                            <p>Brand : {brand}</p>
                            <span><i className="fa-solid fa-star"></i> {rating} | {stock} Stocks Left</span>
                            <h5>Price : ${price}</h5>
                            <p>
                                Quantity : <button className="btn btn-danger">-</button> 0 <button className="btn btn-success">+</button>
                            </p>
                            <button className="btn btn-primary">Add To Cart</button>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;