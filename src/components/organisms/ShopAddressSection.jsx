import React from 'react';
import Slider from 'react-slick';
import ShopAddress from '../moleculs/ShopAddress';

const ShopAddressSection = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className='container mb-12'>
            <div className='flex mb-7 items-center justify-between'>
                <p className=' text-2xl font-semibold'>Адреса магазинов</p>
            </div>
            <Slider
                {...settings}
            >
                {
                    [1,2,3,1,1,1,1,1].map((item, idx) => (
                        <React.Fragment key={idx}>
                            <ShopAddress/>
                        </React.Fragment>
                    ))
                }
            </Slider>
        </section>
    );
};

export default ShopAddressSection;