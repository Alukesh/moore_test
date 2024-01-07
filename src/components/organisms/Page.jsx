import React from 'react';
import CategorysSection from '../organisms/CategorysSection';
import TabsSection from '../organisms/TabsSection';
import BestsSection from './BestsSection';
import { bestsLisderElements, auctionLisderElements } from '../../assets/data';
import NewsSection from './NewsSection';
import ShopAddressSection from './ShopAddressSection';

const Page = () => {
    return (
        <>
            <TabsSection/>
            <CategorysSection/>
            <BestsSection slideElements={bestsLisderElements} title={'Хиты продаж'}/>
            <NewsSection/>
            <BestsSection slideElements={auctionLisderElements} title={'Аукционные товары'}/>
            <ShopAddressSection/>
        </>
    );
};

export default Page;