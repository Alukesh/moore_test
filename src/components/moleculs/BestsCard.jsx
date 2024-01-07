import React, { useState } from 'react';
import IconLess from '../../assets/images/icons/icon-less.svg?react'
import IconMore from '../../assets/images/icons/icon-more.svg?react'
import IconHeart from '../../assets/images/icons/icon-heart.svg?react'

const BestsCard = ({ imageUrl, title, price, newPrice, count }) => {
    const [number, setNumber] = useState(count);
    const [like, setLike] = useState(false);
    function handleIncrease() {
        setNumber(prev => +prev + 1)
    }
    function handleDecrease() {
        if (number <= 0) return
        setNumber(prev => +prev - 1)
    }
    function handInputChange(e) {
        setNumber(e.target.value >= 0 ? e.target.value : 0)
    }
    function handleLike() {
        setLike(!like)
    }
    return (
        <div className='p-2'>
            <a href='#' onClick={(e) => e.preventDefault()} className='block bg-white text-start relative p-3 rounded-lg hover:shadow-softXl focus:shadow-softXl focus:outline-none'>
                <button onClick={handleLike} className='absolute bg-white/50 p-1 rounded top-[22px] right-[22px]'>
                    <IconHeart className={like ? 'fill-[#174261]' : 'fill-none stroke-black'} />
                </button>
                <img className='mb-2' src={imageUrl} alt={title} />
                <p className=' mb-2 text-sm h-14'>{title}</p>
                <p className=' font-bold text-lg leading-5'>
                    <span className=' text-red-500 font-bold text-lg'>{newPrice} {newPrice && 'c'} </span>
                    <span className={newPrice ? ' line-through text-sm font-bold text-gray-500' : ''}>{price} c</span>
                </p>
                <p className='text-green-500'>В наличии</p>
                <p className=' text-primary flex items-center gap-1'>
                    <span className=' bg-primary w-1 aspect-square block' />
                    <span>Комплект</span>
                </p>
                <div className='flex'>
                    <button onClick={handleDecrease} className=' bg-[#F5F5F5] p-1 rounded-full hover:bg-primary hover:fill-white transition'>
                        <IconLess />
                    </button>
                    <input onChange={handInputChange} className=' w-full text-center text-[15px]' type="number" value={number} />
                    <button onClick={handleIncrease} className=' bg-[#F5F5F5] p-1 rounded-full hover:bg-primary hover:fill-white transition'>
                        <IconMore />
                    </button>
                </div>
            </a>
        </div>
    );
};

export default BestsCard;