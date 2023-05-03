import React from 'react';
import './Banner.css'
import banner from '../../../assets/main_img.png';
import LazyLoad from 'react-lazy-load';
const Banner = () => {
    return (
        <div>
            <div className='py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center width'>
                    <div>
                        <h1 className='banner-title'>Get Fresh <span className='text-linear text-transparent'>Food</span> <br />  in a Easy way </h1>
                        <p className='banner-describe'>FFresh food refers to food items that are minimally processed, uncooked or cooked to order, and have not been preserved or packaged for extended periods of time. These foods are typically found in the produce section of a grocery store, farmers markets or grown in your backyard.</p>
                        <button className="get-started-btn text-white font-bold  rounded capitalize text-[20px]">
                            <span className="">Order Now</span>
                        </button>
                    </div>
                    <div className='banner-img'>
                        <LazyLoad>
                            <img src={banner} alt="" />
                        </LazyLoad>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;