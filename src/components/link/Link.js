import React from 'react';

const Link = ({link}) => {
    console.log(link)
    return (
        <div className=''>
            <li className='mr-12 font-bold text-orange-500'>{link.name}</li>
        </div>
    );
};

export default Link;