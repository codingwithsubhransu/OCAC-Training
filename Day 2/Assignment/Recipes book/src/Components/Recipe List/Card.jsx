import React from 'react';
import './List.css'
import Sphagetta from '../../../src/assets/Sphagetta Carbonara.png'
import Alfredo from '../../../src/assets/Chicken Alfredo.png'
import Beef_Tacos from '../../../src/assets/Beef Tacos.png'
import Caprese from '../../../src/assets/Caprese Salad.png'

const Card = () => {

    const recipes = [
        {
            id: 1,
            name: "Sphagetta Carbonara",
            image: Sphagetta,
            rating: "⭐⭐⭐⭐⭐",
            time: "20 min"
        },
        {
            id: 2,
            name: "Chicken Alfredo",
            image: Alfredo,
            rating: "⭐⭐⭐⭐⭐",
            time: "30 min"
        },
        {
            id: 3,
            name: "Beef Tacos",
            image: Beef_Tacos,
            rating: "⭐⭐⭐⭐⭐",
            time: "25 min"
        },
        {
            id: 4,
            name: "Caprese Salad",
            image: Caprese,
            rating: "⭐⭐⭐⭐⭐",
            time: "15 min"
        }
    ];

    return (
        <div className="card">
            {recipes.map(recipe => (
                <div className="card-component" key={recipe.id}>
                    <img src={recipe.image} alt={recipe.name} className='recipe-image'/>
                    <div className='recipe-info'>
                        <p><b>{recipe.name}</b></p>
                        <p>{recipe.rating} | {recipe.time}</p>
                    </div>
                </div>
            ))}

        </div>
    );
}


export default Card;
