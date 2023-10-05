import { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const StarRating = ({
  maxRating = 5,
  defaultRating = 0,
  textColor,
  starColor,
  starLineColor,
  textSize = "",
  messages = [],
  onSetRating,
}) => {
  const txtSizeVariants = {
    sm: "text-[12px]",
    md: "text-[16px]",
    lg: "text-[18px]",
  };

  const txtVariants = {
    green: "text-green-500",
    red: "text-red-500",
    gold: "text-[#fcc419]",
  };

  const starColorVariants = {
    green: "fill-green-500",
    red: "fill-red-500",
    gold: "fill-[#fcc419]",
  };

  const starLineColorVariants = {
    green: "stroke-green-500",
    red: "stroke-red-500",
    gold: "stroke-[#fcc419]",
  };

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const onRateHandler = (rate) => {
    setRating(rate);
    onSetRating(rate);
  };
  const onHoverInHandler = (rate) => {
    setTempRating(rate);
  };
  const onHoverOutHandler = () => {
    setTempRating(0);
  };

  return (
    <div
      className={`flex-row justify-center items-center gap-x-4 inline-flex p-4 bg-[#343a40]  rounded-md `}
    >
      <div className="flex flex-row justify-center items-center gap-x-1 ">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => onRateHandler(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            hoverIn={() => onHoverInHandler(i + 1)}
            hoverOut={onHoverOutHandler}
            starColor={starColorVariants[starColor]}
            starLineColor={starLineColorVariants[starLineColor]}
          />
        ))}
      </div>
      <p className={`${txtVariants[textColor]} ${txtSizeVariants[textSize]}`}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
};
StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  messages: PropTypes.array,
  textColor: PropTypes.string,
  textSize: PropTypes.string,

  onSetRating: PropTypes.func,
};

export default StarRating;
