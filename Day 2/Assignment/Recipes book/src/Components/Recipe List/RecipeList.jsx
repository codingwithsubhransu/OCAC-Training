import React from 'react';
import SearchRecipes from './SearchRecipes';
import './List.css';
import TypesSuggestion from './TypesSuggestion';
import Card from './Card';

const RecipeList = () => {
    return (
        <div className='recipe-list'>
            <SearchRecipes />
            <TypesSuggestion />
            <div className="list_recipe">
                <Card />
            </div>
        </div>
    );
}

export default RecipeList;
