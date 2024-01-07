import React from 'react';

const CategoryBlock = ({ imageUrl, label, count, pic_position }) => {
    return (
        <button className='xl:w-[14.25%] lg:w-[20%] md:w-[20%] sm:w-[25%] xs:w-[33%] w-[50%] p-1  hover:shadow-softXl focus:shadow-softXl focus:outline-none'>
            <div className='relative h-40 bg-white rounded-lg p-3'>
                <p className=' text-sm font-medium'>{label}</p>
                <p className=' text-xs text-gray-400 mb-4'>{count} товаров</p>
                <img className={'absolute  right-0 bottom-0 ' + pic_position} src={imageUrl} alt={label} />
            </div>
        </button>
    );
};

export default CategoryBlock;