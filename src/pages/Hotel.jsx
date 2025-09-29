import React from 'react';
import HotelHero from '../components/HotelHero';
import HotelAccom from '../components/HotelAccom';

const Hotel = () => {
    return (
        <div className='pt-[120px]'>
            <HotelHero />
            <HotelAccom />
        </div>
    );
};

export default Hotel;