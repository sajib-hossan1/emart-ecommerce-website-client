import React, { useEffect, useState } from 'react';
import './TopSale.css'
import { Link } from 'react-router-dom';

// react skleton
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

const TopSale = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch("http://localhost:5000/topSale")
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setLoading(false));
    }, []);
    return (
        <div className='top-sale-main'>
            <div className="container">
                <h3><span>Top Sale</span> : This Week!</h3>

                <div className="container">
                    <div className="row">
                        {/* react skleton loading */}
                        <div className="d-flex justify-content-around">
                            <div className='text-center'>
                                { loading && <Skeleton height={180} width={290}/>}
                                { loading && <Skeleton height={20} width={100}/>}
                            </div>
                            <div className='text-center'>
                                { loading && <Skeleton height={180} width={290}/>}
                                { loading && <Skeleton height={20} width={100}/>}
                            </div>
                            <div className='text-center'>
                                { loading && <Skeleton height={180} width={290}/>}
                                { loading && <Skeleton height={20} width={100}/>}
                            </div>
                        </div>
                        {
                            data.map(item =>
                                <div key={item._id} className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <Link style={{textDecoration : "none"}} to={`/productDetails/${item.id}`}>
                                        <div className="t-sale-box">
                                            <img className='img-fluid' src={item.thumbnail} alt="hot-sale-product" />
                                            <p>{item.title.slice(0,14)}</p>
                                        </div>
                                    </Link>
                                </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSale;