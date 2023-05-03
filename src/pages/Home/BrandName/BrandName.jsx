import React from 'react';
import brand1 from '../../../assets/b1.png'
import brand2 from '../../../assets/b2.png'
import brand3 from '../../../assets/b3.png'
import brand4 from '../../../assets/b4.png'

const BrandName = () => {
    return (
        <div className='mt-16'>
            <h1 className='banner-title text-center'>Our <span className='text-warning'>Brands</span></h1>
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center'>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
            </div>
        </div>
    );
};

export default BrandName;