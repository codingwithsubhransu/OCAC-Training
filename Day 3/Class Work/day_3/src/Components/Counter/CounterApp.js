import React from 'react';
import './Counter.css';
import { useState } from 'react';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='card'>
            <h2>Counter: {count}</h2>
            <div className='buttons'>
                <button onClick={increment} className='incr_butt'>Increment</button>
                <button onClick={reset} className='reset_butt'>Reset</button>
                <button onClick={decrement} className='decr_butt'>Decrement</button>
            </div>
        </div>
    );
}

export default CounterApp;
