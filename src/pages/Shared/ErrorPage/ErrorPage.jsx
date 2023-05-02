import React from 'react';
import error from '../../../assets/error.jpg'


const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
           <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;