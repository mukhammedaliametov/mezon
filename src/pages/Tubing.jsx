import React from 'react';
import TubingHero from '../components/TubingHero';
import TubingTrack from '../components/TubingTrack';
import TubingGuests from '../components/TubingGuests';

const Tubing = () => {
    return (
        <div className='pt-[120px]'>
            <TubingHero />
            <TubingTrack />
            <TubingGuests />
        </div>
    );
};

export default Tubing;