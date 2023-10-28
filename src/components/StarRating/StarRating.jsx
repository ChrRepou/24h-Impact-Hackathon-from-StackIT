import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(0);
  const [previousRating, setPreviousRating] = useState(0);

  const handleStarClick = (clickedRating) => {
    if (!buttonClicked)
    {
      let updatedClicks = clicks + 1;
      setClicks(updatedClicks);
      let updatedRate = (rating + clickedRating);
      setTotalRating((updatedRate / updatedClicks).toFixed(1));
      setRating(updatedRate);
      setPreviousRating(clickedRating);
      setButtonClicked(1);
    }
    else
    {
      let updatedRate = (rating - previousRating + clickedRating);
      setTotalRating((updatedRate / clicks).toFixed(1));
      setRating(updatedRate);
      setPreviousRating(clickedRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= totalRating ? 'filled' : ''}`}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="star-rating">{renderStars()}</div>
      <p>Rating: {totalRating} {'('}{clicks}{')'}</p>
      <style>
        {`
          .star {
            color: gray;
            cursor: pointer;
          }
          .filled {
            color: #fcba03;
            border-color: black;
          }
        `}
      </style>
    </div>
  );
};

export default StarRating;
