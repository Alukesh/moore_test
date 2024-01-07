import React from 'react';
import BestsCard from '../moleculs/BestsCard';
import Slider from 'react-slick';
import { SampleNextArrow } from '../atoms/SampleNextArrow';
import { SamplePrevArrow } from '../atoms/SamplePrevArrow';



const BestsSection = ({ slideElements, title, link }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
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
                <p className=' text-2xl font-semibold'>{title}</p>
                <a href='#catalog' className=' text-primary font-semibold'>перейти в каталог</a>
            </div>
            <Slider
                {...settings}
            >
                {
                    slideElements.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <BestsCard {...item} />
                        </React.Fragment>
                    ))
                }
            </Slider>
        </section>
    );
};

export default BestsSection;