import React from 'react';
import { ImSpinner8 } from "react-icons/im";

const Loading = () => {
    return (
        <div className='w-full h-full absolute top-0 left-0 bg-white text-[50px] md:text-[60px] text-primary-blue flex justify-center items-center'>
            <ImSpinner8 className='animate-spin' />
        </div>
    );
};

export default Loading;