import React from 'react';
import './List.css';

const TypesSuggestion = () => {

    const suggestion_list = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert']
    return (
        <div className='classification'>
            <ul>
                {suggestion_list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TypesSuggestion;
