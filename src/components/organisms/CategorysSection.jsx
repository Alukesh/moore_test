import React from 'react';
import CategoryBlock from '../moleculs/CategoryBlock';
import { categorysList } from '../../assets/data'
import Slider from 'react-slick';
import { SampleNextArrow } from '../atoms/SampleNextArrow';
import { SamplePrevArrow } from '../atoms/SamplePrevArrow';

const CategorysSection = () => {
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 7,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesPerRow: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesPerRow: 5,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesPerRow: 4,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesPerRow: 2,
                }
            },
        ]
      };
    return (
        <section className='container pb-14'>
            <p className=' text-2xl font-semibold mb-4'>Категории</p>
            <Slider {...settings}>
                {
                    categorysList.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <CategoryBlock {...item} />
                        </React.Fragment>
                    ))
                }
            </Slider>
        </section>
    );
};

export default CategorysSection;