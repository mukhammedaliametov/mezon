import React from 'react';
import TubingHero from '../components/TubingHero';
import TubingTrack from '../components/TubingTrack';
import TubingGuests from '../components/TubingGuests';
import TubingSwiper from '../components/TubingSwiper';

const Tubing = () => {
    return (
        <div className='pt-[120px]'>
            <TubingHero />
            <TubingTrack />
            <TubingGuests />
            <TubingSwiper />
        </div>
    );
};

export default Tubing;