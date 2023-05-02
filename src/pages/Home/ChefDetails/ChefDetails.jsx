import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const {id} = useParams();
    const loaderData = useLoaderData();
    console.log(loaderData);
    // console.log(loaderData);
    return (
        <div>
            <h3>chef details:{id}</h3>
        </div>
    );
};

export default ChefDetails;