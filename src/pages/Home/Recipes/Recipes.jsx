import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Recipes = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const { recipeName, rating, ingredients, cookingMethod } = recipe;
    const handleClick = () => {
        setIsDisabled(true)
        toast('Favorite button is disabled')
    }
    return (
        <div>
            <h3> recipe name:{recipeName}</h3>
            <h3>rating:{rating}</h3>
            <button disabled={isDisabled} onClick={handleClick} className='btn btn-secondary'>favorite</button>
            <ToastContainer />
        </div>
    );
};

export default Recipes;