import { useState } from "react";
import Star from "./Star";

const StarRating = ({
  maxRating = 5,
  defaultRating = 0,
  messages = [],
  textColor = "white",
  textSize = "md",
  starColor = "white",
  starSize = 5,
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const setRatingHandler = (rating) => {
    setRating(rating);
    onSetRating(rating);
  };
  return (
    <div className={`flex flex-row justify-center items-center gap-x-4 p-8 `}>
      <div className="flex flex-row justify-center items-center gap-x-2 ">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            color={starColor}
            size={starSize}
            key={i}
            onRate={() => setRatingHandler(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p className={`text-${textColor} text-${textSize}`}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};

export default StarRating;
