import React, { useState } from 'react';

function Script() {
  const [isLiked,setIsLiked] = useState(false);
  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };
                let likeStyle = {color: 'red'};
  return (
    <div>
      <span
        onClick={toggleHeart}
      
      >
        {isLiked ? 
        <i
          className="fa-solid fa-heart"
          onClick={toggleHeart} style={likeStyle}    ></i>:<i className='fa-regular fa-heart' ></i>}
      </span>
      <i className="fas fa-coffee" style={{ marginLeft: '10px' }}></i>
    </div>
  );
}

export default Script;