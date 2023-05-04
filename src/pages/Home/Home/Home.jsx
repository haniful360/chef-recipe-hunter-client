import React from 'react';
import Banner from '../Banner/Banner';
import ChefCards from '../ChefCards/ChefCards';
import BrandName from '../BrandName/BrandName';
import SpecialDishes from '../SpecialDishes/SpecialDishes';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import { useEffect } from 'react';

const Home = () => {
    const [loading, setLoading] = useState(true);

    // loading spinner
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:w-[1280px] mx-auto'>
            <Banner></Banner>
            <ChefCards></ChefCards>
            <BrandName></BrandName>
            <SpecialDishes></SpecialDishes>
        </div>
    );
};

export default Home;