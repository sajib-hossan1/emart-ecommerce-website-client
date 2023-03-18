import React from 'react';
import Slider from 'react-slick';
import './Partner.css'
import partner1 from '../../assets/partner/1.png'
import partner2 from '../../assets/partner/2.png'
import partner3 from '../../assets/partner/3.png'
import partner4 from '../../assets/partner/4.png'
import partner5 from '../../assets/partner/5.png'

const Partner = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        autoplay: true,
        responsive : [
            {
                breakpoint: 999,
                settings: {
                  slidesToShow: 3,
                  infinite: true,
                }
              },
            {
                breakpoint: 870,
                settings: {
                  slidesToShow: 2,
                  infinite: true,
                }
              },
            {
                breakpoint: 625,
                settings: {
                  slidesToShow: 2,
                  infinite: true,
                }
              },
            {
                breakpoint: 535,
                settings: {
                  slidesToShow: 1,
                  infinite: true,
                }
              }
        ]
      };
    return (
        <div className='partner-main'>
            <h3 className='text-center mb-4'>Our Partners</h3>
            <Slider {...settings}>
                <div>
                    <img className='image-fluid' src={partner1} alt="PartnerImage" />
                </div>
                <div>
                    <img className='image-fluid' src={partner2} alt="PartnerImage" />
                </div>
                <div>
                    <img className='image-fluid' src={partner3} alt="PartnerImage" />
                </div>
                <div>
                    <img className='image-fluid' src={partner4} alt="PartnerImage" />
                </div>
                <div>
                    <img className='image-fluid' src={partner5} alt="PartnerImage" />
                </div>
            </Slider>
        </div>
    );
};

export default Partner;