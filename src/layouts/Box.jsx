import { useState } from "react";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="bg-[#2b3035] rounded-md w-full px-6 py-2 flex flex-col">
      <div className="flex flex-row justify-end text-white font-bold">
        <button onClick={toggleHandler} className="btn-toggle">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen ? children : ""}
    </div>
  );
};

export default Box;
