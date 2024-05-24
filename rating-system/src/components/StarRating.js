import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const getMessage = () => {
    switch (rating) {
      case 1: return 'Very Bad';
      case 2: return 'Bad';
      case 3: return 'Good';
      case 4: return 'Very Good';
      case 5: return 'Excellent';
      default: return 'No Rating';
    }
  };

  return (
    <div className="star-container">
      <div>
        {[...Array(5)].map((star, index) => (
          <Star
            key={index}
            selected={index < rating}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <h2 className="rating-message">{getMessage()}</h2>
    </div>
  );
};

export default StarRating;