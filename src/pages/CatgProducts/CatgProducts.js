import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import DynaTitle from '../../Helmet/DynaTitle';

const CatgProducts = () => {
    const {categ} = useParams();
    const [data, setData] = useState([]);
    const [categTitle, setCategTitle] = useState("");

    useEffect( () => {
        fetch(`http://localhost:5000/category/${categ}`)
        .then(res => res.json())
        .then(data => setData(data));
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
                    {
                        data?.map((product) => <Product key={product._id} product={product} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default CatgProducts;