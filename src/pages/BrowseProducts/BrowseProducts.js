import React, { useEffect, useState } from 'react';
import './BrowseProducts.css'
import { Link } from 'react-router-dom';

// react skleton
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

const BrowseProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch("http://localhost:5000/browseProducts")
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setLoading(false));
    }, []);
    console.log(loading);
    return (
        <div className='browseProducts-main'>
            <div className="container">
                <h3>Browse Products</h3>
                <div className="container">
                    <div className="row">
                        {/* react skleton loading */}
                        { loading &&
                            <div>
                                <div className="d-flex justify-content-around">
                                    <div className='text-center'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around mt-3">
                                    <div className='text-center'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                </div>
                            </div>
                        }

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