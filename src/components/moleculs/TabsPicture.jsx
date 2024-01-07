import React from 'react';

const TabsPicture = ({ imageUrl, label }) => {

    if (!imageUrl && !label) {
        return (
            <div className='flex flex-col items-center animate-pulse gap-[10px]'>
                <div href={"#" + label} className=' rounded-full overflow-hidden shadow bg-gray-200 w-[60px] aspect-square'></div>
                <p className=' text-sm flex-wrap  bg-gray-200 w-14 h-4 rounded-md'></p>
            </div>
        );
    }


    return (
        <div className='flex flex-col items-center gap-2'>
            <a href={"#" + label} className='w-[60px] rounded-full overflow-hidden'>
                <img className=' w-[60px] aspect-square rounded-full' src={imageUrl} alt={label} />
            </a>
            <p className=' text-sm flex-wrap'>{label}</p>
        </div>
    );
};

export default TabsPicture;