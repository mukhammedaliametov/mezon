import React from 'react';
import BBQHero from '../components/BBQHero';
import BBQCost from '../components/BBQCost';

const BBQ = () => {
    return (
        <div className='md:pt-[120px]'>
            <BBQHero />
            <BBQCost />
        </div>
    );
};

export default BBQ;