import React from 'react';

const Button = (props) => {
    return (
        <a href={props.link} className='w-full px-[40px] py-[15px] bg-primary-blue font-inter text-white rounded-[10px] text-center'>
            {props.name}
        </a>
    );
};

export default Button;