import React from "react";
import Home from "../../../images/icons/Home.png";
const HomeBtn = ({ label, width, height, variant }) => {
  return (
    <div>
      {variant === "primary" && (
        <button
          className={`${width} ${height} flex items-center gap-2 pl-2 bg-btnvariant1 text-white rounded-[6px] font-[Lato] text-[16px] leading-[19.2px]`}
        >
          <img className="w-[23.8px] h-[21px]" src={Home} alt="" />
          {label}
        </button>
      )}
      {variant === "secondary" && (
        <button
          className={`${width} ${height} flex items-center gap-2 pl-2 bg-primary text-white rounded-[6px] font-[Lato] text-[16px] leading-[19.2px]`}
        >
          <img className="w-[23.8px] h-[21px]" src={Home} alt="" />
          {label}
        </button>
      )}
    </div>
  );
};

export default HomeBtn;
