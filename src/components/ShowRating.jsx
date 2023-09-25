import { useState } from "react";
import StarRating from "./StarRating";
// import PropTypes from "prop-types";

const ShowRating = () => {
  const [rated, setRated] = useState(0);
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <StarRating onSetRating={setRated} />
      <p className="text-white">Movie Rate is: {rated}</p>
    </div>
  );
};

// StarRating.propTypes = {
//   maxRating: PropTypes.number,
//   defaultRating: PropTypes.number,
//   messages: PropTypes.array,
//   textColor: PropTypes.string,
//   textSize: PropTypes.string,
//   starColor: PropTypes.string,
//   starSize: PropTypes.number,
//   onSetRating: PropTypes.func,
// };

export default ShowRating;
