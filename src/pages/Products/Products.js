import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    // load data from database
    useEffect( () => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    return (
        <div className='products-main'>
            <div className="container">
                <h2 className='p-3 text-center'>All Products For You</h2>
                <div className="row g-4 m-0">
                    {
                        products?.map((product) => <Product key={product.id} product={product} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;