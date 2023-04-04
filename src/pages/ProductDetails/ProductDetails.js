import React, { useEffect, useState } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductDetails = () => {
    const [load, setLoad] = useState(false);
    const {id} = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [data, setData] = useState({});
    const {title, brand , rating, stock, price, description ,images} = data;

    useEffect( () => {
        setLoad(true)
        fetch(`http://localhost:5000/product/${id}`)
        .then(res =>  res.json())
        .then(data => setData(data));
        setLoad(false);
    }, []);

    if(!images){return};
    
    const rimProps =  {
        isHintEnabled: true,
        shouldHideHintAfterFirstActivation: false,
        enlargedImagePosition: 'over'
    }

    return (
        <div className='prod-details-main pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
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
                                                            alt: 'Wristwatch by Versace',
                                                            isFluidWidth: true,
                                                            src: elem,
                                                            srcSet: elem,
                                                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                                        },
                                                        largeImage: {
                                                            src: elem,
                                                            width: 1426,
                                                            height: 1500
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
                    </div>
                    <div className="col-lg-6">
                        <div className="prod-details">
                            <h2>{title}</h2>
                            <p>Brand : {brand}</p>
                            <span><i className="fa-solid fa-star"></i> {rating} | {stock} Stocks Left</span>
                            <h5>Price : ${price}</h5>
                            <p>
                                Quantity : <button className="btn btn-danger">-</button> 0 <button className="btn btn-success">+</button>
                            </p>
                            <button className="btn btn-primary">Add To Cart</button>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;