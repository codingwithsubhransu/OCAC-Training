import React from 'react';
import './List.css'
import Sphagetta from '../../../src/assets/Sphagetta Carbonara.png'

const Card = () => {
    return (
        <div className="card">
            <div className="card-component">
                <img src={Sphagetta} alt="Sphagetta Carbonara" className='recipe-image'/>
                <h4>Sphagetta Carbonara</h4>
                <span>⭐⭐⭐⭐⭐</span>
            </div>


            <div className="card-component">
                <img src={Sphagetta} alt="Sphagetta Carbonara" className='recipe-image'/>
                <h4>Sphagetta Carbonara</h4>
                <span>⭐⭐⭐⭐⭐</span>
            </div>


            <div className="card-component">
                <img src={Sphagetta} alt="Sphagetta Carbonara" className='recipe-image'/>
                <span>⭐⭐⭐⭐⭐</span>
            </div>


            <div className="card-component">
                <img src={Sphagetta} alt="Sphagetta Carbonara" className='recipe-image'/>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
        </div>
    );
}

export default Card;
