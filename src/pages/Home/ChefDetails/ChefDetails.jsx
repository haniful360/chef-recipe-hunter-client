import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import LazyLoad from 'react-lazy-load';
import { AiFillLike } from 'react-icons/ai';
import { AuthContext } from '../../../providers/AuthProviders';
import Loading from '../../Shared/Loading/Loading';


const ChefDetails = () => {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const chefData = useLoaderData();
    const { name, img, experience, recipes, likes, bioDescription, numberOfRecipes } = chefData;

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
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap py-12 px-12 bg-gradient-to-r from-[#FAC031] to-[#d8fa31d7] lg:w-[1280px] mx-auto rounded-lg mt-16 shadow-md">
                <div className=''>
                    <LazyLoad>
                        <img className='lg:w-[500px] h-[300px] rounded' src={img} alt="" />
                    </LazyLoad>
                </div>
                <div className="">
                    <h2 className="chef-name">Name: {name}</h2>
                    <p className='experience my-2'>Experience:{experience}</p>
                    <p className='likes flex items-center gap-1'>Likes: <AiFillLike style={{ color: 'blue', fontSize: '20px' }}></AiFillLike> {likes}k</p>
                    <p className='recipe-number my-2'>Number of Recipe:     {numberOfRecipes}</p>
                    <p className='bio-describe'>Bio:{bioDescription}</p>
                </div>
            </div>
            <div className='lg:w-[1280px] mx-auto grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {
                    recipes.map((recipe, index) => <Recipes
                        key={index}
                        recipe={recipe}
                    ></Recipes>)
                }</div>

        </div>
    );
};

export default ChefDetails;