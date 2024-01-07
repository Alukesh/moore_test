import React from 'react';
import slideImage from '../../assets/images/newsSlide1.png'

const NewsBlock = () => {
    return (
        <div className='px-2'>
            <div className='flex-col xs:flex-row flex justify-between px-5 py-10 bg-[#f0f9ff]'>
                <div className='flex flex-col items-start'>
                    <p className=' text-2xl font-bold'>-50%</p>
                    <span className='text-sm font-normal mb-5'>На кухонную мебель </span>
                    <button className='bg-[#0063a9] text-white py-2 px-6 rounded-xl'>Подробнее</button>
                </div>
                <img className='h-[100px]' src={slideImage} alt="" />
            </div>
        </div>
    );
};

export default NewsBlock;