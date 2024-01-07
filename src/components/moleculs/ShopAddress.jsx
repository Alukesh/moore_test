import React from 'react';
import ShopImg from '../../assets/images/shopAddressImg.svg?react'
import IconSmallArrow from '../../assets/images/icons/icon-smallArrow.svg?react'
import IconGeo from '../../assets/images/icons/icon-geolocation.svg?react'
import IconTime from '../../assets/images/icons/icon-time.svg?react'
import IconCall from '../../assets/images/icons/icon-call.svg?react'

const ShopAddress = () => {
    return (
        <div className='px-[5px]'>
            <div className=' bg-white p-4 rounded-lg'>
                <div className='flex mb-3 items-end'>
                    <ShopImg className=" h-11 mr-2"/>
                    <div>
                        <p className=' text-lg font-medium leading-none'>Iskender home</p>
                        <button className=' underline text-[#0062D5] text-xs'>открыть в карте</button>
                    </div>
                    <button className=' ml-auto'><IconSmallArrow/></button>
                </div>
                <p className='line h-[1px] bg-black/10 mb-6'></p>
                <div className='flex mb-5 items-start'>
                    <IconGeo className='mr-1'/>
                    <p className='text-sm'>Кыргызстан, г. Бишкек ул. <br /> Турусбекова A167</p>
                </div>
                <div className='flex justify-between text-xs'>
                    <div className='flex items-center gap-1'>
                        <IconTime/>
                        08:00 - 22:00
                    </div>
                    <div className='flex items-center gap-1'>
                        <IconCall/>
                        <a href="#+996 500 345 345">+996 500 345 345</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopAddress;