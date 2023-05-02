import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const ChefDetails = () => {
    const { id } = useParams();
    const chefData = useLoaderData();
    const { name, img, experience, recipes, likes } = chefData
    // const [recipes, setRecipes] = useState(loaderData);
    // console.log(recipe);
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            {
                recipes.map((recipe, index) => <Recipes
                    key={index}
                    recipe={recipe}
                ></Recipes>)
            }
        </div>
    );
};

export default ChefDetails;