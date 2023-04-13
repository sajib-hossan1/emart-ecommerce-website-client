import React, { useEffect, useState } from 'react';
import { useScrollTop } from '../../hooks/useScrollTop';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import Skeleton from 'react-loading-skeleton';
import './SearchProducts.css'
// react skleton
import 'react-loading-skeleton/dist/skeleton.css'

const SearchProducts = () => {
    useScrollTop();
    const key = useParams();
    const searchKey = key.key.toLowerCase();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // load data from database
    useEffect( () => {
        fetch("https://emart-server.vercel.app/products")
        .then(res => res.json())
        .then(data => {
            const filter = data?.filter(item => item.title.toLowerCase().includes(searchKey));
            setProducts(filter);
        })
        .finally(() => setLoading(false));

        
    }, [searchKey]);

    

    return (
        <div className='Serc-products-main'>
            <div className="container">
                <div className="prod-not-found">
                    { products.length === 0 && !loading ? <h3>Products not found. Try another name.</h3> : <h2>Search results</h2>}
                </div>
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

export default SearchProducts;