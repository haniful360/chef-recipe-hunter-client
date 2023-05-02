import React from 'react';
import Banner from '../Banner/Banner';
import ChefCards from '../ChefCards/ChefCards';

const Home = () => {
    return (
        <div className='lg:w-[1280px] mx-auto'>
            <Banner></Banner>
            <ChefCards></ChefCards>
        </div>
    );
};

export default Home;