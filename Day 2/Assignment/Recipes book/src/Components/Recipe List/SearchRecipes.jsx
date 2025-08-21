import React from 'react';
import './List.css';

const SearchRecipes = () => {
    return (
        <div className="search-recipes">
            <span>🔍</span>
            <input type="text" placeholder="Search for recipes..." />
        </div>
    );
}

export default SearchRecipes;
