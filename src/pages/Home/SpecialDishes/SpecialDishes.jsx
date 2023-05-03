import React from 'react';
import { FaPizzaSlice, FaHamburger, FaBirthdayCake, FaCoffee, FaIceCream, FaGlassCheers } from 'react-icons/fa';
// import {    FaBirthdayCake } from 'react-icons/hi';

const SpecialDishes = () => {
    return (
        <div className='mt-12'>
            <h2 className='mb-12 special-title text-center'>Our <span className='text-warning'>Special</span> Dishes</h2>
            <div className='px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="rounded-lg bg-base-100 shadow flex flex-col justify-center items-center py-5 px-2">
                    <span><FaPizzaSlice style={{ color: 'red', fontSize: '45px' }}></FaPizzaSlice></span>
                    <h3 className='dishes-name mt-4 mb-2'>Tasty Pizza</h3>
                    <p className='dishes-des text-center'>How do you describe a delicious pizza?
                        Your favorite pizzeria should have dairy-fresh cheese, garden-fresh tomatoes and no wilting veggies. You want the best pizza to be cooked to a crisp. The cheese should be melted.</p>
                </div>
                <div className="rounded-lg bg-base-100 shadow flex flex-col justify-center items-center py-5 px-2">
                    <span><FaHamburger style={{ color: 'red', fontSize: '45px' }}></FaHamburger></span>
                    <h3 className='dishes-name mt-4 mb-2'>Tasty Burger</h3>
                    <p className='dishes-des text-center'>Shortened in length, the term Burger is used to describe a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun.</p>
                </div>
                <div className="rounded-lg bg-base-100 shadow flex flex-col justify-center items-center py-5 px-2">
                    <span><FaBirthdayCake style={{ color: 'red', fontSize: '45px' }}></FaBirthdayCake></span>
                    <h3 className='dishes-name mt-4 mb-2'>Tasty Sweets</h3>
                    <p className='dishes-des text-center'>The term dessert can apply to many sweets, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, macaroons, sweet soups, tarts, and fruit salad.</p>
                </div>
                <div className="rounded-lg bg-base-100 shadow flex flex-col justify-center items-center py-5 px-2">
                    <span><FaCoffee style={{ color: 'red', fontSize: '45px' }}></FaCoffee></span>
                    <h3 className='dishes-name mt-4 mb-2'>Healthy Breakfast</h3>
                    <p className='dishes-des text-center'>For the most nutritious breakfast, try to choose whole, unprocessed foods from each of the five food groups: fruits, vegetables, grains, protein foods, and dairy</p>
                </div>
                <div className="rounded-lg bg-base-100 shadow flex flex-col justify-center items-center py-5 px-2">
                    <span><FaIceCream style={{ color: 'red', fontSize: '45px' }}></FaIceCream></span>
                    <h3 className='dishes-name mt-4 mb-2'>Cold Ice-Creame</h3>
                    <p className='dishes-des text-center'>The Cold Stone Creamery is an American international ice cream parlor chain. Headquartered in Scottsdale, Arizona, the company is owned and operated by Kahala Brands. </p>
                </div>
                <div className="rounded-lg bg-base-100 shadow flex flex-col justify-center items-center py-5 px-2">
                    <span><FaGlassCheers style={{ color: 'red', fontSize: '45px' }}></FaGlassCheers></span>
                    <h3 className='dishes-name mt-4 mb-2'>Glass Cheers</h3>
                    <p className='dishes-des text-center'>Warding Off Evil: In Medieval times, glasses were clinked and people cheered loudly to ward off any demons or evil spirits.</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialDishes;