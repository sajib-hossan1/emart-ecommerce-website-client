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
        fetch("https://emart-server.vercel.app/browseProducts")
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setLoading(false));
    }, []);
    return (
        <div className='browseProducts-main'>
            <div className="container">
                <h3>Browse Products</h3>
                <div className="container">
                    <div className="row rowShadow">
                        {/* react skleton loading */}
                        { loading &&
                            <div className='container'>
                                <div className="row">
                                    <div className='text-center col-lg-3 col-xl-3 col-lg-4 col-md-6'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center col-lg-3 col-xl-3 col-lg-4 col-md-6'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center col-lg-3 col-xl-3 col-lg-4 col-md-6'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center col-lg-3 col-xl-3 col-lg-4 col-md-6'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center col-lg-3 col-xl-3 col-lg-4 col-md-6'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center col-lg-3 col-xl-3 col-lg-4 col-md-6'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center col-lg-3 col-xl-3 col-lg-4 col-md-6'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                    <div className='text-center col-lg-3 col-xl-3 col-lg-4 col-md-6 mx-auto'>
                                        { loading && <Skeleton height={200} width={250} />}
                                        { loading && <Skeleton className='mt-2' height={20} width={140}/>}
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            data.map(item => 
                                    <div key={item._id} className="col-xl-3 col-lg-4 col-md-6 mx-auto">
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