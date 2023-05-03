import React from 'react';
import error from '../../../assets/error.jpg'
import LazyLoad from 'react-lazy-load';
import Header from '../Header/Header';


const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center items-center h-screen'>
                <LazyLoad>
                <img src={error} alt="" />
                </LazyLoad>
            </div>

        </div>
    );
};

export default ErrorPage;