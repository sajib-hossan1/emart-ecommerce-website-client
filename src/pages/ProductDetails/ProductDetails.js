import React, { useEffect, useState } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import ReactStars from "react-rating-stars-component";

// Import Swiper React components for swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules for swiper
import { FreeMode, Navigation, Thumbs } from "swiper";

// react skleton
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';
import { useScrollTop } from '../../hooks/useScrollTop';

const ProductDetails = () => {
    useScrollTop();
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [data, setData] = useState({});
    const {title, brand , rating, stock, price, description ,images} = data;
    const [quantity, setquantity] = useState(0);

    useEffect( () => {
        setLoading(true)
        fetch(`https://emart-server.vercel.app/product/${id}`)
        .then(res =>  res.json())
        .then(data => setData(data))
        .finally(() => setLoading(false))
    }, []);

    
    const rimProps =  {
        isHintEnabled: true,
        shouldHideHintAfterFirstActivation: false,
        enlargedImagePosition: 'over'
    };

    const increaseQuan = () => {
        if(quantity === stock){
            return;
        };
        setquantity(quantity + 1 );
    };
    const decreaseQuan = () => {
        if(quantity === 0){
            return;
        };
        setquantity(quantity - 1 );
    };

    return (
        <div className='prod-details-main pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        { loading ? <Skeleton height={360} /> :
                            <div className="prodDetails-slider-main">
                                <Swiper
                                    style={{
                                    "--swiper-navigation-color": "#F85506",
                                    "--swiper-pagination-color": "#F85506",
                                    }}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                    // thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                    >
                                    {
                                        images?.map((elem, index) => {
                                            return (<>
                                                
                                                <SwiperSlide key={index}>
                                                <ReactImageMagnify
                                                        {...{
                                                            smallImage: {
                                                                alt: title,
                                                                isFluidWidth: true,
                                                                src: elem,
                                                                srcSet: elem,
                                                                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                                            },
                                                            largeImage: {
                                                                src: elem,
                                                                width: 1126,
                                                                height: 1200
                                                            },
                                                            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                                                        }}
                                                        {...rimProps}
                                                    />
                                                    {/* <img src={elem} alt="ProductImage" className='prodDetails-sliderImg1' /> */}
                                                </SwiperSlide>
                                                
                                                </>)
                                        })
                                    }
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                    >
                                    {
                                        images?.map((elem, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <img src={elem} alt="ProductImage" className='prodDetails-sliderImg2' />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        }
                    </div>
                    <div className="col-lg-6">
                        <div className="prod-details">
                            <h2>{loading ? <Skeleton height={30} width={320}/> : title}</h2>
                            <p>Brand : {loading ? <Skeleton height={20} width={70}/> : brand}</p>
                            <span>
                                {loading ? <Skeleton height={20} width={120}/> :
                                        <ReactStars
                                        count={5}
                                        value={rating}
                                        edit={false}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                        />
                                    }
                                {loading ? <Skeleton height={20} width={120}/> : stock} Stocks Left
                            </span>
                            <h5 className='price'>Price : {loading ? <Skeleton height={30} width={70}/> : `$${price}`}</h5>
                            <p className='quantity'>
                                Quantity :  <button onClick={decreaseQuan} className="quan-btn ms-2">-</button>
                                            <span>{quantity}</span>
                                            <button onClick={increaseQuan} className="quan-btn">+</button>
                            </p>
                            <button className="add-to-cart-btn">Add To Cart</button>
                            <p>{loading ? <Skeleton height={100}/> : description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;