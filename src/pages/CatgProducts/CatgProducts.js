import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import DynaTitle from '../../Helmet/DynaTitle';

// react skleton
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';
import { useScrollTop } from '../../hooks/useScrollTop';

const CatgProducts = () => {
    useScrollTop();
    const {categ} = useParams();
    const [data, setData] = useState([]);
    const [categTitle, setCategTitle] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch(`https://emart-server.vercel.app/category/${categ}`)
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setLoading(false));
    }, []);

    const bgStyle = {
        backgroundColor: "aliceblue"
    };

    useEffect( () => {
        if(categ === "smartphones"){
            return setCategTitle("Smart Phones");
        };
        if(categ === "laptop"){
            return setCategTitle("Laptops");
        };
        if(categ === "homeappliance"){
            return setCategTitle("Home Appliance");
        };
        if(categ === "fashion"){
            return setCategTitle("Fashion");
        };
        if(categ === "motorcycle"){
            return setCategTitle("Motorcycle");
        };
        if(categ === "groceries"){
            return setCategTitle("Grocery");
        };
    }, [categTitle])
    return (
        <div className='catg-main pt-4 pb-5' style={bgStyle}>
            <DynaTitle title={categTitle}/>
            <div className="container">
                <h5>Category - {categTitle}</h5>
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
                        data?.map((product) => <Product key={product._id} product={product} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default CatgProducts;