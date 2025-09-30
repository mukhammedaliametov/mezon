import React from 'react';
import BBQHero from '../components/BBQHero';
import BBQCost from '../components/BBQCost';
import BBQSwpier from '../components/BBQSwiper';

const BBQ = () => {
    return (
        <div className='pt-[120px]'>
            <BBQHero />
            <BBQCost />
            <BBQSwpier />
        </div>
    );
};

export default BBQ;