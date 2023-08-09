import React from "react";
import { GoHistory } from "react-icons/go";
const HomeBtn = ({ label, width, height, variant }) => {
  return (
    <div className="mb-7">
      {variant === "primary" && (
        <button
          className={`${width} ${height} flex items-center gap-2 pl-2 bg-btnvariant1 text-white rounded-[6px] font-[Lato] text-[16px] leading-[19.2px]`}
        >
          <GoHistory className="h-[23.8px] w-[21px]"/>
          {label}
        </button>
      )}
      {variant === "secondary" && (
        <button
          className={`${width} ${height} flex items-center gap-2 pl-2 bg-primary text-white rounded-[6px] font-[Lato] text-[16px] leading-[19.2px]`}
        >
          <GoHistory/>
          {label}
        </button>
      )}
    </div>
  );
};

export default HomeBtn;
