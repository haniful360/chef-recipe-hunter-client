import React from 'react';
import Banner from '../Banner/Banner';
import ChefCards from '../ChefCards/ChefCards';
import BrandName from '../BrandName/BrandName';

const Home = () => {
    return (
        <div className='lg:w-[1280px] mx-auto'>
            <Banner></Banner>
            <ChefCards></ChefCards>
            <BrandName></BrandName>
        </div>
    );
};

export default Home;