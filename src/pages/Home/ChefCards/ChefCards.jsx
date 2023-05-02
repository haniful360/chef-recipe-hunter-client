import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const ChefCards = () => {
    const [chefCards, setChefCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then(res => res.json())
            .then(data => setChefCards(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                chefCards.map(item => <ChefCard
                    key={item.id}
                    item={item}
                ></ChefCard>)
            }
        </div>
    );
};

export default ChefCards;