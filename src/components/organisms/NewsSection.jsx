import React from 'react';
import Slider from 'react-slick';
import { SampleNextArrow } from '../atoms/SampleNextArrow';
import { SamplePrevArrow } from '../atoms/SamplePrevArrow';
import NewsBlock from '../moleculs/NewsBlock';

const NewsSection = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow className="rotate-180" />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 754,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    return (
        <section className='container mb-12'>
        <div className='flex mb-7 items-center justify-between'>
            <p className=' text-2xl font-semibold'>Новости</p>
            <a href='#catalog' className=' text-primary font-semibold'>все</a>
        </div>
        <Slider
            {...settings}
        >
            <NewsBlock/>
            <NewsBlock/>
            <NewsBlock/>
            <NewsBlock/>
        </Slider>
    </section>
    );
};

export default NewsSection;