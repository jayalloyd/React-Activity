import React, { useState } from 'react';
import biriyani from '../assets/biriyani.jpeg';
import pizza from '../assets/pizza.jpeg';    
import burger from '../assets/burger.jpeg';
import pasta from '../assets/pasta.jpeg';
import samosa from '../assets/samosa.jpeg';

function Script() {
    const foods = [
        { name: "biriyani", image: biriyani },
        { name: "pizza", image: pizza },
        { name: "burger", image: burger },
        { name: "pasta", image: pasta },
        { name: "samosa", image: samosa }
    ];
    
    const [food, setFood] = useState(foods[0]);

    const handleFoodChange = (item) => {
        setFood(item);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Select your favourite food:</h2>
            {foods.map((item, index) => (
                <button 
                    key={index}
                    onClick={() => handleFoodChange(item)}
                    // style={{ margin: '5px', padding: '10px' }}
                >
                    {item.name}
                </button>
            ))}
            
            <h2 style={{ marginTop: '30px' }}>Your favorite food: {food.name}</h2>
            <img src={food.image} alt={food.name} width="300" />
        </div>
    );
}

export default Script;
