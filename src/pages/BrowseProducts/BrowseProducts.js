import React, { useEffect, useState } from 'react';
import './BrowseProducts.css'
import { Link } from 'react-router-dom';

const BrowseProducts = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/browseProducts")
        .then(res => res.json())
        .then(data => setData(data));
    }, []);
    return (
        <div className='browseProducts-main'>
            <div className="container">
                <h3>Browse Products</h3>
                <div className="container">
                    <div className="row">
                        {
                            data.map(item => 
                                    <div key={item._id} className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
                                        <Link style={{textDecoration : "none", color : "black"}} to={`/productDetails/${item.id}`} >
                                            <div className="p-min-box">
                                                <img className="img-fluid" src={item.thumbnail} alt="productPhoto" />
                                                <p>{item.title.slice(0,14)}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className='btn-div'>
                    <Link to="products" className='all-products-btn'>
                        <button>See All Products</button>
                    </Link>
                </div>            
            </div>
        </div>
    );
};

export default BrowseProducts;