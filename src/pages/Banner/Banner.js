import React from 'react';
import Slider from 'react-slick';
import './Banner.css'
import banner1 from '../../assets/banner/banner - 1.jpg'
import banner2 from '../../assets/banner/banner - 2.jpg'
import banner3 from '../../assets/banner/banner - 3.jpg'
import banner4 from '../../assets/banner/banner - 4.jpg'
import banner5 from '../../assets/banner/banner - 5.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <div className='banner-main'>
            <Slider {...settings}>
                <div>
                    <Link to="/products">
                        <img className='img-fluid w-100' src={banner1} alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/products">
                        <img className='img-fluid' src={banner2} alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/products">
                        <img className='img-fluid' src={banner3} alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/products">
                        <img className='img-fluid' src={banner4} alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/products">
                        <img className='img-fluid' src={banner5} alt="" />
                    </Link>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;