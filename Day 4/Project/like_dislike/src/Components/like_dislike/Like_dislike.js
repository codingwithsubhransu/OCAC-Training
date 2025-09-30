import React, { useState } from 'react';
import './Like_dislike.css';

const LikeDislike = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    return (

        <div className='like-dislike-container'>
            <div className='buttons'>
                <button className='like-btn' onClick={() => setLikeCount(likeCount + 1)}>Like</button>
                <button className='dislike-btn' onClick={() => setDislikeCount(dislikeCount + 1)}>Dislike</button>
            </div>
            <h1 className='like-count'>Likes: {likeCount}</h1>
            <h1 className='dislike-count'>Dislikes: {dislikeCount}</h1>
        </div>
    );
}

export default LikeDislike;
