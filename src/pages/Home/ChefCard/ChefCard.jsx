import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const ChefCard = ({ item }) => {
    // console.log(item);
    const { name, img, experience,likes } = item;
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Experience: {experience}</p>
                    <div className="flex items-center gap-2">
                    <AiFillLike></AiFillLike>
                    <span>{likes}k</span>
                    </div>
                    <div className="card-actions">
                        <Link to={`/chef/${item.id}`} ><button className="btn btn-info">Recipe Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;