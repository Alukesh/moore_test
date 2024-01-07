import React from 'react';
import TabsPicture from '../moleculs/TabsPicture';
import { tabsList } from '../../assets/data'
const TabsSection = () => {

    return (
        <section className='container scrollbar_primary mt-5 mb-12 flex gap-8 overflow-x-auto'>
            {
                tabsList.map((tab, idx) => (
                    <React.Fragment key={idx}>
                        <TabsPicture {...tab} />
                    </React.Fragment>
                ))
            }
            <TabsPicture/>
            <TabsPicture/>
            <TabsPicture/>
            <TabsPicture/>
            <TabsPicture/>
            <TabsPicture/>
            <TabsPicture/>
            <TabsPicture/>
            <TabsPicture/>
        </section>
    );
};

export default TabsSection;