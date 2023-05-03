import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './ChefCard.css'
import LazyLoad from 'react-lazy-load';
const ChefCard = ({ item }) => {
    // console.log(item);
    const { name, img, experience, likes } = item;
    return (
        
            <div className="rounded-lg bg-base-100 shadow">
                <figure className="p-4">
                    <LazyLoad>
                        <img src={img} alt="" className="rounded-xl" />
                    </LazyLoad>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="chef-name">Name: {name}</h2>
                    <p className='experience'>Experience: {experience}</p>
                    <div className="flex justify-between gap-12 mt-4 ">
                        <div className="flex items-center gap-1 likes">
                            <AiFillLike style={{ color: 'blue', fontSize: '20px' }}></AiFillLike>
                            <span>{likes}k</span>
                        </div>
                        <Link to={`/chef/${item.id}`} ><button className="recipes">View Recipes</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default ChefCard;