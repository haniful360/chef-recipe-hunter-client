import React, { useState } from 'react';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { GiEternalLove } from 'react-icons/gi';
import LazyLoad from 'react-lazy-load';

const Recipes = ({ recipe }) => {
    console.log(recipe);
    const [isDisabled, setIsDisabled] = useState(false)
    const { img, recipeName, rating, ingredients, cookingMethod } = recipe;
    const handleClick = () => {
        setIsDisabled(true);
        toast('Favorite button disabled successfully')
    }
    return (
        <div>
            <div className="shadow-xl rounded-lg h-[700px] relative">
                <LazyLoad>
                    <img className='lg:w-[500px] h-[250px] rounded mx-auto' src={img} />
                </LazyLoad>
                <div className="px-6">
                    <h2 className="recipe-name mt-4">{recipeName}</h2>
                    <p className='cooking-method'>{cookingMethod}</p>

                    <div className='mt-4'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaStar className="text-warning"></FaStar>}
                            placeholderSymbol={<FaRegStar className="text-warning"></FaRegStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />

                    </div>
                    <p className='ingredients'>Ingredients:{ingredients}</p>

                    <div className="absolute bottom-4">
                        <button disabled={isDisabled} onClick={handleClick} className='btn btn-warning capitalize text-white  flex items-center justify-center gap-2'>
                            <GiEternalLove style={{ color: 'red' }}></GiEternalLove>
                            Favorite</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;