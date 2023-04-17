import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

// react skleton
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';
import { useScrollTop } from '../../hooks/useScrollTop';

const Products = () => {
    useScrollTop();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // load data from database
    useEffect( () => {
        fetch("https://emart-server.vercel.app/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .finally(() => setLoading(false));
    }, []);
    
    return (
        <div className='products-main'>
            <div className="container">
                <h2 className='p-3 text-center'>All Products For You</h2>
                <div className="row g-4 m-0">
                    {/* react skleton loading */}
                    { loading &&
                        <div className='container'>
                            <div className="row g-4">
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    { loading && <Skeleton height={160} />}
                                    { loading && <Skeleton height={20} width={190}/>}
                                    { loading && <Skeleton height={20} width={140}/>}
                                    <div className='d-flex justify-content-between'>
                                        { loading && <Skeleton height={20} width={100} />}
                                        { loading && <Skeleton height={20} width={100}/>}
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    { loading && <Skeleton height={160} />}
                                    { loading && <Skeleton height={20} width={190}/>}
                                    { loading && <Skeleton height={20} width={140}/>}
                                    <div className='d-flex justify-content-between'>
                                        { loading && <Skeleton height={20} width={100} />}
                                        { loading && <Skeleton height={20} width={100}/>}
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    { loading && <Skeleton height={160} />}
                                    { loading && <Skeleton height={20} width={190}/>}
                                    { loading && <Skeleton height={20} width={140}/>}
                                    <div className='d-flex justify-content-between'>
                                        { loading && <Skeleton height={20} width={100} />}
                                        { loading && <Skeleton height={20} width={100}/>}
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6 mx-auto'>
                                    { loading && <Skeleton height={160} />}
                                    { loading && <Skeleton height={20} width={190}/>}
                                    { loading && <Skeleton height={20} width={140}/>}
                                    <div className='d-flex justify-content-between'>
                                        { loading && <Skeleton height={20} width={100} />}
                                        { loading && <Skeleton height={20} width={100}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        products?.map((product) => <Product key={product.id} product={product} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;