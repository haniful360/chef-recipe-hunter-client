import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h3 className='text-5xl flex justify-center items-center h-screen'>Not found 404</h3>
        </div>
    );
};

export default ErrorPage;